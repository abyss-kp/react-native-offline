import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import ToDoList from '../components/ToDoList';
import { getToDo } from '../actions/toDoAction';
import { setLoader } from '../actions/loaderAction';
import { useIsFocused } from '@react-navigation/native';
function Home(props) {
	const [data, setData] = useState([]);

	const isFocused = useIsFocused();
	const fetchData = () => {
		(async () => {
			props.setLoader(true);
			let resp = (await props.getToDo()) || [];
			let data = props.route.name === 'All' ? resp : resp.filter((itm) => itm.status === props.route.name);
			setData(data);
			props.setLoader(false);
		})();
	};
	useEffect(() => {
		fetchData();
	}, [isFocused]);

	useEffect(() => {
		fetchData();
	}, [props.todoReducer.toDoList]);

	return <ToDoList data={data} />;
}

const mapState = (state) => {
	console.log({ state });
	const { todoReducer } = state;
	return { todoReducer };
};
const mapDispatchToProps = (dispatch) => ({
	getToDo,
	setLoader
});

export default connect(mapState, mapDispatchToProps)(Home);

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
