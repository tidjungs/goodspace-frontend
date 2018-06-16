import React from 'react';
import { Table, Icon } from 'semantic-ui-react'
import { PropTypes } from 'mobx-react';

const StatusCell = ({ status }) => {
  if (status) {
    return  (
      <Table.Cell>
        <Icon color='green' name='checkmark' size='large' />
      </Table.Cell>
    )
  }
  return (
    <Table.Cell>
      <Icon color='red' name='close' size='large' />
    </Table.Cell>
  )
}

StatusCell.propTypes = {
  status: PropTypes.bool
}

export default StatusCell;
