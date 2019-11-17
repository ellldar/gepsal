import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles';
import InfoElement from '../Elements/InfoElement';

export default class DetailsScreen extends React.Component {
  render() {
    return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Details</Text>
                </View>
                <View style={styles.content}>
                    <InfoElement title={"Upcoming Events"} info={"10:30 Meeting with Mr. Leo Tolstoy "}/>
                </View>
            </View>
    );
  }
}
