import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, StyleSheet } from 'react-native';
import HomePage from './screens/Home';
import { navigationRef } from './navigationRef';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNav } from './components/Stacks';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Provider } from 'react-redux';
import { store } from './store';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }} ref={navigationRef}>
				<Tab.Navigator
					initialRouteName="Home"
					headerMode="screen"
					tabBarOptions={{
						activeTintColor: '#000',
						inactiveTintColor: '#EBEDF0',
						activeBackgroundColor: '#fff',
						inactiveBackgroundColor: '#000',
						labelPosition: 'beside-icon'
						// safeAreaInsets: { bottom: 5 }
					}}
				>
					<Tab.Screen
						name="Active"
						component={StackNav('Active', HomePage)}
						options={{
							tabBarLabel: 'Active',
							tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="notebook-outline" color={color} size={size} />
						}}
					/>
					<Tab.Screen
						name="Completed"
						component={StackNav('Completed', HomePage)}
						options={{
							tabBarLabel: 'Completed',
							tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="check-all" color={color} size={size} />
						}}
					/>
					<Tab.Screen
						name="All"
						component={StackNav('All', HomePage)}
						options={{
							tabBarLabel: 'All',
							tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="history" color={color} size={size} />
						}}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
