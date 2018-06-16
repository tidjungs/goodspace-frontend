import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import SearchTable from '../components/SearchTable';
import NavBar from '../components/NavBar';

class Children extends Component {
  state = {
    childrenData: [
      { id: 1234, name: 'test test', parent: 'abc', camp: 'A', goodSpace: true },
      { id: 1235, name: 'test test', parent: 'def, abc', camp: 'B', goodSpace: true },
      { id: 1235, name: 'test test', parent: 'def, abc', camp: 'B', goodSpace: false },
    ],
    activePage: 1,
    allPage: 10,
  }

  onPageChange = (e, { activePage }) => this.setState({ activePage })

  onSearchClick = () => {
    console.log('search...');
  }
  
  render() {
    const { childrenData, activePage, allPage } = this.state;
    return (
      <div className="container">
        <NavBar path="/" />
        <SearchBox 
          label="Who are you looking for?"
          type="children"
          path="/"
        />
        <SearchTable
          data={childrenData}
          path="/children/"
          activePage={activePage}
          allPage={allPage}
          onPageChange={this.onPageChange}
        />
      </div>
    );
  }
}

export default Children;
