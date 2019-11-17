import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	header: {
		height: 80,
		width: '100%',
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: '#595286',
		paddingBottom: 10
	},
	headerTitle: {
		fontSize: 20,
		color: "#EEE",
		fontWeight: "500"
	},
	content: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#EEE',
		padding: 10
	},
});

export default styles;
