import React from 'react';
import { useSelector } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { View, Text, StyleSheet } from 'react-native';
import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';

import DefaultText from '../components/DefaultText';

const FavoritesScreen = props => {

	const favMeals = useSelector(state =>
		state.meals.favoriteMeals
	);

	if (favMeals.length === 0 || !favMeals) {
		return (
			<View style={styles.empty}>
				<DefaultText>
					No favorites yet. Try adding some.
				</DefaultText>
			</View>
		);
	} else {
		return (
			<MealList
				listData={favMeals} 
				navigation={props.navigation}
			/>
		);
	}
};

FavoritesScreen.navigationOptions = navData => {

	return ({
		headerTitle: 'Your favorites',
		headerLeft: () => {
			return (
				<HeaderButtons
					HeaderButtonComponent={HeaderButton}
				>
					<Item
						title="Menu"
						iconName='ios-menu'
						onPress={()=>{
							navData.navigation.toggleDrawer();
						}}
					/>
				</HeaderButtons>
			);
		}	
	});	
};

const styles = StyleSheet.create({
	empty: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default FavoritesScreen;




