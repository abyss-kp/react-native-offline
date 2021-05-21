import React, { useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, TextInput, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { showAddModal } from '../actions/modalAction';
import { addToDo, resetToDo } from '../actions/toDoAction';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const AddModal = (props) => {
	const [todo, setTodo] = useState('');

	const handleSave = () => {
		props.showAddModal(false);
		props.addToDo({
			id: Date.now(),
			todo,
			status: 'Active'
		});
	};
	return (
		<View style={styles.centeredView}>
			<Modal
				animationType="slide"
				transparent={true}
				style={{ borderWidth: 0, borderColor: 'none', alignSelf: 'center' }}
				visible={props.show}
				onRequestClose={() => {
					props.showAddModal(false);
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<TouchableOpacity
							onPress={() => {
								props.resetToDo();
								props.showAddModal(false);
							}}
							style={styles.closeBtn}
						>
							<MaterialCommunityIcons name="window-close" size={35} color="#7e7f82" />
						</TouchableOpacity>
						<Text style={styles.modalText}>Add item </Text>
						<TextInput style={styles.input} onChangeText={(val) => setTodo(val)} multiline value={todo} placeholder="Enter To Do" />
						<Pressable style={[styles.button, styles.buttonClose]} onPress={handleSave}>
							<Text style={styles.textStyle}>Save</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
		borderColor: 'transparent'
	},
	closeBtn: {
		position: 'absolute',
		top: 5,
		right: 10
	},
	modalView: {
		backgroundColor: 'white',
		width: 300,
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	input: {
		width: '90%',
		height: 80,
		padding: 10,
		margin: 12,
		borderWidth: 1,
		borderColor: '#000',
		borderRadius: 10
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2
	},
	buttonOpen: {
		backgroundColor: '#F194FF'
	},
	buttonClose: {
		backgroundColor: '#2196F3'
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
		fontWeight: '900',
		fontSize: 18
	}
});

const mapState = (state) => {
	const { show } = state.addModalReducer;
	const { todo } = state.todoReducer;
	return { show, todo };
};

export default connect(mapState, { showAddModal, addToDo, resetToDo })(AddModal);
