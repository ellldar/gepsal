import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class InfoElement extends React.Component {
	render() {
		const {title, info} = this.props;
		return <View style={style.container}>
			{title && <Text style={style.title}>{title}</Text>}
			<View style={style.infoBox}>
				<Text style={style.infoText}>{info}</Text>
			</View>
		</View>
	}
};

const style = StyleSheet.create({
	container: {
		width: '100%',
		marginBottom: 10
	},
	title: {
		fontSize: 18,
		fontWeight: '600',
		marginBottom: 5
	},
	infoBox: {
		borderWidth: 1,
		borderColor: "#AAA",
		borderRadius: 5,
		padding: 10,
		backgroundColor: '#DDD'
	},
	infoText: {
		fontSize: 14,
		fontWeight: '600',
		color: '#222'
	}
});
