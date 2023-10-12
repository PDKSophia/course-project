import React, { useState } from 'react';
import './index.css';

function InputText() {
  const [val, setVal] = useState('周杰伦');
  return (
    <div className="input-text">
      <div className="title1">2、输入内容</div>
      <input
        className="value1"
        value={val}
        onChange={(e) => setVal(e?.target?.value)}
      />
    </div>
  );
}

export default InputText;
