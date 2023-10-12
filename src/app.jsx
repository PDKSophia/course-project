import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';
import WithDemoWrapper from './components/WithDemoWrapper';
import CountNumber from './simpleDemo/CountNumber';
import InputText from './simpleDemo/InputText';
import InputTextSearch from './simpleDemo/InputTextSearch';

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
          {/* <Demo1 />
          <Demo2 />
          <Demo3 />
          <Demo4 /> */}
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
