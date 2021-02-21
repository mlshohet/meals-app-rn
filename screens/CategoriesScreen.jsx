import React from 'react';
import { 
	FlatList, 
} from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

import CategoryGridTile from '../components/CategoryGridTile';

import { CATEGORIES } from '../data/data';

const CategoriesScreen = props => {

	const renderGridItem = itemData => {
		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onSelect={() => {
					props.navigation.navigate({
							routeName: 'CategoryMeals',
							params: {
								categoryId: itemData.item.id
							}
						});
					}
				}
			/>	
		);
	};

	return (
		<FlatList
			data={CATEGORIES}
			renderItem={renderGridItem}
			numColumns={2}
		/>
	);
};

// Creating nav properties for the screen
	
CategoriesScreen.navigationOptions = navData => {

	return ({
		headerTitle: 'Meal Categories',
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
}

export default CategoriesScreen;