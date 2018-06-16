import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import SearchTable from '../components/SearchTable';
import NavBar from '../components/NavBar';

class Camp extends Component {
  state = {
    parentData: [
      { name: 'test test', location: 'xxx', goodSpace: true },
      { name: 'test test', location: 'yyy', goodSpace: false }
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
          type="camp"
          path="/"
        />
        <SearchTable
          data={parentData}
          path="/camp/"
          activePage={activePage}
          allPage={allPage}
          onPageChange={this.onPageChange}
        />
      </div>
    );
  }
}

export default Camp;
