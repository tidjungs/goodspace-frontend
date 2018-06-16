import React from 'react';
import PropTypes from 'prop-types'
import { Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const NavBar = ({
  path
}) => {
  return (
    <div>
      <Link to={path}><Icon name="arrow left" color="black" size="large"/></Link>
      <Link to="/"><Icon name="home" color="black" size="large"/></Link>
      <div className="mt-2" />
    </div>
  )
}

NavBar.propTypes = {
  path: PropTypes.string,
}

export default NavBar;