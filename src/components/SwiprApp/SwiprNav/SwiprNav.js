/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './SwiprNav.css';
import withStyles from '../../../decorators/withStyles';
import Link from '../../Link';

@withStyles(styles)
class SwiprNav extends Component {

  static propTypes = { };

  static contextTypes = { };

  render() {
    return (
      <nav className="Swipr-App-Nav">
        <h2>Swipr</h2>
        <a className="Contact-Link" href="/contact" onClick={ Link.handleClick }>
          <i className="fa fa-comment" />
        </a>
        <div className="clearfix" />
      </nav>
    );
  }

}

export default SwiprNav;
