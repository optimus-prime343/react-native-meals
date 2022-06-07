import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Category } from '../models/category'

interface Props {
  category: Category
  onPress: () => void
}
const CategoryGridTile = ({ category, onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.gridTile, { backgroundColor: category.color }]}>
        <Text style={styles.categoryTitle}>{category.title}</Text>
      </View>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  gridTile: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
})

export default CategoryGridTile
