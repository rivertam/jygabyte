/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './StatusBar.css';
import withStyles from '../../../decorators/withStyles';

@withStyles(styles)
class StatusBar extends Component {

  static propTypes = {
    children: PropTypes.element,
  };

  static contextTypes = { };

  render() {
    return (
      <div className="Status-Bar">
        not a real phone
      </div>
    );
  }

}

export default StatusBar;
