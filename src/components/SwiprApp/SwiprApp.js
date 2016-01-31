/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './SwiprApp.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class SwiprApp extends Component {

  static propTypes = { };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    this.context.onSetTitle('Ben Berman on Swipr');
    return (
      <div className="SwiprApp">
        <h1>All my life</h1>
        <h2>There you go</h2>
      </div>
    );
  }

}

export default SwiprApp;
