import { combineReducers } from 'redux';
import { addModalReducer } from './modalReducer';
import { todoReducer } from './toDoReducer';
import { loaderReducer } from './loaderReducer';

const rootReducer = combineReducers({
	addModalReducer,
	todoReducer,
	loaderReducer
});

export default rootReducer;
