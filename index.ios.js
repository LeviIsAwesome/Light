import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator, NavigationActions} from 'react-navigation';

import HomePage from './screen/Homepage'
import Category from './screen/Category'
import TypePage from './screen/TypePage'
import WattPage from './screen/WattagePage'
import PackPage from './screen/PackagePage'
import FinalPage from './screen/FinalPage'

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
      </View>
    );
  }
}

const test = StackNavigator({
  HomePage: { screen: HomePage},
  Category: { screen: Category},
  TypePage: { screen: TypePage},      
  WattPage: { screen: WattPage},
  PackPage: { screen: PackPage},
  FinalPage: { screen: FinalPage}
})

AppRegistry.registerComponent('test', () => test);
