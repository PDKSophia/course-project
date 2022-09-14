/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2022-09-15 01:37:10
 * @LastEditTime: 2022-09-15 02:00:25
 */
import React, { useState } from 'react';
import './index.css';
import AccountManger from './pages/AccountManger';
import CoursewareManager from './pages/CoursewareManager';
import DataManager from './pages/DataManager';
import TeacherManager from './pages/TeacherManager';

const TabType = {
  AccountManager: 'accountManager',
  CourseWareManager: 'coursewareManager',
  DataManager: 'dataManager',
  TeacherManager: 'teacherManager',
};

function Demo3() {
  const [activeTab, setActiveTab] = useState(TabType.AccountManager);
  return (
    <div className="demo3">
      <div className="title3">样例三: 导航栏切换</div>
      <div className="layout3">
        <div className="nav3">
          <div
            className={`tab3_1 ${
              activeTab === TabType.AccountManager ? 'active3' : ''
            }`}
            onClick={() => setActiveTab(TabType.AccountManager)}
          >
            账号管理
          </div>
          <div
            className={`tab3_1 ${
              activeTab === TabType.CourseWareManager ? 'active3' : ''
            }`}
            onClick={() => setActiveTab(TabType.CourseWareManager)}
          >
            课程管理
          </div>
          <div
            className={`tab3_1 ${
              activeTab === TabType.DataManager ? 'active3' : ''
            }`}
            onClick={() => setActiveTab(TabType.DataManager)}
          >
            数据管理
          </div>
          <div
            className={`tab3_1 ${
              activeTab === TabType.TeacherManager ? 'active3' : ''
            }`}
            onClick={() => setActiveTab(TabType.TeacherManager)}
          >
            教师管理
          </div>
        </div>
        <div className="content3">
          {activeTab === TabType.AccountManager && <AccountManger />}
          {activeTab === TabType.CourseWareManager && <CoursewareManager />}
          {activeTab === TabType.DataManager && <DataManager />}
          {activeTab === TabType.TeacherManager && <TeacherManager />}
        </div>
      </div>
    </div>
  );
}

export default Demo3;
