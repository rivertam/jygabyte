/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './SwiprPage.css';
import withStyles from '../../decorators/withStyles';
import Phone from '../Phone';
import SwiprApp from '../SwiprApp';

@withStyles(styles)
class SwiprPage extends Component {

  static propTypes = { };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    this.context.onSetTitle('Ben Berman on Swipr');
    return (
      <div className="SwiprPage">
        <Phone>
          <SwiprApp />
        </Phone>
      </div>
    );
  }

}

export default SwiprPage;
