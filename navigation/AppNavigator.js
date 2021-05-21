import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Loader from '../components/Loader';
import { connect } from 'react-redux';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const TabStack = () => {
	return (
		<Tab.Navigator
			initialRouteName="Active"
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
				component={Home}
				options={{
					tabBarLabel: 'Active',
					tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="notebook-outline" color={color} size={size} />
				}}
			/>
			<Tab.Screen
				name="Completed"
				component={Home}
				options={{
					tabBarLabel: 'Completed',
					tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="check-all" color={color} size={size} />
				}}
			/>
			<Tab.Screen
				name="All"
				component={Home}
				options={{
					tabBarLabel: 'All',
					tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="history" color={color} size={size} />
				}}
			/>
		</Tab.Navigator>
	);
};

function AppNavigator(props) {
	const [loader, setLoader] = useState(false);
	useEffect(() => {
		console.log({ loader, loading: props.loading });
		if (loader !== props.loading) {
			setLoader(props.loading);
		}
	}, [props.loading]);
	return (
		<NavigationContainer>
			<Loader loading={loader} />
			<Stack.Navigator
				// initialRouteName="Auth"
				screenOptions={{
					headerStyle: { backgroundColor: 'black' },
					headerTintColor: 'white'
				}}
			>
				<Stack.Screen
					name="TabStack"
					component={TabStack}
					options={({ navigation }) => ({
						title: '',
						headerLeft: () => (
							<View style={styles.title2}>
								<Icon name="note" size={30} color="#fff" />
								<Text style={styles.text}> To-Do App</Text>
							</View>
						),
						headerRight: () => (
							<TouchableOpacity onPress={() => props.showAddModal(true)} style={{ marginHorizontal: 20 }}>
								<MaterialIcon name="add" size={40} color="#fff" />
							</TouchableOpacity>
						)
					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const mapState = (state) => {
	const { loading } = state.loaderReducer;
	return { loading };
};

export default connect(mapState)(AppNavigator);

const styles = StyleSheet.create({
	title2: { display: 'flex', flexDirection: 'row', marginHorizontal: 20 },
	text: {
		fontFamily: 'Roboto',
		color: '#fff',
		fontSize: 25,
		fontWeight: '900'
	}
});
