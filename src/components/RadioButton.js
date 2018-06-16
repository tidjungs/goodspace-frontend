import React from 'react';
import PropTypes from 'prop-types'
import { Radio } from 'semantic-ui-react';

const RadioButton = ({ 
  label,
  choice1,
  choice2
}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <div class="mr-1">    
        <b><label>{label}</label></b>
      </div>
      <div class="mr-1">
        <Radio label={choice1} />
      </div>
      <div>
        <Radio label={choice2} />
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
