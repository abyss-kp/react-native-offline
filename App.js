import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { configurePersistentStore } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { Root } from 'native-base';
import AppNavigator from './navigation/AppNavigator';
// import { configureFakeBackend } from './configureFakeBackend';
const Stack = createStackNavigator();
import Analytics from '@aws-amplify/analytics';
import Amplify from 'aws-amplify';
// import Auth from '@aws-amplify/auth';
import PushNotification from '@aws-amplify/pushnotification';
import { NativeModules } from 'react-native';
import awsconfig from './src/aws-exports';
const { store, persistor } = configurePersistentStore();
// Amplify.Logger.LOG_LEVEL = 'DEBUG';
Amplify.configure(awsconfig);

const analyticsConfig = {
	AWSPinpoint: {
		// Amazon Pinpoint App Client ID
		appId: '9a8b436047374d7ab0601f1b78e859db',
		// Amazon service region
		region: 'us-east-1',
		mandatorySignIn: false
	}
};

// Analytics.configure(analyticsConfig);
Analytics.disable()
// PushNotification.configure(awsconfig);

const endpointId = Analytics.getPluggable('AWSPinpoint')._config.endpointId;
console.log(`endpoint ID: ${endpointId}`);

export default function App(props) {
	// configureFakeBackend();
	useEffect(() => {
		PushNotification.onRegister((token) => {
			console.log('in app registration', token);
			PushNotification.updateEndpoint(token);
		});

		// NativeModules.RNPushNotification.getToken((token) => {
		// 	console.log(`PushToken: ${token}`);
		// });

		PushNotification.onNotification((notification) => {
			console.log('in app notification', notification);
			// if (Platform.OS === 'ios') {
			// 	notification.finish(PushNotificationIOS.FetchResult.NoData);
			// }
		});

		PushNotification.onNotificationOpened((notification) => {
			console.log('the notification is opened', notification);
		});
	}, []);
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
