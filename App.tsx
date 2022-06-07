import 'react-native-gesture-handler'
import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import CategoriesScreen from './screens/categories-screen'
import MealDetailScreen from './screens/meal-detail-screen'
import MealsOverviewScreen from './screens/meals-overview-screen'
import { DrawerParamList, RootStackParamList } from './typings/navigation'
import { createDrawerNavigator } from '@react-navigation/drawer'
import FavoritesScreen from './screens/favorites-screen'

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#212529',
  },
}

const Drawer = createDrawerNavigator<DrawerParamList>()
const Stack = createNativeStackNavigator<RootStackParamList>()

function RenderAppDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#343a40', elevation: 0 },
        headerTintColor: '#fff',
        drawerContentStyle: { backgroundColor: '#343a40' },
        drawerActiveBackgroundColor: '#495057',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#fff',
      }}
    >
      <Drawer.Screen
        name='Home'
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons name='home' size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='Favorites'
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons name='star' size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}
export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#343a40' },
            headerTintColor: '#fff',
          }}
        >
          <Stack.Screen
            name='Drawer'
            component={RenderAppDrawer}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
          <Stack.Screen name='MealDetail' component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
