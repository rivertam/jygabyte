/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Phone.css';
import withStyles from '../../decorators/withStyles';
import StatusBar from './StatusBar';

@withStyles(styles)
class Phone extends Component {

  static propTypes = {
    children: PropTypes.element,
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="Phone">
        <div className="Screen-Wrapper">
          <div className="Screen">
            <StatusBar />
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }

}

export default Phone;
