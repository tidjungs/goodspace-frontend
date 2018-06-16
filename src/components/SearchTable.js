import React from 'react';
import PropTypes from 'prop-types'
import { Table, Pagination } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import StatusCell from './StatusCell';

const SearchTable = ({ 
  data,
  path,
  activePage,
  allPage,
  onPageChange,
}) => {
  if (data.length === 0) {
    return (
      <div className="not-found">Not Found ...</div>
    )
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
                keys.map((key, indexKey) => {
                  if (key === 'name') {
                    return (
                    <Table.Cell key={indexKey}>
                      <Link to={`${path}${obj.id}`}><p>{ obj[key] }</p></Link>
                    </Table.Cell>
                   );
                  }
                  
                  if (key === 'goodSpace') {
                    return <StatusCell key={indexKey} status={obj[key]} />
                  }
                  
                  return (
                    <Table.Cell key={indexKey}>
                      <p>{ obj[key] }</p>
                    </Table.Cell>
                  );
                })
              }
            </Table.Row>
          ))
        }
      </Table.Body>
      {
        allPage > 1 &&
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan={keys.length}>
              <Pagination activePage={activePage} totalPages={allPage} onPageChange={onPageChange} />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      }
    </Table>
  )
}

SearchTable.propTypes = {
  data: PropTypes.array,
  path: PropTypes.string,
  activePage: PropTypes.number,
  allPage: PropTypes.number,
  onPageChange: PropTypes.func,
}


export default SearchTable;
