import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from '../styles'

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Translator Home</Text>
                </View>
                <View style={styles.content}>
                    <Text>Whatever</Text>
                </View>
            </View>
        );
    }
}
