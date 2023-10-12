import React, { useState } from 'react';
import './index.css';
import ListLoopPlayPng from '../../static/list_loop_play.png';
import ShufflePlayPng from '../../static/shuffle_play.png';
import SinglePlayPng from '../../static/single_play.png';
import useClickAway from './useClickAway';

const MENU_PLAY_MODE = [
  {
    icon: ShufflePlayPng,
    text: '随机播放',
  },
  {
    icon: SinglePlayPng,
    text: '单曲循环',
  },
  {
    icon: ListLoopPlayPng,
    text: '列表循环',
  },
];
const PlayMode = () => {
  const [currentPlayMode, setCurrentPlayMode] = useState(MENU_PLAY_MODE[0]);
  const {
    ref: playModeRef,
    componentVisible,
    setComponentVisible,
  } = useClickAway({ initIsVisible: false });
  return (
    <div className="play-mode">
      <div className="title1">2、播放模式</div>
      <div className="play-mode-box">
        <div
          className="play-mode-item"
          onClick={() => setComponentVisible(true)}
        >
          <img src={currentPlayMode?.icon} className="icon-image" />
          <span>{currentPlayMode?.text}</span>
          <div
            className="play-mode-menu"
            ref={playModeRef}
            style={{ visibility: componentVisible ? 'visible' : 'hidden' }}
          >
            {MENU_PLAY_MODE?.map((menu, idx) => {
              return (
                <div
                  className={`play-mode-menu-item ${
                    currentPlayMode?.text === menu?.text
                      ? 'play-mode-menu-item-active'
                      : ''
                  }`}
                  key={idx}
                  onClick={() => {
                    setCurrentPlayMode(menu);
                  }}
                >
                  <img src={menu?.icon} className="icon-image-menu-item" />
                  <span>{menu?.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayMode;
