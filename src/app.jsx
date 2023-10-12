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
        </Route>
        <Route path="/personal" exact>
          {/* <Personal /> */}111
        </Route>
        <Route path="/notice" exact>
          {/* <Notice /> */}222
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
