import React, { Component } from 'react';
import Card from 'react-toolbox/lib/card/Card';
import CardMedia from 'react-toolbox/lib/card/CardMedia';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import CardActions from 'react-toolbox/lib/card/CardActions';
import Button from 'react-toolbox/lib/button/Button';


class Cards extends Component {
  render() {
    return (
      <div className="bgGrey cardContainer">

        <Card style={{width: '350px'}}>
          <CardTitle title={"TEAMS"}/>
          <CardText className="LargeText">8</CardText>
          <CardActions>
            <Button label="Manage Teams"></Button>
          </CardActions>
        </Card>

        <Card style={{width: '350px'}}>
          <CardTitle title={"PROJECTS"}/>
          <CardText className="LargeText">13</CardText>
          <CardActions>
            <Button label="Manage Projects"></Button>
          </CardActions>
        </Card>

        <Card style={{width: '350px'}}>
          <CardTitle title={"Featured"}/>
        </Card>
        <Card style={{width: '350px'}}>
          <CardTitle title={"PEOPLE"}/>
          <CardText className="LargeText">33</CardText>
          <CardActions>
            <Button label="Manage People"></Button>
          </CardActions>
        </Card>

      </div>
    );
  }
}

export default Cards;
