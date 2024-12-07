import { MaterialIcons } from '@expo/vector-icons'
import { ViewStyle } from 'react-native'

export type RootStackParamList = {
  Home: undefined
  Feed: undefined
  Profile: undefined
  EditProfile: undefined
  UnitHealth: undefined
  HomeStack: undefined
  MakeReport: undefined
  LoginScreen: undefined
}

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
