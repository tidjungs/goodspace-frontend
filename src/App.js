import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import { Provider } from 'mobx-react';
import Store from './store';
import Main from './containers/Main';
import Dashboard from './containers/Dashboard';
import Parent from './containers/Parent';

class App extends Component {
  render() {
    return (
      <Provider Store={Store}>
        <Router>
          <div>
            <Route exact path="/" component={Main} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/parent" component={Parent} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
