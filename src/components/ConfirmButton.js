import React from 'react';
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react';

const ConfirmButton = ({ 

}) => {
  return (
    <div>
      <Button.Group>
        <Button positive>Save</Button>
        <Button.Or />
        <Button>Cancel</Button>
      </Button.Group>
    </div>
  )
}

ConfirmButton.propTypes = {

}

export default ConfirmButton;
