import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'

export type RootStackParamList = {
  Drawer: undefined
  MealsOverview: {
    categoryId: string
  }
  MealDetail: {
    mealId: string
  }
}
export type ScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>
export type DrawerParamList = {
  Home: undefined
  Favorites: undefined
}
export type CompositeNavigationProp<T extends keyof DrawerParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<RootStackParamList>,
    DrawerScreenProps<DrawerParamList, T>
  >
