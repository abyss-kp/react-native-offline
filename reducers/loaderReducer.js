import { SET_LOADER } from '../constants';

const initialState = {
	loading: false
};

export const loaderReducer = (state = initialState, action) => {
	console.log(action.type,action.payload);
	switch (action.type) {
		case SET_LOADER:
			return {
				...state,
				loading: action.payload
			};
		default:
			return state;
	}
};
