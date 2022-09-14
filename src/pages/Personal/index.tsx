/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2022-09-15 01:57:20
 * @LastEditTime: 2022-09-15 02:10:35
 */
import React from 'react';
import './index.css';
import { useHistory } from 'react-router-dom';

function Personal() {
  const history = useHistory();
  return (
    <>
      <div>这里是个人中心页面</div>
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

export default Personal;
