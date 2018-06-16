import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'mobx-react'; 
import './App.css';
import Store from './store';
import Main from './containers/Main/';
import Dashboard from './containers/Dashboard';
import Parent from './containers/Parent';
import Children from './containers/Children';
import ChildrenDetail from './containers/ChildrenDetail';
import Camp from './containers/Camp';
import bg from './images/bg.png'


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
            <img className="background" src={bg} alt="" />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
