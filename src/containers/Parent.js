import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import SearchTable from '../components/SearchTable';
import NavBar from '../components/NavBar';

class Parent extends Component {
  state = {
    parentData: [
      { id: 1234, name: 'test test', folowersCount: 10, childrenCount: 20, nature: 'THAI' },
      { id: 1234, name: 'test test', folowersCount: 12, childrenCount: 21, nature: 'LAO' }
    ],
    activePage: 1,
    allPage: 10,
  }

  onPageChange = (e, { activePage }) => this.setState({ activePage })

  onSearchClick = () => {
    console.log('search...');
  }
  
  render() {
    const { parentData, activePage, allPage } = this.state;
    return (
      <div className="container">
        <NavBar path="/" />
        <SearchBox 
          label="Who are you looking for?"
          type="parent"
          path="/"
        />
        <SearchTable
          data={parentData}
          path="/parent/"
          activePage={activePage}
          allPage={allPage}
          onPageChange={this.onPageChange}
        />
      </div>
    );
  }
}

export default Parent;
