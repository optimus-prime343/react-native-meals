import { useMemo } from 'react'
import { View, Text, Button, ViewProps } from 'react-native'
import { Meal } from '../models/meal'
import {
  useAddToFavorite,
  useFavoriteMeals,
  useRemoveFavorite,
} from '../store/use-favorites'

interface Props extends ViewProps {
  meal: Meal
}
const ToggleFavoriteMeal = ({ meal, ...rest }: Props) => {
  const addToFavorite = useAddToFavorite()
  const removeFavorite = useRemoveFavorite()
  const favoriteMeals = useFavoriteMeals()
  const isFavorite = useMemo(
    () => favoriteMeals.some(favoriteMeal => favoriteMeal.id === meal.id),
    [favoriteMeals, meal]
  )
  const toggleFavoriteMeal = () => {
    if (isFavorite) {
      return removeFavorite(meal.id)
    }
    addToFavorite(meal)
  }
  return (
    <View {...rest}>
      <Button
        onPress={toggleFavoriteMeal}
        title={isFavorite ? 'Remove From Favorite' : 'Add To Favorite'}
      />
    </View>
  )
}

export default ToggleFavoriteMeal
