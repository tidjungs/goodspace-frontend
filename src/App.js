import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import { Provider } from 'mobx-react';
import Store from './store';
import Main from './components/Main';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <Provider Store={Store}>
        <Router>
          <div>
            <Route exact path="/" component={Main} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
