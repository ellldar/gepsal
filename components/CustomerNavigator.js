import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomeScreen from './CustomerScreens/HomeScreen';
import DetailsScreen from './CustomerScreens/DetailsScreen'
import {Text, View} from 'react-native';
import styles from './styles';

class HistoryScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>History</Text>
                </View>
                <View style={styles.content}>
                    <Text>Whatever</Text>
                </View>
            </View>
        );
    }
}

const CustomerNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
        History: HistoryScreen
    },
    {
        initialRouteName: 'Home'
    },
);

export default createAppContainer(CustomerNavigator);
