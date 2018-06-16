import React, { Component } from 'react';

class ChildrenDetail extends Component {
  state = {
    childrenData: { id: 1234, name: 'test test', parent: 'abc', camp: 'A' },
  }

  onSearchClick = () => {
    console.log('search...');
  }
  
  render() {
    return (
      <div className="container">
        <label>{`child id: ${this.props.match.params.childId}`}</label>
      </div>
    );
  }
}

export default ChildrenDetail;
