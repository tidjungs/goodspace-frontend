import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import SearchTable from '../components/SearchTable';
import NavBar from '../components/NavBar';

class Children extends Component {
  state = {
    childrenData: [
      { id: 1234, name: 'test test', parent: 'abc', camp: 'A' },
      { id: 1235, name: 'test test', parent: 'def, abc', camp: 'B' }
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
          type="children"
          path="/"
        />
        <SearchTable
          data={this.state.childrenData}
        />
      </div>
    );
  }
}

export default Children;
