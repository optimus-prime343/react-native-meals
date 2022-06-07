import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'

import { Meal } from '../models/meal'
import MealTags from './meal-tags'
import RenderList from './render-list'

interface Props {
  meal: Meal
}
const MealDetail = ({ meal }: Props) => {
  return (
    <ScrollView>
      <View>
        <Image source={{ uri: meal.imageUrl }} style={styles.image} />
        <Text style={styles.mealTitle}>{meal.title}</Text>
        <MealTags meal={meal} />
        <RenderList
          listItems={meal.ingredients}
          title='Ingredients'
          style={{ marginVertical: 15 }}
        />
        <RenderList
          listItems={meal.steps}
          title='Recipe Steps'
          renderItem={(item, index) => (
            <Text key={index} style={styles.mealStepText}>
              <Text style={styles.stepCount}>Step {index + 1}</Text> - {item}
            </Text>
          )}
        />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
    borderRadius: 4,
  },
  mealTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
    marginBottom: 5,
  },
  mealStepText: {
    marginTop: 10,
    color: '#e9ecef',
    fontSize: 16,
  },
  stepCount: {
    fontWeight: 'bold',
    color: '#fab005',
  },
})
export default MealDetail
