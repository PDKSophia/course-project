import React, { useState } from 'react';
import './index.css';

function CountNumber() {
  const [val, setVal] = useState(0);
  return (
    <div className="count-number">
      <div className="title1">1、数据值的操作</div>
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

export default CountNumber;
