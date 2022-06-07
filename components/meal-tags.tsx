import { View, Text, StyleSheet, ViewProps } from 'react-native'

import { Meal } from '../models/meal'

interface Props extends ViewProps {
  meal: Meal
}
const MealTags = ({ meal, style, ...rest }: Props) => {
  return (
    <View {...rest} style={[styles.tagsContainer, style]}>
      <Text style={styles.mealTag}>{meal.duration} Seconds</Text>
      <Text style={styles.mealTag}>{meal.complexity}</Text>
      <Text style={styles.mealTag}>{meal.affordability}</Text>
      {meal.isGlutenFree && <Text style={styles.mealTag}>Gluren Free</Text>}
      {meal.isLactoseFree && <Text style={styles.mealTag}>Lactose Free</Text>}
      {meal.isVegan && <Text style={styles.mealTag}>Vegan</Text>}
      {meal.isVegetarian && <Text style={styles.mealTag}>Vegeterian</Text>}
    </View>
  )
}
const styles = StyleSheet.create({
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  mealTag: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 4,
    backgroundColor: '#fff4e6',
    color: '#fd7e14',
    fontSize: 16,
    marginRight: 10,
    marginTop: 10,
    textTransform: 'capitalize',
  },
})
export default MealTags
