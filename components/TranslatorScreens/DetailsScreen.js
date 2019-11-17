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
                    <InfoElement title={"Languages"} info={"English - Level 8"}/>
                    <InfoElement info={"Chinese - Level 6"}/>
                    <InfoElement info={"Russian - Level 10"}/>
                    <InfoElement title={"Specialties"} info={"International Trade"}/>
                </View>
            </View>
        );
    }
}
