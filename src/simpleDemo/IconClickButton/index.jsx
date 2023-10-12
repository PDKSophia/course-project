import React from 'react';
import './index.css';
import EarPhonePng from '../../static/earphone.png';
import LovePng from '../../static/love.png';
import MorePng from '../../static/more.png';
import NextSongPng from '../../static/next_song.png';
import PrevSongPng from '../../static/prev_song.png';
import PausePng from '../../static/pause.png';
import PlayingPng from '../../static/playing.png';
import RemarkPng from '../../static/remark.png';
import VolumePng from '../../static/volume.png';
import DownLoadPng from '../../static/download.png';

const IconClickButton = () => {
  const onClickIcon = (text) => {
    alert(`你点击了图标：${text}`);
  };
  return (
    <div className="icon-click-button">
      <div className="title1">1、图标响应事件</div>
      <div className="icon-list-flex">
        <img
          src={EarPhonePng}
          className="icon-image"
          onClick={() => onClickIcon('耳机')}
        />
        <img
          src={LovePng}
          className="icon-image"
          onClick={() => onClickIcon('收藏')}
        />
        <img
          src={MorePng}
          className="icon-image"
          onClick={() => onClickIcon('更多')}
        />
        <img
          src={PrevSongPng}
          className="icon-image"
          onClick={() => onClickIcon('上一曲')}
        />
        <img
          src={NextSongPng}
          className="icon-image"
          onClick={() => onClickIcon('下一曲')}
        />
        <img
          src={PausePng}
          className="icon-image"
          onClick={() => onClickIcon('播放')}
        />
        <img
          src={PlayingPng}
          className="icon-image"
          onClick={() => onClickIcon('暂停')}
        />
        <img
          src={RemarkPng}
          className="icon-image"
          onClick={() => onClickIcon('评论')}
        />
        <img
          src={VolumePng}
          className="icon-image"
          onClick={() => onClickIcon('音量')}
        />
        <img
          src={DownLoadPng}
          className="icon-image"
          onClick={() => onClickIcon('下载')}
        />
      </div>
    </div>
  );
};

export default IconClickButton;
