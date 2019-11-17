/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import CustomerNavigator from './CustomerNavigator';
import TranslatorNavigator from './TranslatorNavigator';

export default class MainScreen extends React.Component {
  render() {
    return (
        <View style={{flex: 1}}>
          {this.props.navigation.state.params ?
			  <CustomerNavigator/> : <TranslatorNavigator/>
          }
        </View>
    );
  }
}

const styles = StyleSheet.create({
  content:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  }
});
