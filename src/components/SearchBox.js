import React from 'react';
import PropTypes from 'prop-types'
import { Input, Icon, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const SearchBox = ({ 
  label,
  type,
  path,
  onTextChange,
  onSearchClick,
}) => {
  return (
    <div>
      <label>{label}</label><br />
      <div className="pt-1">
        <Icon size="large" color="grey" name="search" />
        <Input placeholder='Search...' />
        <span className="mr-1" />
        <Button size="small">Search</Button>
        <span className="mr-1" />
      </div>
      <div className="pl-2 pt-1">
        <Icon size="large" name="plus circle" /> <Link to={path}>{`Add new ${type}`}</Link>
      </div>
    </div>
  )
}

SearchBox.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  path: PropTypes.string,
  onTextChange: PropTypes.func,
  onSearchClick: PropTypes.func,
}


export default SearchBox;
