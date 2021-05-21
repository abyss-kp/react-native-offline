import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { configurePersistentStore } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { Root } from 'native-base';
import AppNavigator from './navigation/AppNavigator';
// import { configureFakeBackend } from './configureFakeBackend';
const Stack = createStackNavigator();
const { store, persistor } = configurePersistentStore();

export default function App(props) {
	// configureFakeBackend();

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Root>
					<AppNavigator />
				</Root>
			</PersistGate>
		</Provider>
	);
}
