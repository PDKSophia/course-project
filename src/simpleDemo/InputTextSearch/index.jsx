import React, { useState } from 'react';
import './index.css';

function InputText() {
  const [val, setVal] = useState('');
  return (
    <div className="input-text">
      <div className="title1">3、搜索查询</div>
      <input
        className="value1"
        placeholder="请输入歌手名"
        value={val}
        onChange={(e) => setVal(e?.target?.value)}
      />
      <div className="action1">
        <div
          className="btn1_add"
          onClick={() => {
            if (!val) alert('未输入歌手名');
            else alert(`搜索歌手：${val}`);
          }}
        >
          搜索
        </div>
      </div>
    </div>
  );
}

export default InputText;
