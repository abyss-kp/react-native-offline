import { ADD_MODAL } from '../constants';

const initialState = {
	show: false
};

export const addModalReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MODAL:
			return { ...state, show: action.payload };

		default:
			return state;
	}
};
