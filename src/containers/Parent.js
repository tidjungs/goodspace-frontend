import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import SearchBox from '../components/SearchBox';
import SearchTable from '../components/SearchTable';

class Parent extends Component {
  state = {
    parentData: [
      { id: 1234, name: 'test test', folowersCount: 10, childrenCount: 20, nature: 'THAI' },
      { id: 1234, name: 'test test', folowersCount: 12, childrenCount: 21, nature: 'LAO' }
    ]
  }

  onSearchClick = () => {
    console.log('search...');
  }
  
  render() {
    return (
      <div className="container">
        <SearchBox 
          label="Who are you looking for?"
          type="parent"
          path="/"
        />
        <SearchTable
          data={this.state.parentData}
        />
        {/* <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Parent Name</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table> */}
      </div>
    );
  }
}

export default Parent;
