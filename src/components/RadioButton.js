import React from 'react';
import PropTypes from 'prop-types'
import { Radio } from 'semantic-ui-react';

const RadioButton = ({ 
  label,
  choice,
  value,
  onChange
}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <div className="mr-1">    
        <b><label>{label}</label></b>
      </div>
      <div className="mr-1">
        <Radio label={choice[0]} value={choice[0]}  checked={value === choice[0]} onChange={onChange}/>
      </div>
      <div>
        <Radio label={choice[1]} value={choice[1]}  checked={value === choice[1]} onChange={onChange}/>
      </div>
    </div>
  )
}

RadioButton.propTypes = {
  label: PropTypes.string,
  choice: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default RadioButton;
