import React from 'react';
import './index.css';
import { useHistory } from 'react-router-dom';

function Notice() {
  const history = useHistory();
  return (
    <div style={{ margin: 12 }}>
      <div style={{ fontSize: 24 }}>这里是【消息中心】页面</div>
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
          history.push('/login');
        }}
      >
        前往登录页面
      </div>
      <div
        style={{ marginTop: '12px', color: '#198fff', cursor: 'pointer' }}
        onClick={() => {
          history.push('/');
        }}
      >
        返回主页
      </div>
    </div>
  );
}

export default Notice;
