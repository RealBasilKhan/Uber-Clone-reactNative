import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
	return (
		<SafeAreaView style={tw`bg-white w-full h-full`}>
			<View style={tw`p-5 mt-8`}>
				<Image
					style={{
						width: 100,
						height: 100,
						resizeMode: 'contain',
					}}
					source={{
						uri: 'https://links.papareact.com/gzs',
					}}
				/>

				<NavOptions />
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
