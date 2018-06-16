import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import SearchTable from '../components/SearchTable';
import NavBar from '../components/NavBar';

class Parent extends Component {
  state = {
    parentData: [
      { id: 1234, name: 'test test', folowersCount: 10, childrenCount: 20, nature: 'THAI' },
      { id: 1234, name: 'test test', folowersCount: 12, childrenCount: 21, nature: 'LAO' }
    ]
  }

  onSearchClick = () => {
    console.log('search...');
  }
  
  render() {
    return (
      <div className="container">
        <NavBar path="/" />
        <SearchBox 
          label="Who are you looking for?"
          type="parent"
          path="/"
        />
        <SearchTable
          data={this.state.parentData}
          path="/parent/"
        />
      </div>
    );
  }
}

export default Parent;
