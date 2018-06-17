import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import SearchTable from '../components/SearchTable';
import NavBar from '../components/NavBar';
import { getCamp } from '../utils/api';
import { campAdapter } from '../utils/adapter';

class Camp extends Component {
  state = {
    campData: [
      { id: 1, name: 'test test', location: 'xxx', goodSpace: true },
      { id: 2, name: 'test test', location: 'yyy', goodSpace: false }
    ],
    activePage: 1,
    allPage: 1,
  }

  async componentDidMount() {
    const res = await getCamp();
    this.setState({
      campData: campAdapter(res.data.data),
      allPage: Math.ceil(res.data.count / 6),
    });
  }

  onPageChange = (e, { activePage }) => this.setState({ activePage })

  onSearchClick = () => {
    console.log('search...');
  }
  
  render() {
    const { campData, activePage, allPage } = this.state;
    return (
      <div className="container">
        <NavBar path="/" />
        <SearchBox 
          label="Who are you looking for?"
          type="camp"
          path="/add/camp"
        />
        <SearchTable
          data={campData}
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
