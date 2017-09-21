import React, { Component } from 'react';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Link from 'react-toolbox/lib/link/Link';

class Header extends Component {
  render() {
    return (
      <AppBar title='Team Tracker Logo'>
        <Navigation type='horizontal'>
          <Link label='AccoutName'/>
        </Navigation>
      </AppBar>
    );
  }
}

export default Header;
