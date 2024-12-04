import { MaterialIcons } from '@expo/vector-icons'
import { ViewStyle } from 'react-native'

export type HealthIconProps = {
  title: string
  name: keyof typeof MaterialIcons.glyphMap
  onPress?: () => void
}

export type ProfileIconProps = {
  style?: ViewStyle
  size?: 'small' | 'medium'
}

export type FeedProps = {
  name?: string
  job?: string
}
