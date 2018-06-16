import React from 'react';
import PropTypes from 'prop-types'
import { Input } from 'semantic-ui-react';

const TextInput = ({ 
  label,
  iconName,
  placeholder,
  value,
  onTextChange,
}) => {
  return (
    <div>
      <div className="mr-1">    
        <b><label>{label}</label></b>
      </div>
      <div>
        <Input icon={iconName} placeholder={placeholder} value={value} iconPosition='left' onChange={onTextChange}/><br />
      </div>
    </div>
  )
}

TextInput.propTypes = {
  label: PropTypes.string,
  iconName: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onTextChange: PropTypes.func,
}

export default TextInput;
