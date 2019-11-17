import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles';

export default class DetailsScreen extends React.Component {
  render() {
    return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Details</Text>
                </View>
                <View style={styles.content}>
                    <Text>Whatever</Text>
                </View>
            </View>
    );
  }
}
