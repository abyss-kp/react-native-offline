import { ADD_TODO, SET_TODO, SET_LOADER } from '../constants';
import axios from 'axios';
export const addToDo = (val) => {
	return async (dispatch) => {
		dispatch({
			type: SET_LOADER,
			payload: true
		});
		axios
			.post('https://sheet.best/api/sheets/376875e5-5ec1-42a0-a00b-08dc4a2438a8', val)
			.then(async (resp) => {
				let data = await getToDo();
				dispatch({
					type: SET_LOADER,
					payload: false
				});
				dispatch({
					type: SET_TODO,
					payload: data
				});
			})
			.catch(function (error) {
				dispatch({
					type: SET_LOADER,
					payload: false
				});
				console.log(error);
			});
	};
};

export const getToDo = () => {
	return axios
		.get('https://sheet.best/api/sheets/376875e5-5ec1-42a0-a00b-08dc4a2438a8')
		.then(function (response) {
			setToDo(response.data);
			return response.data;
		})
		.catch(function (error) {
			console.log(error);
		});
};

export const setToDo = (data) => ({
	type: SET_TODO,
	payload: data
});

export const deleteToDo = (id) => {
	return async (dispatch) => {
		dispatch({
			type: SET_LOADER,
			payload: true
		});
		axios
			.delete(`https://sheet.best/api/sheets/376875e5-5ec1-42a0-a00b-08dc4a2438a8/id/${id}`)
			.then(async (resp) => {
				let data = await getToDo();
				dispatch({
					type: SET_LOADER,
					payload: false
				});
				dispatch({
					type: SET_TODO,
					payload: data
				});
			})
			.catch(function (error) {
				console.log(error);
				dispatch({
					type: SET_LOADER,
					payload: false
				});
			});
	};
};

export const resetToDo = () => ({
	type: ADD_TODO,
	payload: ''
});

export const updateToDo = (id, data) => {
	return async (dispatch) => {
		dispatch({
			type: SET_LOADER,
			payload: true
		});
		axios
			.patch(`https://sheet.best/api/sheets/376875e5-5ec1-42a0-a00b-08dc4a2438a8/id/${id}`, data)
			.then(async (resp) => {
				let data = await getToDo();
				dispatch({
					type: SET_LOADER,
					payload: false
				});
				dispatch({
					type: SET_TODO,
					payload: data
				});
			})
			.catch(function (error) {
				console.log(error);
				dispatch({
					type: SET_LOADER,
					payload: false
				});
			});
	};
};
