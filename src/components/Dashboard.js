import React, { Component } from 'react';
import Cards from './Cards';
import Teams from './Teams';

class Dashboard extends Component {
  render() {
    return (
      <div className="bgGrey cardContainer">
        <Cards/>
        {/*<Teams />*/}
      </div>
    );
  }
}

export default Dashboard;
