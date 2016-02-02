/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './SwiprPlayArea.css';
import withStyles from '../../../decorators/withStyles';
import SwiprCardStack from './SwiprCardStack';

@withStyles(styles)
class SwiprPlayArea extends Component {

  static propTypes = { };

  static contextTypes = { };

  render() {
    return (
      <div>
        <SwiprCardStack className="Swipr-Card-Stack"/>
      </div>
    );
  }

}

export default SwiprPlayArea;
