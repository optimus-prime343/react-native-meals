import { View } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'

import CategoryGridTile from '../components/category-grid-tile'
import { CATEGORIES } from '../data/categories'
import { ScreenProps } from '../typings/navigation'

const CategoriesScreen = ({ navigation }: ScreenProps<'Home'>) => {
  return (
    <View>
      {/* @ts-ignore */}
      <FlatGrid
        itemDimension={150}
        data={CATEGORIES}
        renderItem={({ item }) => (
          <CategoryGridTile
            category={item}
            onPress={() =>
              navigation.navigate('MealsOverview', { categoryId: item.id })
            }
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}
export default CategoriesScreen
