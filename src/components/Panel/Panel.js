import React, { Component } from 'react';
import Login from './Login';
import Overlay from './Overlay';

export default class Panel extends Component {
  state = {
    rightPanelActive: true
  };

  handleButtonClick = () => {
    const { rightPanelActive } = this.state;
    this.setState({
      rightPanelActive: !rightPanelActive
    });
  };

  render() {
    const { rightPanelActive } = this.state;
    return (
      <div
        className={
          rightPanelActive ? 'container right-panel-active' : 'container'
        }
        id="container"
      >
        <Login onButtonClick={this.handleButtonClick} />

        <Overlay />
      </div>
    );
  }
}
