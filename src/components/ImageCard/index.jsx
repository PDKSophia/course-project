import React, { useRef } from 'react';
import './index.css';
import DefaultVideoImage from './defaultVideoImage.png';
import PausePng from '../../static/pause.png';
import EarPhonePng from '../../static/earphone.png';

const ImageCard = React.memo((props) => {
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
    <div className="resource-video-card-item">
      <div className="resource-video-card-cover">
        <img
          ref={imageRef}
          className="resource-video-card-cover-url"
          src={props?.data?.cover}
          onError={onloadImageError}
        />
      </div>
      <div className={`resource-video-card-hover-mask`}>
        <img src={PausePng} className="resource-video-card-add-svg" />
      </div>
      <div className="resource-video-card-name">{props?.data?.name}</div>
      <div className="resource-video-card-author">{props?.data?.author}</div>
      <div className="resource-video-card-play">
        <img src={EarPhonePng} className="resource-video-card-play-icon" />
        {props?.data?.playCount} 次
      </div>
    </div>
  );
});

export default ImageCard;
