import React, { Component } from 'react';
import '../App.css';
import '../theme.css';
import theme from '../theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Tab from 'react-toolbox/lib/tabs/Tab';
import Tabs from 'react-toolbox/lib/tabs/Tabs';

class Header extends Component {
  render() {
    return (
      <Tabs inverse>
        <Tab label='TEAMS'><small>Team Content Goes Here</small></Tab>
        <Tab label='PROJECTS'><small>Project Content Goes Here</small></Tab>
        <Tab label='INDIVIDUALS'><small>Individual Content Goes Here</small></Tab>
      </Tabs>
    );
  }
}

export default Header;
