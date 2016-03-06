/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component, PropTypes } from 'react';
import styles from './SwiprApp.css';
import withStyles from '../../decorators/withStyles';
import SwiprNav from './SwiprNav';
import SwiprPlayArea from './SwiprPlayArea';
import { createStore } from 'redux';

const store = createStore(reducer);

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
        <SwiprPlayArea store={ store }/>
      </div>
    );
  }

}

function reducer(state, action) {
  switch (action.type) {
    case 'NAVIGATION':
      return navigate(state, action.destination);
    default:
      return state;
  }
}

function navigate(state, destination) {

}

export default SwiprApp;
