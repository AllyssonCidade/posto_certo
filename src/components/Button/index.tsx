import { GestureResponderEvent, TouchableOpacity, Text, ViewStyle } from 'react-native'
import styles from './styles'

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  children?: React.ReactNode
  color?: 'red' | 'blue' | 'white'
  onPress?: (event: GestureResponderEvent) => void
  title?: string
  style?: ViewStyle
}

export function Button({
  children,
  size = 'medium',
  color = 'blue',
  onPress,
  style,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.wrapper, styles[size], styles[color], style]}
      onPress={onPress}
      {...props}
    >
      <Text style={[styles.text, { fontSize: styles[size].fontSize, color: styles[color].color }]}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}
