import React, { Component } from 'react';
import Drawer from 'react-toolbox/lib/drawer/Drawer';


class Navigation extends Component {
  state = {
    active: false
  }

  handleToggle= () => {
    this.setState({active: !this.state.active});
  }

  render() {

    return (
      <div>
          <div className="circleFlex">
            <div className="circleButtonRed"></div>
            <div className="circleButtonGreen"></div>
            <div className="circleButtonBlue"></div>
          </div>

          <Drawer active={this.state.active} onOverlayClick={this.handleToggle}>
            <p>Hi</p>
          </Drawer>
      </div>
    );
  }
}

export default Navigation;
