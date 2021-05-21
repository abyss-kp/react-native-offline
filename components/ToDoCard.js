import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { updateToDo, deleteToDo } from '../actions/toDoAction';
function ToDoCard(props) {
	return (
		<View style={styles.container}>
			<View>
				<Text
					style={
						props.item.status === 'Completed' && {
							textDecorationLine: 'underline line-through',
							textDecorationStyle: 'solid',
							fontStyle: 'italic'
						}
					}
				>
					{props.item.todo}
				</Text>
			</View>
			<View style={styles.buttons}>
				{/* <TouchableOpacity onPress={() => {}}>
					<MaterialCommunityIcons name="pencil" size={25} color="#271C6C" />
				</TouchableOpacity> */}
				<View>
					{props.item.status === 'Active' && (
						<TouchableOpacity
							onPress={() => {
								props.updateToDo(props.item.id, { status: 'Completed' });
							}}
						>
							<MaterialCommunityIcons name="check-all" size={25} color="#16881A" />
						</TouchableOpacity>
					)}
				</View>
				<TouchableOpacity
					onPress={() => {
						props.deleteToDo(props.item.id);
					}}
				>
					<MaterialCommunityIcons name="delete" size={25} color="#FC0A0C" />
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default connect(null, { updateToDo, deleteToDo })(ToDoCard);

const styles = StyleSheet.create({
	container: {
		width: 300,
		height: 150,
		marginVertical: 20,
		backgroundColor: '#fff',
		borderRadius: 16,
		padding: 20,
		display: 'flex',
		justifyContent: 'space-between'
	},
	buttons: {
		width: 250,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
});
