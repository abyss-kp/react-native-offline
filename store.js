import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['todoReducer']
};
const initialState = {};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configurePersistentStore = () => {
	const store = createStore(persistedReducer, initialState, applyMiddleware(thunk));
	const persistor = persistStore(store);

	return { store, persistor };
};
