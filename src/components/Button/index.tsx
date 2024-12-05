import { GestureResponderEvent, TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native'
import styles from './styles'
import { Feather } from '@expo/vector-icons'

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
  children?: React.ReactNode
  color?: 'red' | 'blue' | 'white'
  onPress?: (event: GestureResponderEvent) => void
  title?: string
  style?: ViewStyle
  textStyle?: TextStyle
  icon?: keyof typeof Feather.glyphMap
  styleIco?: ViewStyle
}

export function Button({
  children,
  size = 'medium',
  color = 'blue',
  onPress,
  style,
  textStyle,
  icon,
  styleIco,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.wrapper, styles[size], styles[color], style, { flexDirection: 'row' }]}
      onPress={onPress}
      {...props}
    >
      {icon && <Feather name={icon} size={styles[size].fontSize * 1.4} style={[styleIco]} />}
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
