import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div className="container">广州华商学院前端项目搭建起来了！!!</div>
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
