import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
export default function Header(props) {
	return (
		<SafeAreaView style={styles.header}>
			<View style={styles.title}>
				<View style={styles.title}>
					<Icon name="note" size={30} color="#271D6B" />
					<Text style={styles.text}> {props.headerDisplay}</Text>
				</View>
				<View>
					<MaterialIcon name="add" size={40} color="#271D6B" />
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 60,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#B9BBDF'
	},
	title: {
		marginVertical: 20,
		paddingHorizontal: 80,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontFamily: 'Roboto',
		color: '#271D6B',
		fontSize: 25,
		fontWeight: 900
	}
});
