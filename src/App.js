import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { Provider } from 'mobx-react';
import Store from './store';
import Main from './containers/Main';
import Dashboard from './containers/Dashboard';
import Parent from './containers/Parent';
import Children from './containers/Children';
import ChildrenDetail from './containers/ChildrenDetail';
import Camp from './containers/Camp';
import AddCamp from './containers/AddCamp';
import AddChildren from './containers/AddChildren';
import AddParent from './containers/AddParent';
import AddProject from './containers/AddProject';
import AddSuplier from './containers/AddSuplier';

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
            <Route path="/add/camp" component={AddCamp} />
            <Route path="/add/children" component={AddChildren} />
            <Route path="/add/parent" component={AddParent} />
            <Route path="/add/project" component={AddProject} />
            <Route path="/add/suplier" component={AddSuplier} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
