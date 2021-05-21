import { ADD_TODO, SET_TODO, SET_LOADER } from '../constants';
import axios from 'axios';
const URL = 'https://sheet.best/api/sheets/31e36a0b-872d-44c3-9f07-a41d835de900';
// const URL = 'https://sheet.best/api/sheets/376875e5-5ec1-42a0-a00b-08dc4a2438a8';
export const addToDo = (val) => {
	return async (dispatch) => {
		dispatch({
			type: SET_LOADER,
			payload: true
		});
		axios
			.post(URL, val)
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
		.get(URL)
		.then(function (response) {
			setToDo(response.data);
			return response.data;
		})
		.catch(function (error) {
			console.log({ error });
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
			.delete(`${URL}/id/${id}`)
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
			.patch(`${URL}/id/${id}`, data)
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
