import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as RootNavigation from '../navigationRef';

//Not used anywhere
export default function Footer(props) {
	return (
		<View style={styles.footer}>
			<TouchableOpacity style={styles.button} onPress={() => RootNavigation.navigate('Home')}>
				<Text style={styles.text}>Active</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button} //onPress={() => RootNavigation.navigate('List')}
			>
				<Text style={styles.text}>Completed</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button} //onPress={() => RootNavigation.navigate('About')}
			>
				<Text style={styles.text}>All</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	footer: {
		width: '100%',
		height: 80,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	button: {
		padding: 20,
		backgroundColor: '#B9BBDF',
		flex: 1,
		borderRightWidth: StyleSheet.hairlineWidth,
		borderRightColor: '#f1f1f1'
	},
	text: {
		color: '#271D6B',
		fontWeight: 'bold',
		fontSize: 14,
		textAlign: 'center'
	}
});
