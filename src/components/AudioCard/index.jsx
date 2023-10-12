import React, { useRef } from 'react';
import './index.css';
import DefaultVideoImage from './defaultVideoImage.png';
import LovePng from '../../static/love.png';
import MorePng from '../../static/more.png';

const AudioCard = React.memo((props) => {
  const imageRef = useRef(null);
  /**
   * @description 图片请求错误时显示默认占位图
   */
  const onloadImageError = () => {
    if (imageRef?.current) {
      imageRef.current.src = DefaultVideoImage;
    }
  };

  return (
    <div className="resource-audio-card-item">
      <div className="resource-audio-card-flex">
        <div className="resource-audio-card-cover">
          {props?.data?.cover && (
            <img
              ref={imageRef}
              className="image"
              src={props?.data?.cover}
              onError={onloadImageError}
            />
          )}
        </div>
        <div className="resource-audio-card-content">
          <div className="resource-audio-card-name">{props?.data?.name}</div>
          <div className="resource-audio-card-author">
            {props?.data?.author}
          </div>
          <div
            className={`resource-audio-card-action ${
              props?.isHoverVisible
                ? 'resource-audio-card-action-hover-visible'
                : ''
            }`}
          >
            <img src={LovePng} className="resource-audio-card-action-svg" />
            <img src={MorePng} className="resource-audio-card-action-svg" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default AudioCard;
