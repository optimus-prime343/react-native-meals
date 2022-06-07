import { useLayoutEffect, useMemo } from 'react'
import { View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import MealItem from '../components/meal-item'
import { CATEGORIES } from '../data/categories'
import { MEALS } from '../data/meals'
import { ScreenProps } from '../typings/navigation'

const MealsOverviewScreen = ({
  route,
  navigation,
}: ScreenProps<'MealsOverview'>) => {
  const categoryId = route.params.categoryId

  const categoryTitle = useMemo(
    () => CATEGORIES.find(category => category.id === categoryId)?.title,
    [categoryId]
  )
  const meals = MEALS.filter(meal => meal.categoryIds.includes(categoryId))

  useLayoutEffect(() => {
    if (categoryTitle) {
      navigation.setOptions({ title: categoryTitle })
    }
  }, [categoryTitle, navigation])

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        renderItem={({ item }) => (
          <MealItem
            meal={item}
            onPress={() => navigation.navigate('MealDetail', { mealId: item.id })}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#343a40',
    marginVertical: 16,
  },
})

export default MealsOverviewScreen
