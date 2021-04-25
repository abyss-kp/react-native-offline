import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { showAddModal } from '../actions/modalAction';

function Header(props) {
	return (
		<SafeAreaView style={styles.header}>
			<View style={styles.title}>
				<View style={styles.title}>
					<Icon name="note" size={30} color="#fff" />
					<Text style={styles.text}> {props.headerDisplay}</Text>
				</View>
				<TouchableOpacity onPress={() => props.showAddModal(true)}>
					<MaterialIcon name="add" size={40} color="#fff" />
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

export default connect(null, { showAddModal })(Header);

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 60,
		alignItems: 'center',
		justifyContent: 'center',
		// backgroundColor: '#B9BBDF'
		// backgroundColor: '#F6F8FA'
		backgroundColor: '#000'
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
		// color: '#271D6B',
		color: '#fff',
		fontSize: 25,
		fontWeight: 900
	}
});
