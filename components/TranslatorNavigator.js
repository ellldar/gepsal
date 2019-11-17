import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomeScreen from './TranslatorScreens/HomeScreen';
import DetailsScreen from './TranslatorScreens/DetailsScreen';

const TranslatorNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(TranslatorNavigator);
