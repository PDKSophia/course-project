/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2022-09-15 00:59:08
 * @LastEditTime: 2022-09-15 01:35:51
 */
import React, { useState } from 'react';
import './index.css';
import list from './const';

function Demo2() {
  const [renderList, setRenderList] = useState(list);

  const onDelete = (studentAccount) => {
    const copyList = [...renderList];
    const findStudentIndex = copyList.findIndex(
      (i) => i.studentAccount === studentAccount
    );
    const deleteStudentInfo = copyList.splice(findStudentIndex, 1);
    console.log(`你刚才删除了一条数据，数据内容是：`, deleteStudentInfo?.[0]);
    setRenderList(copyList);
  };

  return (
    <div className="demo2">
      <div className="title2">样例二: 动态列表</div>
      <div className="action2_btn">
        <div
          className="action2_btn_random"
          onClick={() => {
            setRenderList((prev) => {
              let addStudentInfo = {
                id: prev.length + 1,
                studentName: `学生${prev.length + 1}`,
                studentAccount: 1900010 + prev.length * 10,
              };
              return [...prev].concat(addStudentInfo);
            });
          }}
        >
          添加一条随机数据
        </div>
        <div
          className="action2_btn_reset"
          onClick={() => {
            setRenderList(list);
          }}
        >
          重置
        </div>
      </div>
      <div className="table2">
        <div className="t">序号</div>
        <div className="t">账号</div>
        <div className="t">学生名</div>
        <div className="t">操作</div>
      </div>
      {renderList.map((item, index) => {
        return (
          <div className="value2" key={`${item.id}_${item.studentAccount}`}>
            <div className="v">{index + 1}</div>
            <div className="v">{item.studentAccount}</div>
            <div className="v">{item.studentName}</div>
            <div className="v">
              <div className="action2">
                <div
                  className="btn2_view"
                  onClick={() => {
                    window.alert(
                      `你正在查看${item.studentName}的信息\n他的账号是: ${item.studentAccount}`
                    );
                  }}
                >
                  查看
                </div>
                <div
                  className="btn2_delete"
                  onClick={() => onDelete(item.studentAccount)}
                >
                  删除
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Demo2;
