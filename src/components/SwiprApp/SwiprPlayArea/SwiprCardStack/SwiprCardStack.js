/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component, PropTypes } from 'react';
import styles from './SwiprCardStack.css';
import withStyles from '../../../../decorators/withStyles'; // X.X
import { range } from 'ramda';

const NUM_CARDS = 6;

const randomMessiness = messiness => `rotate(${Math.random() * messiness - messiness / 2}deg)`;
function backgroundColor(order) {
  const FADE_OUT = 20; // darkness of the card at the bottom of the stack
  const lightness = 100 - FADE_OUT * (order / NUM_CARDS);
  return `hsl(0, 0%, ${ lightness }%)`; // IE8 unsupported oh no
}

function messyCardStyles({ messiness, order }) {
  return {
    backgroundColor: backgroundColor(order),
    transform: randomMessiness(messiness * 2),
  };
}


const MessyCard = ({ order, messiness = 3, children } = {}) => (
  <div className="card-wrapper" style={ messyCardStyles({ messiness, order }) }>
    <div className="card" >
      { children }
    </div>
  </div>
);


@withStyles(styles)
class SwiprCardStack extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  static contextTypes = { };

  underMeStack(numCards = NUM_CARDS - 1) {
    return range(0, numCards).map(id => <MessyCard order={ numCards - id } />);
  }

  render() {
    return (
      <div className={ `${this.props.className} -card-stack` }>

        { this.underMeStack() }
        { /* I am very special, so I get to be squared up and not shadowed */ }
        <MessyCard messiness={ 0 } order={ 0 }>
          <img src="https://scontent-lga3-1.xx.fbcdn.net/hphotos-xla1/v/t1.0-9/1916037_10153402147246909_6359506628277519595_n.jpg?oh=0b0678577f5e2cac0db6c233b46e6a21&oe=573CC821" />
        </MessyCard>
      </div>
    );
  }

}
export default SwiprCardStack;
