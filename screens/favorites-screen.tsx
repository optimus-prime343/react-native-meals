import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native'

import MealItem from '../components/meal-item'
import { useFavoriteMeals } from '../store/use-favorites'
import { CompositeNavigationProp } from '../typings/navigation'

const FavoritesScreen = ({ navigation }: CompositeNavigationProp<'Favorites'>) => {
  const favoriteMeals = useFavoriteMeals()
  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteMeals}
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
    marginVertical: 5,
  },
})
export default FavoritesScreen
