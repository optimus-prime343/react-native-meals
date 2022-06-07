import { View, Text, Pressable, ButtonProps } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const IconButton = ({ onPress, ...rest }: ButtonProps) => {
  return (
    <Pressable onPress={onPress} {...rest}>
      <Ionicons name='star-outline' size={25} />
    </Pressable>
  )
}

export default IconButton
