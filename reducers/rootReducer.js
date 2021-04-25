import { combineReducers } from 'redux';
import { ADD_MODAL } from '../constants';
import { addModalReducer } from './modalReducer';
import { todoReducer } from './addToDo';

const rootReducer = combineReducers({
	addModalReducer,
	todoReducer
});

export default rootReducer;
