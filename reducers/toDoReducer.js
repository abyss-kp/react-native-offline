import { ADD_TODO, SET_TODO, DELETE_TODO } from '../constants';

const initialState = {
	todo: '',
	offlineToDoList: [],
	toDoList: []
};

export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return { ...state, todo: action.payload };
		case SET_TODO: {
			console.log({action});
			return { ...state, toDoList: action.payload };
		}
		case DELETE_TODO: {
			return { ...state, toDoList: action.payload.data };
		}
		default:
			return state;
	}
};
