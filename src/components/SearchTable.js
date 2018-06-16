import React from 'react';
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const SearchTable = ({ 
  data,
  path
}) => {
  if (data.length === 0) {
    return <div>Not Found ...</div>
  }
  const keys = Object.keys(data[0]);
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          {
            keys.map((key, index) => (
              <Table.HeaderCell key={index}>{key}</Table.HeaderCell>
            ))
          }
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {
          data.map((obj, index) => (
            <Table.Row key={index}>
              {
                keys.map((key, indexKey) => (
                  key === 'name' ? (
                    <Table.Cell key={indexKey}>
                      <Link to={`${path}${obj.id}`}>{ obj[key] }</Link>
                    </Table.Cell>
                  ) : (
                    <Table.Cell key={indexKey}>
                      { obj[key] }
                    </Table.Cell>
                  )
                ))
              }
            </Table.Row>
          ))
        }
      </Table.Body>
    </Table>
  )
}

SearchTable.propTypes = {
  data: PropTypes.array,
  path: PropTypes.string,
}


export default SearchTable;
