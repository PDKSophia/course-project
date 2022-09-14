/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2022-09-15 02:01:01
 * @LastEditTime: 2022-09-15 02:11:42
 */
import React, { useState } from 'react';
import './index.css';
import { useHistory } from 'react-router-dom';

function Demo4() {
  const history = useHistory();
  return (
    <div className="demo4">
      <div className="title4">样例四: 路由跳转</div>
      <div className="action4">
        <div
          className="btn4_add"
          onClick={() => {
            window.open('https://www.baidu.com', '_blank');
          }}
        >
          跳去百度
        </div>
        <div
          className="btn4_reduce"
          onClick={() => {
            history.push('/personal');
          }}
        >
          前往个人中心页面
        </div>
        <div
          className="btn4_100"
          onClick={() => {
            history.push('/notice');
          }}
        >
          前往消息中心页面
        </div>
      </div>
    </div>
  );
}

export default Demo4;
