import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import SearchTable from '../components/SearchTable';
import NavBar from '../components/NavBar';
import { childrenAdapter } from '../utils/adapter';
import { getChildren } from '../utils/api';


class Children extends Component {
  state = {
    childrenData: [
      // { id: 1234, name: 'test test', parent: 'abc', camp: 'A', goodSpace: true },
      // { id: 1235, name: 'test test', parent: 'def, abc', camp: 'B', goodSpace: true },
      // { id: 1235, name: 'test test', parent: 'def, abc', camp: 'B', goodSpace: false },
    ],
    activePage: 1,
    allPage: 10,
  }

  async componentDidMount() {
    const res = await getChildren();
    this.setState({
      childrenData: childrenAdapter(res.data.data),
      allPage: Math.ceil(res.data.count / 6)
    })
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
          path="/add/children"
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
