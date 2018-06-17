import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const ConfirmButton = ({
  onConfirmClick,
  onCancelClick,
}) => {
  return (
    <div>
      <Button.Group>
        <Button positive onClick={onConfirmClick}>Save</Button>
        <Button.Or />
        <Button onClick={onCancelClick}>Cancel</Button>
      </Button.Group>
    </div>
  )
}

ConfirmButton.propTypes = {
  onConfirmClick: PropTypes.func,
  onCancelClick: PropTypes.func,
}

export default ConfirmButton;
