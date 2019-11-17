import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles'
import InfoElement from '../Elements/InfoElement';

export default class HomeScreen extends React.Component {
    render() {
        const data = [{
            id: 0,
            title: "Your preferred language pair",
            info: "English - Russian"
        }, {
            id: 1,
            title: "Language Specialty",
            info: "International Trade"
        }];
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Customer Home</Text>
                </View>
                <View style={styles.content}>
                    {data.map(i => <InfoElement key={i.id} title={i.title} info={i.info}/>)}
                </View>
            </View>
        );
    }
}
