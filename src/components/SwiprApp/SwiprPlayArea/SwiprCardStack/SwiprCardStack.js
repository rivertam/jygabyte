/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component, PropTypes } from 'react';
import styles from './SwiprCardStack.css';
import withStyles from '../../../../decorators/withStyles'; // X.X
import { range } from 'ramda';

const NUM_CARDS = 6;
@withStyles(styles)
class SwiprCardStack extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  static contextTypes = { };

  underMeStack(numCards = NUM_CARDS - 1) {
    return range(0, numCards).map(id => <Card key={ numCards - id } order={ numCards - id }/>);
  }

  render() {
    return (
      <div className={ `${this.props.className} -card-stack` }>
        { this.underMeStack() }
        { /* I am very special, so I get to be squared up and not shadowed */ }
        <Card messiness={ 0 } order={ 0 } name="Ben" age="22" job="Software Engineer">
          <img src="https://scontent-lga3-1.xx.fbcdn.net/hphotos-xla1/v/t1.0-9/1916037_10153402147246909_6359506628277519595_n.jpg?oh=0b0678577f5e2cac0db6c233b46e6a21&oe=573CC821" />
        </Card>
      </div>
    );
  }

}

const Tag = ({ name, age, job }) => (
  <div className="Tag">
    <h2 className="name">{ name }</h2>, <span className="age">{ age }</span>
    <span className="job">{ job }</span>
  </div>
);

const Card = ({ order, messiness = 2, children, ...other } = {}) => (
  <div className="card-wrapper" style={ messyCardStyles({ messiness, order }) }>
    <div className="card">
      { children }
      <Tag { ...other } />
    </div>
  </div>
);

// something the client and server won't disagree on
function hash(numbers) {
  return (numbers.reduce((x, y) => x * y, 1) % 1000) / 1000.0;
}

function * alternator() {
  let current = 1;
  for (;;) {
    yield current;
    current = -current;
  }
}

const alternate = alternator();

function messyRotation(messiness, order) {
  const date = new Date() | 0;
  const magnitude = hash([order, date]);
  const direction = alternate.next().value;
  const pseudoRandomNumber = direction * magnitude;
  return `rotate(${pseudoRandomNumber * messiness}deg)`;
}

function backgroundColor(order) {
  const FADE_OUT = 20; // darkness of the card at the bottom of the stack
  const lightness = 100 - FADE_OUT * (order / NUM_CARDS);
  return `hsl(0, 0%, ${ lightness }%)`; // IE8 unsupported oh no
}

function messyCardStyles({ messiness, order }) {
  return {
    backgroundColor: backgroundColor(order),
    transform: messyRotation(messiness * 2, order),
  };
}


export default SwiprCardStack;
