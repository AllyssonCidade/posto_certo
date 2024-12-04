import { GestureResponderEvent, TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native'
import styles from './styles'

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  children?: React.ReactNode
  color?: 'red' | 'blue' | 'white'
  onPress?: (event: GestureResponderEvent) => void
  title?: string
  style?: ViewStyle
  textStyle?: TextStyle
}

export function Button({
  children,
  size = 'medium',
  color = 'blue',
  onPress,
  style,
  textStyle,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.wrapper, styles[size], styles[color], style]}
      onPress={onPress}
      {...props}
    >
      <Text
        style={[
          styles.text,
          { fontSize: styles[size].fontSize, color: styles[color].color },
          textStyle
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}
