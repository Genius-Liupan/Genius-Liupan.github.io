const { existsSync } = require('fs');
const { RawSource } = require('webpack-sources');

const PLUGIN_NAME = 'CopyLottieAnimationJson';

module.exports = class LottieLoadingPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    if(!this.options) {
      return;
    }

    const {
      json,
      containerId = DEFAULT_CONTAINER_ID,
      scriptCDN = DEFAULT_LOTTIE_SCRIPT_CDN,
      fileName = DEFAULT_JSON_FILE_NAME,
      style = '',
      duration = 2000
    } = this.options;

    compiler.hooks.emit.tapAsync(PLUGIN_NAME, (compilation, callback) => {
      if (!json) throw new Error(`Lottie json is not exists, please check.`);

      // Generate Html scripts
      compilation.assets['index.html'] = new RawSource(
        compilation.assets['index.html']
          .source()
          // 添加CDN & 样式
          .replace('</head>', `<script src="${scriptCDN}" type="text/javascript"></script>
            <style>
              #${containerId} {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 100000;
                background-color: white;
              }
              ${style}
            </style>
          </head>`)
          // 添加Loading DOM节点 & 动画脚本
          .replace('<body>', `<body><div id="${containerId}"></div><script id="${LOADING_SCRIPT_ID}" type="text/javascript">
            var __initialLoadTimeStamp = Date.now();
            // 加载动画
            bodymovin.loadAnimation({
              container: document.getElementById("${containerId}"),
              path: "${fileName}",
              renderer: 'svg',
              loop: true,
              autoplay: true,
            });
            
            function removeElById(id) {
              const el = document.getElementById(id);
              if(el) {
                el.parentElement.removeChild(el);
              }
            }
            
            // remove script element
            setTimeout(function() {
              removeElById("${LOADING_SCRIPT_ID}");
            }, 1000);
            
            window.addEventListener('load', function() {
              const now = Date.now();
              const diff = now - (__initialLoadTimeStamp + ${duration});
              if(diff >= 0) {
                removeElById("${containerId}");
              } else {
                setTimeout(() => {
                  removeElById("${containerId}");
                }, -diff);
              }
            }, false);
          </script>`)
      );

      // Copy lottie json
      compilation.assets[fileName] = new RawSource(JSON.stringify(json));
      callback();
    });
  }
};

const DEFAULT_LOTTIE_SCRIPT_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.6.6/lottie_svg.min.js';
const DEFAULT_JSON_FILE_NAME = 'loading-lottie-data.json';
const DEFAULT_CONTAINER_ID = '_lottieLoading';
const LOADING_SCRIPT_ID = '_lottieLoadingScript';
