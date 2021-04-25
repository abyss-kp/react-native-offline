import { ADD_TODO } from '../constants';

export const addToDo = (val) => ({
	type: ADD_TODO,
	payload: val
});
