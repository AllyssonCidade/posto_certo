import { MaterialIcons } from '@expo/vector-icons'

export type HealthIconProps = {
  title: string
  name: keyof typeof MaterialIcons.glyphMap
  onPress?: () => void
}
