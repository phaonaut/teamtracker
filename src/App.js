import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './theme.css';
import theme from './theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header/>

        </div>
      </ThemeProvider>
    );
  }
}

export default App;
