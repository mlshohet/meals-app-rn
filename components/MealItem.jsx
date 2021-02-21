import React from 'react';
import { 
	View, 
	Text,
	StyleSheet,
	TouchableOpacity,
	ImageBackground
} from 'react-native';

import DefaultText from '../components/DefaultText';

const MealItem = props => {
	return (
		<View style={styles.mealItem}>
			<TouchableOpacity onPress={props.onSelectMeal}>
				<View>
					<View 
						style={{...styles.mealRow, ...styles.mealHeader}}>
						<ImageBackground 
							source={{uri: props.imageUrl}}
							style={styles.bgImage}
						>
						<Text
							style={styles.title}
							numberOfLines={1}
						>
							{props.title}
						</Text>
						</ImageBackground>
					</View>
					<View style={{...styles.mealRow, ...styles.mealDetail}}>
						<DefaultText>
							{props.duration} min
						</DefaultText>
						<DefaultText>
							{props.complexity}
						</DefaultText>
						<DefaultText>
							{props.affordability}
						</DefaultText>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);

};

const styles = StyleSheet.create({
	mealItem: {
		height: 200,
		width: '100%',
		backgroundColor: '#f5f5f5',
		marginVertical: 5,
		borderRadius: 10,
		overflow: 'hidden'
	},
	mealRow: {
		flexDirection: 'row'
	},
	mealHeader: {
		height: '85%',
	},
	mealDetail: {
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '15%'
	},
	title: {
		fontFamily:'open-sans-bold',
		fontSize: 20,
		color: 'white',
		backgroundColor: 'rgba(0,0,0,0.5)',
		paddingVertical: 5,
		paddingHorizontal: 12,
		textAlign: 'center'
	},
	bgImage: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end'
	}
});

export default MealItem;