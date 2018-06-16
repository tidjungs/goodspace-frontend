import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import SearchBox from '../components/SearchBox';

class Parent extends Component {
  render() {
    return (
      <div className="container">
        <SearchBox 
          label="Who are you looking for?"
          type="child"
          path="/"
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
