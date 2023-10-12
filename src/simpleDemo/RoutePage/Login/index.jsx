import React from 'react';
import './index.css';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();
  return (
    <div style={{ margin: 12 }}>
      <div style={{ fontSize: 24 }}>这里是【登录】页面</div>
      <div style={{ fontSize: 16, marginTop: 24, marginBottom: 24 }}>
        同学们自行实现~
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

export default Login;
