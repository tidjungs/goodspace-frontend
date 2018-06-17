import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'mobx-react'; 
import './App.css';
import Store from './store';
import Main from './containers/Main/';
import Dashboard from './containers/Dashboard';
import Parent from './containers/Parent';
import ParentDetail from './containers/ParentDetail';
import Children from './containers/Children';
import ChildrenDetail from './containers/ChildrenDetail';
import Camp from './containers/Camp';
import AddCamp from './containers/AddCamp';
import ManageCamapign from './containers/ManageCampaign/';
import AddChildren from './containers/AddChildren';
import AddParent from './containers/AddParent';
import AddProject from './containers/AddProject';
import AddSuplier from './containers/AddSuplier';
import bg from './images/bg.png'

const FooterRoute = ({ pathList }) => (
  <div>
    { pathList.map((path) => (<Route exact path={path} key={path} component={() => <img className="background" src={bg} alt="" />} />)) }
  </div>
)  

class App extends Component {
  render() {
    return (
      <Provider Store={Store}>
        <Router>
          <div>
            <Route exact path="/" component={Main} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/parent" component={Parent} />
            <Route exact path="/parent/:parentID" component={ParentDetail} />
            <Route exact path="/children" component={Children} />
            <Route exact path="/children/:childId" component={ChildrenDetail} />
            <Route exact path="/camp" component={Camp} />
            <Route exact path="/campaign" component={ManageCamapign} />
            <Route path="/add/camp" component={AddCamp} />
            <Route path="/add/children" component={AddChildren} />
            <Route path="/add/parent" component={AddParent} />
            <Route path="/add/project" component={AddProject} />
            <Route path="/add/suplier" component={AddSuplier} />
            <FooterRoute pathList={["/", "/parent", "/children", "/children/:childId", "/camp", "/campaign"]} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
