/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './SwiprApp.css';
import withStyles from '../../decorators/withStyles';
import SwiprNav from './SwiprNav';

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
        <SwiprNav />
      </div>
    );
  }

}

export default SwiprApp;
