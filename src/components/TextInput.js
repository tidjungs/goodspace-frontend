import React from 'react';
import PropTypes from 'prop-types'
import { Input } from 'semantic-ui-react';

const TextInput = ({ 
  label,
  iconName,
  placeholder,
  onTextChange,
}) => {
  return (
    <div>
      <div class="mr-1">    
        <b><label>{label}</label></b>
      </div>
      <div>
        <Input icon={iconName} placeholder={placeholder} iconPosition='left'/><br />
      </div>
    </div>
  )
}

TextInput.propTypes = {
  label: PropTypes.string,
  iconName: PropTypes.string,
  placeholder: PropTypes.string,
  onTextChange: PropTypes.func,
}

export default TextInput;
