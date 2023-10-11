import React from 'react';
import './index.css';

const WithDemoWrapper = (props) => {
  return (
    <div className="demo-box">
      <div className="demo-title">{props?.title || '示例代码'}</div>
      {props?.children}
    </div>
  );
};

export default WithDemoWrapper;
