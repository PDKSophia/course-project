import React, { useState } from 'react';
import './index.css';

function Demo1() {
  const [val, setVal] = useState(0);
  return (
    <div className="demo1">
      <div className="title1">样例一: 值的操作</div>
      <input className="value1" value={val} disabled={true} />
      <div className="action1">
        <div
          className="btn1_add"
          onClick={() => {
            setVal((prev) => prev + 1);
          }}
        >
          加值
        </div>
        <div
          className="btn1_reduce"
          onClick={() => {
            setVal((prev) => prev - 1);
          }}
        >
          减值
        </div>
        <div
          className="btn1_100"
          onClick={() => {
            setVal(100);
          }}
        >
          设为100
        </div>
        <div
          className="btn1_reset"
          onClick={() => {
            setVal(0);
          }}
        >
          重置
        </div>
      </div>
    </div>
  );
}

export default Demo1;
