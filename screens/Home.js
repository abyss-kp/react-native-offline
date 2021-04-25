import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
function HomePage() {
	return (
		<View style={styles.container}>
			<Text> List will appear here</Text>
		</View>
	);
}

const mapState = (state) => {
	console.log({ state });
	return state;
};

export default connect(mapState)(HomePage);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
