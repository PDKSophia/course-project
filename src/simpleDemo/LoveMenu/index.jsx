import React, { useState } from 'react';
import './index.css';
import LovePng from '../../static/love.png';
import RemarkPng from '../../static/remark.png';
import DownloadPng from '../../static/download.png';

const MENU = [
  {
    icon: '',
    text: '驾车行驶在高速口',
  },
  {
    icon: '',
    text: '清爽鸡尾酒的旋律',
  },
  {
    icon: '',
    text: '极致丧郁 深夜抑趣',
  },
  {
    icon: '',
    text: '沉醉电音说唱肆意摇摆',
  },
  {
    icon: '',
    text: '驾车邂逅黄昏落日时光',
  },
];
const LoveMenu = () => {
  const [currentMenu, setCurrentMenu] = useState(MENU[0]);

  return (
    <div className="love-menu">
      <div className="title1">4、带标题，不带图标的菜单栏</div>
      <div className="love-menu-box">
        <div className="love-menu-subtitle">我创建的歌单</div>
        {MENU?.map((menu, idx) => {
          return (
            <div
              className={`love-menu-submenu-item ${
                currentMenu?.text === menu?.text
                  ? 'love-menu-submenu-item-active'
                  : ''
              }`}
              key={idx}
              onClick={() => {
                setCurrentMenu(menu);
              }}
            >
              {menu?.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LoveMenu;
