import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';
import WithDemoWrapper from './components/WithDemoWrapper';
import CountNumber from './simpleDemo/CountNumber';
import InputText from './simpleDemo/InputText';
import InputTextSearch from './simpleDemo/InputTextSearch';
import IconClickButton from './simpleDemo/IconClickButton';
import PlayMode from './simpleDemo/PlayMode';
import Menu from './simpleDemo/Menu';
import LoveMenu from './simpleDemo/LoveMenu';
import VideoCard from './components/VideoCard';
import ImageCard from './components/ImageCard';
import AudioCard from './components/AudioCard';

import RoutePage from './simpleDemo/RoutePage';
import LoginPage from './simpleDemo/RoutePage/Login';
import NoticePage from './simpleDemo/RoutePage/Notice';
import PersonalPage from './simpleDemo/RoutePage/Personal';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="container">下面将会演示简单例子的实现 !!!</div>
          <WithDemoWrapper title="样例一：如何操作数据？">
            <CountNumber />
            <InputText />
            <InputTextSearch />
          </WithDemoWrapper>
          <WithDemoWrapper title="样例二：如何响应事件？">
            <IconClickButton />
            <PlayMode />
            <Menu />
            <LoveMenu />
          </WithDemoWrapper>
          <WithDemoWrapper title="样例三：如何跳转路由？">
            <RoutePage />
          </WithDemoWrapper>
          <WithDemoWrapper title="样例四：组件例子">
            <div
              style={{
                fontSize: 18,
                opacity: 0.8,
                color: '#000000',
                marginLeft: 16,
                marginTop: 48,
              }}
            >
              1、视频 · Live 现场
            </div>
            <VideoCard
              data={{
                id: 'demo1',
                duration: 245,
                viewCount: 2000,
                projectName: '这是视频演示的案例一',
                videoUrl:
                  'https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761',
              }}
            />
            <VideoCard
              data={{
                id: 'demo2',
                duration: 364,
                viewCount: 19747,
                projectName: '这是视频演示的案例二',
                videoUrl:
                  'https://player.vimeo.com/external/436553499.sd.mp4?s=0e44527f269278743db448761e35c5e39cfaa52c&profile_id=139&oauth2_token_id=57447761',
              }}
            />
            <div
              style={{
                fontSize: 18,
                opacity: 0.8,
                color: '#000000',
                marginLeft: 16,
                marginTop: 48,
              }}
            >
              2、歌单图片组件
              <ImageCard
                data={{
                  cover:
                    'https://y.qq.com/music/common/upload/MUSIC_FOCUS/5971655.jpg?max_age=2592000',
                  name: '陈奕迅 全新数字专辑 预售开启',
                  author: '陈奕迅',
                  playCount: 369717445,
                }}
              />
              <ImageCard
                data={{
                  cover:
                    'https://y.qq.com/music/common/upload/MUSIC_FOCUS/5971446.jpg?max_age=2592000',
                  name: 'Troye Sivan 《Something To Give Each Other》首张纪念版专辑卡',
                  author: 'Troye Sivan',
                  playCount: 120574840,
                }}
              />
              <ImageCard
                data={{
                  cover:
                    'https://y.qq.com/music/common/upload/MUSIC_FOCUS/5974302.jpg?max_age=2592000',
                  name: '王心凌 全新专辑 正式上线',
                  author: '王心凌',
                  playCount: 1478458254,
                }}
              />
            </div>
            <div
              style={{
                fontSize: 18,
                opacity: 0.8,
                color: '#000000',
                marginLeft: 16,
                marginTop: 48,
              }}
            >
              3、歌曲播放组件 （鼠标悬浮出现图标）
              <AudioCard
                data={{
                  cover:
                    'https://y.qq.com/music/photo_new/T002R300x300M000002Neh8l0uciQZ_1.jpg?max_age=2592000',
                  name: '稻香',
                  author: '周杰伦',
                }}
                isHoverVisible={true}
              />
              <AudioCard
                data={{
                  cover:
                    'https://y.qq.com/music/photo_new/T002R300x300M000003DFRzD192KKD_1.jpg?max_age=2592000',
                  name: '七里香',
                  author: '周杰伦',
                }}
                isHoverVisible={true}
              />
            </div>
            <div
              style={{
                fontSize: 18,
                opacity: 0.8,
                color: '#000000',
                marginLeft: 16,
                marginTop: 48,
              }}
            >
              4、歌曲播放组件（图标常驻）
              <AudioCard
                data={{
                  cover:
                    'https://y.qq.com/music/photo_new/T002R300x300M000000K9Zp13TZp5s_1.jpg?max_age=2592000',
                  name: '天外来物',
                  author: '薛之谦',
                }}
              />
              <AudioCard
                data={{
                  cover:
                    'https://y.qq.com/music/photo_new/T002R300x300M000003y8dsH2wBHlo_1.jpg?max_age=2592000',
                  name: '绅士',
                  author: '薛之谦',
                }}
              />
            </div>
          </WithDemoWrapper>
          <WithDemoWrapper title=""></WithDemoWrapper>
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/personal" exact>
          <PersonalPage />
        </Route>
        <Route path="/notice" exact>
          <NoticePage />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
