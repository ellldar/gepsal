/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import SelectScreen from './components/SelectScreen';
import MainScreen from './components/MainScreen';

const AppNavigator = createAnimatedSwitchNavigator(
    {
        Select: SelectScreen,
        Main: MainScreen,
    },
    {
        initialRouteName: 'Select',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        },
        transition: (
            <Transition.Together>
                <Transition.Out
                    type="fade"
                    durationMs={400}
                    interpolation="easeIn"
                />
                <Transition.In type="fade" durationMs={400} />
            </Transition.Together>
        ),
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return (
            <AppContainer/>
        );
    }
}
