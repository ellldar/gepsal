import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomeScreen from './CustomerScreens/HomeScreen';
import DetailsScreen from './CustomerScreens/DetailsScreen'
import {Text, View} from 'react-native';
import styles from './styles';
import InfoElement from './Elements/InfoElement';

class HistoryScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>History</Text>
                </View>
                <View style={styles.content}>
                    <InfoElement title={"History"} info={"Nov 10 - Meeting with Mr. Alex Smith"}/>
                    <InfoElement info={"Nov 8 - Meeting with Mrs. Samantha Lee"}/>
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
