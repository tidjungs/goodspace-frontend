import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('Store')
@observer
class Main extends Component {
  render() {
    const { Store } = this.props;
    return (
      <div>
        <h1>{Store.birdCount}</h1>
        <button onClick={() => Store.addBird(1)}>ADD</button>
      </div>
    );
  }
}

export default Main;
