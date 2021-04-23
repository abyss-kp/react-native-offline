import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as RootNavigation from './RootNavigation';

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
		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	button: {
		padding: 20,
		backgroundColor: 'black',
		flex: 1,
		borderLeftWidth: StyleSheet.hairlineWidth,
		borderLeftColor: '#b3b3b3'
	},
	text: {
		color: 'white',
		fontWeight: '900',
		fontSize: 14,
		textAlign: 'center'
	}
});
