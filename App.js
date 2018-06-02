/**
 * MovieAPP
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import Welcome from './src/screens/welcome';

const RootStack = createStackNavigator (
  {
    welcome : {
      screen: Welcome,
      navigationOptions: {
        header: null,
      }
    }
  }
)

export default class App extends Component {
  render() {
    return (
    <RootStack/>
    );
  }
} 