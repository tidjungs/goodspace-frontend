import React from 'react';
import PropTypes from 'prop-types'
import { Label, Icon } from 'semantic-ui-react';

const PageTitle = ({ 
  label
}) => {
  return (
    <div>
      {/* <Label size="big" color="purple" basic> */}
        <Icon name='file' />
        <b>{label}</b>
      {/* </Label> */}
    </div>
  )
}

PageTitle.propTypes = {
  label: PropTypes.string,
}

export default PageTitle;
