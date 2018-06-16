import React, { Component } from 'react';
import './App.css';
import { Provider } from 'mobx-react';
import Store from './store';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <Provider Store={Store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
