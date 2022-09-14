import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';
import Demo1 from './demo/Demo1';
import Demo2 from './demo/Demo2';
import Demo3 from './demo/Demo3';
import Demo4 from './demo/Demo4';
import Personal from './pages/Personal';
import Notice from './pages/Notice';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="container">接下来将演示部分样例代码 !!!</div>
          <Demo1 />
          <Demo2 />
          <Demo3 />
          <Demo4 />
        </Route>
        <Route path="/personal" exact>
          <Personal />
        </Route>
        <Route path="/notice" exact>
          <Notice />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
