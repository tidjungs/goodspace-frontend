import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import SearchTable from '../components/SearchTable';
import NavBar from '../components/NavBar';

class Camp extends Component {
  state = {
    parentData: [
      { name: 'test test', location: 'xxx', goodSpace: true },
      { name: 'test test', location: 'yyy', goodSpace: false }
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
          type="camp"
          path="/"
        />
        <SearchTable
          data={this.state.parentData}
        />
      </div>
    );
  }
}

export default Camp;
