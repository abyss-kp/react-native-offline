import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const StackNav = (name, comp) => () => {
	return (
		<Stack.Navigator
			initialRouteName="Active"
		>
			<Stack.Screen
				name={name}
				component={comp}
				options={{
					header: () => <Header headerDisplay="To-Do App" />
				}}
			/>
		</Stack.Navigator>
	);
};
