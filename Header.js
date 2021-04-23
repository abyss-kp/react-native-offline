import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
export default function Header(props) {
	return (
		<View style={styles.header}>
			<View style={styles.topBar}>
				<Icon name="note" size={30} color="#900" />
				<Text style={styles.text}> {props.headerDisplay}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 70,
		alignItems: 'center',
		justifyContent: 'center',
	},
	topBar: {
		marginTop: 20,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontFamily: 'Roboto'
	}
});
