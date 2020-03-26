const lottieJSON = require('./src/assets/json/loading.data');

module.exports = {
  title: 'Panda个人网站',
  port: 3000,
  lottie: {
    json: lottieJSON,
    duration: 2300,
    width: '2rem',
    height: '2rem'
  },
  //proxy: {
  //  '/api': {
  //    target: 'http://localhost:3000',
  //    pathRewrite: {'^/api' : ''},
  //    secure: true,
  //    changeOrigin: true
  //  }
  //}
};
