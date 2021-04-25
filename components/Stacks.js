import React from 'react';
import { useSelector } from 'react-redux';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppModal from './AddModal';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const StackNav = (name, component) => () => {
	const { addModalReducer } = useSelector((state) => state);
	return (
		<Stack.Navigator initialRouteName="Active">
			<Stack.Screen
				name={name}
				component={addModalReducer.show ? AppModal : component}
				options={{
					header: () => <Header headerDisplay="To-Do App" />
				}}
			/>
		</Stack.Navigator>
	);
};
