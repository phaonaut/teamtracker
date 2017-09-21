import React, { Component } from 'react';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';


class Teams extends Component {
  render() {
    return (
      <div>
        <List>
          <ListItem caption="Thunder Cats" legend="Projects: Gateway Portal, Web Api"/>
          <ListItem caption="Thunder Cats" legend="Projects: Gateway Portal, Web Api"/>
          <ListItem caption="Thunder Cats" legend="Projects: Gateway Portal, Web Api"/>
        </List>
      </div>
    );
  }
}

export default Teams;
