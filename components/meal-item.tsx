import { View, Text, Image, StyleSheet, Pressable, ButtonProps } from 'react-native'

import { Meal } from '../models/meal'
import MealTags from './meal-tags'
import ToggleFavoriteMeal from './toggle-favorite-meal'

interface Props {
  meal: Meal
  onPress: () => void
}
const MealItem = ({ meal, onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: meal.imageUrl }} style={styles.image} />
        <View style={styles.mealInfo}>
          <Text style={styles.mealTitle}>{meal.title}</Text>
          <MealTags meal={meal} />
          <ToggleFavoriteMeal meal={meal} style={{ marginTop: 10 }} />
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#343a40',
    borderRadius: 4,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 300,
  },
  mealInfo: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  mealTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default MealItem
