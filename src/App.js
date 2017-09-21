import React, { Component } from 'react';
import logo from './logo.svg';
import './theme.css';
import './App.css';
import theme from './theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App flex">
          <Header/>
          <Navigation/>
          <Dashboard className="buffer"/>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
