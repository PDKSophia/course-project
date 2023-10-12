import React, { useState } from 'react';
import './index.css';
import LovePng from '../../static/love.png';
import RemarkPng from '../../static/remark.png';
import DownloadPng from '../../static/download.png';

const MENU = [
  {
    icon: LovePng,
    text: '我的喜欢',
  },
  {
    icon: RemarkPng,
    text: '我的评论',
  },
  {
    icon: DownloadPng,
    text: '我的下载',
  },
];
const Menu = () => {
  const [currentMenu, setCurrentMenu] = useState(MENU[0]);

  return (
    <div className="menu">
      <div className="title1">3、菜单栏</div>
      <div className="menu-box">
        {MENU?.map((menu, idx) => {
          return (
            <div
              className={`menu-submenu-item ${
                currentMenu?.text === menu?.text
                  ? 'menu-submenu-item-active'
                  : ''
              }`}
              key={idx}
              onClick={() => {
                setCurrentMenu(menu);
              }}
            >
              <img src={menu?.icon} className="icon-image-menu-item" />
              <span>{menu?.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
