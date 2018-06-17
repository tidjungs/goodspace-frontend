import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import SearchTable from '../components/SearchTable';
import NavBar from '../components/NavBar';
import { getChildren, searchChildren } from '../utils/api';
import { childrenAdapter } from '../utils/adapter';



class Children extends Component {
  state = {
    childrenData: [
      // { id: 1234, name: 'test test', parent: 'abc', camp: 'A', goodSpace: true },
      // { id: 1235, name: 'test test', parent: 'def, abc', camp: 'B', goodSpace: true },
      // { id: 1235, name: 'test test', parent: 'def, abc', camp: 'B', goodSpace: false },
    ],
    textSearch: '',
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

  onTextChange = e => {
    this.setState({
      textSearch: e.target.value
    })
  }

  onSearchClick = async () => {
    const res = await searchChildren(this.state.textSearch);
    this.setState({
      childrenData: childrenAdapter(res.data.data),
      allPage: Math.ceil(res.data.count / 6)
    });
  }
  
  render() {
    const { childrenData, activePage, allPage, textSearch } = this.state;
    return (
      <div className="container">
        <NavBar path="/" />
        <SearchBox 
          label="Who are you looking for?"
          type="children"
          text={textSearch}
          path="/add/children"
          onTextChange={this.onTextChange}
          onSearchClick={this.onSearchClick}
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
