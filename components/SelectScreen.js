import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class SelectScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerTitle}>Welcome to Gepsal!</Text>
					<Text style={styles.headerText}>Please, choose your option</Text>
				</View>
				<TouchableOpacity style={styles.button1}
								  onPress={() => this.props.navigation.navigate('Main', { selection: 1})}>
					<Text style={styles.buttonText}>Customer</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button2}
								  onPress={() => this.props.navigation.navigate('Main')}>
					<Text style={styles.buttonText}>Translator</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	header: {
		flex: 1,
		width: '100%',
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: '#595286',
		paddingBottom: 10
	},
	headerTitle: {
		fontSize: 26,
		color: "#EEE",
		paddingBottom: 5
	},
	headerText: {
		fontSize: 18,
		color: "#EEE"
	},
	button1: {
		flex: 3,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#4ea1d1',
		padding: 10
	},
	button2: {
		flex: 3,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#4a81bb',
		padding: 10,
	},
	buttonText: {
		fontSize: 36,
		color: "#DDD"
	}
});
