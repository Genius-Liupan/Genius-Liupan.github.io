/**
 *  Date    : 2020/2/12
 *  Author  : CastileMan
 *  Declare : Gallery
 */
import React from 'react';
import classNames from 'classnames';

import Img from "@/components/Img";

import './Gallery.scss';

class Gallery extends React.PureComponent {
  static defaultProps = {
    className: '',
    desc: '',
    content: []
  };

  static Desc = ({ desc }) => {
    return (
      <div className="gallery-desc">{desc}</div>
    )
  };

  static Title = ({ title }) => {
    return (
      <h3 className="gallery-title">{title}</h3>
    )
  };

  render() {
    const { className, desc, content, itemProps = {} } = this.props;
    return (
      <div className={classNames("Gallery", className)}>
        {
          desc &&
          <Gallery.Desc desc={desc} />
        }

        {
          content.map((contentItem, index) => {
            const { title, pictureList = [], itemProps: contentItemProps = {}, extra } = contentItem;
            let imgProps = Object.assign({}, itemProps, contentItemProps);
            return (
              <React.Fragment key={index}>
                {
                  title &&
                  <Gallery.Title title={title} />
                }

                {
                  pictureList.length > 0 &&
                  <div className="gallery-picture-list">
                    {
                      pictureList.map((picture, picIndex) => {
                        let src = picture;
                        let props = imgProps;
                        if(typeof picture === "object") {
                          src = picture.src;
                          props = Object.assign({}, imgProps, picture.itemProps);
                        }
                        return (
                          <Img
                            {...props}
                            src={src}
                            key={picIndex}
                          />
                        )
                      })
                    }
                  </div>
                }

                {
                  extra && (
                    typeof extra === 'function' ?
                      extra()
                      :
                      extra
                  )
                }
              </React.Fragment>
            )
          })
        }
      </div>
    )
  }
}

export default Gallery;
