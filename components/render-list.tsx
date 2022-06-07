import { useCallback } from 'react'
import { View, Text, StyleSheet, ViewProps } from 'react-native'

interface Props extends ViewProps {
  listItems: string[]
  title?: string
  renderItem?: (item: string, index: number) => JSX.Element
}
const RenderList = ({ listItems, title, renderItem, style, ...rest }: Props) => {
  const renderListItems = useCallback(
    () =>
      listItems.map((item, index) =>
        renderItem ? (
          renderItem(item, index)
        ) : (
          <Text key={index} style={styles.listItemText}>
            {item}
          </Text>
        )
      ),
    [listItems, renderItem]
  )
  return (
    <View {...rest} style={[styles.container, style]}>
      {title && <Text style={styles.title}>{title}</Text>}
      {renderListItems()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: '#343a40',
    borderRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  listItemText: {
    marginTop: 10,
    color: '#e9ecef',
    fontSize: 16,
  },
})
export default RenderList
