import { ADD_TODO } from '../constants';

const initialState = {
	todo: ''
};

export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return { ...state, todo: action.payload };

		default:
			return state;
	}
};
