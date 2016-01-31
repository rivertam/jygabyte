/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Phone.css';
import withStyles from '../../decorators/withStyles';

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
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }

}

export default Phone;
