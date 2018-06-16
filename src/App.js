import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import { Provider } from 'mobx-react';
import Store from './store';
import Main from './containers/Main';
import Dashboard from './containers/Dashboard';
import Parent from './containers/Parent';
import Children from './containers/Children';
import ChildrenDetail from './containers/ChildrenDetail';
import Camp from './containers/Camp';

class App extends Component {
  render() {
    return (
      <Provider Store={Store}>
        <Router>
          <div>
            <Route exact path="/" component={Main} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/parent" component={Parent} />
            <Route exact path="/children" component={Children} />
            <Route path="/children/:childId" component={ChildrenDetail} />
            <Route path="/camp" component={Camp} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
