import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import SearchTable from '../components/SearchTable';
import girlImg from '../images/girl.png';
import { Image, Grid, Icon, Table } from 'semantic-ui-react'
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
          <Image src={girlImg} size="tiny" circular style={{margin:"auto"}}/>
          {/* <label>{`child name: ${this.props.match.params.childId}`}</label> */}
          <h1>-Waewprach Suthirawut-</h1>
          <br />
        </div>
        <div>
          <Grid divided='vertically'>
            <Grid.Row columns={3} >
              <Grid.Column>
                <div className="flex-center">
                  <Icon name="free code camp" size="big"/>
                  <h4>พักอาศัยในแคมป์</h4>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="flex-center">
                  <Icon name="users" size="big"/>
                  <h4>ติดตามมาประจำ</h4>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="flex-center">
                  <Icon name="check" size="big"/>
                  <h4>เรียนในเขต good space</h4>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <div className="flex-center">
                  <h1>Information</h1>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid divided='vertically'>
            <Grid.Row columns={3}>
              <Grid.Column>
                <div className="flex-center">
                  <h5>Name: Monpriya Tammavong</h5>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="flex-center">
                  <h5>Parent Name: Monpriya Tammavong</h5>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="flex-center">
                  <h5>Birthdate: 8 April 1997</h5>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <div className="flex-center">
                  <h1>รายชื่อผู้ติดตามที่เป็นเด็ก</h1>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
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
