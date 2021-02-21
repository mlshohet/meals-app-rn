import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import Colors from '../constants/Colors';

const defaultStackNavOptions = {
	headerStyle: {
			backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
		},
	headerTitleStyle: {
		fontFamily: 'open-sans-bold'
	},
	headerBackTitleStyles: {
		fontFamily: 'open-sans'
	},
	headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

const MealsNavigator = createStackNavigator({
	Categories: {
		screen: CategoriesScreen,
	},

	CategoryMeals: {
		screen: CategoryMealsScreen,
	},
	MealDetails: MealDetailsScreen 
}, {
	defaultNavigationOptions: defaultStackNavOptions
});

const FavNavigator = createStackNavigator({
	Favorites: {
		screen: FavoritesScreen
	},
	MealDetails: MealDetailsScreen
}, {
	defaultNavigationOptions: defaultStackNavOptions
});

const MealsFavTabNavigator = createBottomTabNavigator({
	Meals: {
		screen: MealsNavigator,
		navigationOptions: {
			tabBarIcon: tabInfo => {
				return <Ionicons 
					name='ios-restaurant' 
					size={25}
					color={tabInfo.tintColor}
				/>;
			}
		}
	},
	Favorites: {
		screen: FavNavigator,
		navigationOptions: {
			tabBarIcon: tabInfo => {
				return <Ionicons 
					name='ios-star' 
					size={25}
					color={tabInfo.tintColor}
				/>;
			}
		}
	}
}, {
	tabBarOptions: {
		activeTintColor: Colors.accentColor
	}

});

const FiltersNavigator = createStackNavigator({
	Filters: FiltersScreen
},{
	navigationOptions: {
		drawerLabel: 'Filters'
	},
	defaultNavigationOptions: defaultStackNavOptions
});

const MainNavigator = createDrawerNavigator({
	MealsFavs: {
		screen: MealsFavTabNavigator,
		navigationOptions: {
			drawerLabel: "Meals"
		}
	},
	Filters: FiltersNavigator
});

export default createAppContainer(MainNavigator);


