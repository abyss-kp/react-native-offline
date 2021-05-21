import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ToDoCard from './ToDoCard';
function ToDoList(props) {
	const renderItem = ({ item }) => {
		return <ToDoCard item={item} />;
	};

	const DATA = props.data;
	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={DATA}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				ListEmptyComponent={() =>
					!DATA.length ? (
						<View style={styles.emptyListStyle}>
							<Text style={styles.emptyMessageStyle}>Add todo in the list</Text>
						</View>
					) : null
				}
				contentContainerStyle={{ flexGrow: 1 }}
			/>
		</SafeAreaView>
	);
}

const mapState = (state) => {
	console.log({ state });
	const { todoReducer } = state;
	return { todoReducer };
};
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapState, mapDispatchToProps)(ToDoList);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	emptyListStyle: {
		flex: 1,
		justifyContent: 'center'
	},
	emptyMessageStyle: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 20
	}
});
