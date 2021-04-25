import { combineReducers } from 'redux';
import { ADD_MODAL } from '../constants';
import { addModalReducer } from './modalReducer';

const rootReducer = combineReducers({
	addModalReducer
});

export default rootReducer;
