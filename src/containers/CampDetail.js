import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import SearchTable from '../components/SearchTable';
import tentImg from '../images/tent.png';
import { Image } from 'semantic-ui-react'
import '../App.css'

class ChildrenDetail extends Component {
  state = {
    childrenData: [
      { id: 1234, name: 'test test', parent: 'abc', camp: 'A', goodSpace: true },
      { id: 1235, name: 'test test', parent: 'def, abc', camp: 'B', goodSpace: true },
      { id: 1235, name: 'test test', parent: 'def, abc', camp: 'B', goodSpace: false },
    ],
    activePage: 1,
    allPage: 10,
  }

  onSearchClick = () => {
    console.log('search...');
  }
  
  render() {
    const { childrenData, activePage, allPage } = this.state;
    return (
      <div className="container">
        <NavBar path="/parent" />
        <div className="grid-center">
          <Image src={tentImg} size="tiny" style={{margin:"auto"}}/>
          {/* <label>{`child name: ${this.props.match.params.childId}`}</label> */}
          <h1>-Bangken Camp-</h1>
          <br />
        </div>
        <div>
          <div className="flex-center">
            <h1>รายชื่อเด็กในแคมป์</h1>
          </div>
          <SearchTable
            data={childrenData}
            path="/children/"
            activePage={activePage}
            allPage={allPage}
            onPageChange={this.onPageChange}
          />
          <br />
        </div>
      </div>
    );
  }
}

export default ChildrenDetail;
