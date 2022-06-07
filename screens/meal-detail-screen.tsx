import { useLayoutEffect, useMemo } from 'react'
import { View, StyleSheet } from 'react-native'
import MealDetail from '../components/meal-detail'

import { MEALS } from '../data/meals'
import { Meal } from '../models/meal'
import { ScreenProps } from '../typings/navigation'

const MealDetailScreen = ({ route, navigation }: ScreenProps<'MealDetail'>) => {
  const mealId = route.params.mealId
  const meal = useMemo(
    () => MEALS.find(meal => meal.id === mealId) as Meal,
    [mealId]
  )
  useLayoutEffect(() => {
    navigation.setOptions({ title: meal.title })
  }, [])
  return (
    <View style={styles.container}>
      <MealDetail meal={meal} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
})
export default MealDetailScreen
