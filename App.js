import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';

import mealsReducer from './store/reducers/mealsReducer';

import MealsNavigator from './navigation/MealsNavigator'

enableScreens();

const rootReducer = combineReducers({
	meals: mealsReducer
});

const store = createStore(rootReducer);

export default function App() {
	let [fontsLoaded] = useFonts({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	});

	if (!fontsLoaded) {
		return <AppLoading 
			onError={console.warn}
		/>
	} else {
		return (
			<Provider store={store}> 
				<MealsNavigator />
			</Provider>
		);	
	}
}
