import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function HomePage() {
	return (
		<View style={styles.container}>
			<Text> List will appear here</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
