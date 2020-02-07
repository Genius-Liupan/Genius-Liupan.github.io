/**
 *  Date    : 2020/1/28
 *  Author  : CastileMan
 *  Declare : 首页轮播
 */
import React from 'react';
import classNames from 'classnames';

import slider_computer_png from '@/assets/images/home/slider_computer.png';
import slider_cellphone_png from '@/assets/images/home/slider_cellphone.png';
import Utils from '@/utils/utils';

import './Slider.scss';

class Slider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      animate: true
    };
    this.sliderList = list.concat(list[0]);
  }

  setIndex(index, callback) {
    this.setState({
      index
    }, callback);
  }

  startTimer() {
    this.clearTimer();
    this.timer = window.setInterval(() => {
      this.rotateNext();
    }, INTERVAL);
  }

  rotateNext() {
    let { index } = this.state;
    index++;
    this.setIndex(index);

    if(index === this.sliderList.length - 1) {
      // 等待动画结束
      window.setTimeout(() => {
        // 停止动画
        this.setState({
          animate: false
        }, () => {
          this.setIndex(0);
          window.setTimeout(() => {
            // 重启动画
            this.setState({
              animate: true
            });
          }, 400);
        });
      }, 500);
    }
  }

  handleRotateClick = () => {
    this.clearTimer();
    this.rotateNext();
    this.startTimer();
  };

  clearTimer() {
    if(this.timer) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  render() {
    const { index, animate } = this.state;
    let paginationIndex = index + 1;
    if(index === this.sliderList.length - 1) {
      paginationIndex = 1;
    }
    return (
      <div className={classNames('DashboardSlider pos-rel dashboard-content', { animate })}>
        <div className="slider-square_container">
          <ul
            className="slider-square_list transform-el"
            style={{
              width: `${this.sliderList.length}00%`,
              transform: `translateX(-${100 / this.sliderList.length * index}%)`
            }}
          >
            {
              this.sliderList.map((item, i) => {
                const active = index === i;
                return (
                  <li
                    className={classNames('slider-square_item text-white pos-rel', { active })}
                    style={{
                      width: `${100 / this.sliderList.length}%`,
                      backgroundColor: item.color
                    }}
                    key={i}
                  >
                    <div className="slider-square_title pos-abs">{item.title}</div>
                    <div className="slider-square_desc pos-abs">{item.desc}</div>
                  </li>
                )
              })
            }
          </ul>
        </div>

        <div className="slider-content_container">
          <ul
            className="slider-content_list transform-el"
            style={{
              width: `${this.sliderList.length}00%`,
              transform: `translateX(-${100 / this.sliderList.length * index}%)`
            }}
          >
            {
              this.sliderList.map((item, i) => {
                const active = index === i;
                return (
                  <li
                    className={classNames('slider-content_item pos-rel', { active })}
                    style={{
                      width: `${100 / this.sliderList.length}%`,
                      backgroundImage: `radial-gradient(${item.gradientColorList.join(', ')})`
                    }}
                    key={i}
                  >
                    <img className={classNames("slider-content_image", item.imgClass)} src={item.picture} alt=""/>
                  </li>
                )
              })
            }
          </ul>

          <div className="slider-content_pagination">
            <span className="slider-content_pagination-text">{Utils.padStart(paginationIndex)}&nbsp;&nbsp;/&nbsp;&nbsp;{Utils.padStart(list.length)}</span>

            <span
              className="slider-content_pagination-rotate cursor-pointer"
              onClick={this.handleRotateClick}
            >
              <i className="ic ic-right" />
              <svg
                viewBox="0 0 100 100"
                key={paginationIndex}
              >
              <path
                d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96"
                stroke="#fff"
                strokeWidth="4"
                fillOpacity="0"
              />
            </svg>
            </span>
          </div>
        </div>

        <div className="slider-indicator text-center">
          <span className="slider-indicator-tip">滑动</span>
          <i className="ic ic-right" />
        </div>
      </div>
    )
  }
}

export default Slider;

const list = [
  {
    color: '#6067f2',
    gradientColorList: ['#6067f2 0%', '#4048e6 100%'],
    title: '后台设计',
    desc: '偏向于系统交互设计，B to C都有所涵盖',
    picture: slider_computer_png
  },
  {
    color: '#1ea992',
    gradientColorList: ['#1ea992 0%', '#0a947d 100%'],
    title: 'H5设计',
    desc: '绝大数是基于微信的公众号H5网页移动端，也有小程序相关',
    picture: slider_cellphone_png,
    imgClass: 'slider-image-cellphone'
  }
];

const INTERVAL = 5000;