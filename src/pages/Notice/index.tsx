/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2022-09-15 01:57:20
 * @LastEditTime: 2022-09-15 02:12:27
 */
import React from 'react';
import './index.css';
import { useHistory } from 'react-router-dom';

function Notice() {
  const history = useHistory();
  return (
    <>
      <div>这里是消息中心页面</div>
      <div
        style={{ marginTop: '12px', color: '#198fff', cursor: 'pointer' }}
        onClick={() => {
          history.push('/personal');
        }}
      >
        前往个人中心页面
      </div>
      <div
        style={{ marginTop: '12px', color: '#198fff', cursor: 'pointer' }}
        onClick={() => {
          history.push('/');
        }}
      >
        返回主页
      </div>
    </>
  );
}

export default Notice;
