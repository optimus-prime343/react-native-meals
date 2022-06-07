import create from 'zustand'

import { Meal } from '../models/meal'

interface UseFavorites {
  favoriteMeals: Meal[]
  addToFavorite: (meal: Meal) => void
  removeFavorite: (mealId: string) => void
}
const useFavorites = create<UseFavorites>(set => ({
  favoriteMeals: [],
  addToFavorite: meal =>
    set(state => ({ ...state, favoriteMeals: [meal, ...state.favoriteMeals] })),
  removeFavorite: mealId =>
    set(state => ({
      ...state,
      favoriteMeals: state.favoriteMeals.filter(meal => meal.id !== mealId),
    })),
}))

export const useFavoriteMeals = () => useFavorites().favoriteMeals
export const useAddToFavorite = () => useFavorites().addToFavorite
export const useRemoveFavorite = () => useFavorites().removeFavorite
