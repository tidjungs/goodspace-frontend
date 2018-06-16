import React from 'react';
import PropTypes from 'prop-types'
import { Radio } from 'semantic-ui-react';

const RadioButton = ({ 
  label
}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <div class="mr-1">    
        <b><label>{label}</label></b>
      </div>
      <div class="mr-1">
        <Radio label='Yes' defaultChecked />
      </div>
      <div>
        <Radio label='No' />
      </div>
    </div>
  )
}

RadioButton.propTypes = {
  label: PropTypes.string,
  iconName: PropTypes.string,
  placeholder: PropTypes.string,
  onTextChange: PropTypes.func,
}

export default RadioButton;
