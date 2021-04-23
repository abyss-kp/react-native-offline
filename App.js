import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, StyleSheet } from 'react-native';
import Header from './Header';
import HomePage from './Home';
import Footer from './Footer';
import { navigationRef } from './RootNavigation';
const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }} ref={navigationRef}>
			<Stack.Navigator initialRouteName="Home" headerMode="screen">
				<Stack.Screen
					name="Home"
					component={HomePage}
					options={{
						header: () => <Header headerDisplay="To-Do App" />
					}}
				/>
			</Stack.Navigator>
			<Footer />
		</NavigationContainer>
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
