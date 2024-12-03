import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import { PropsStackRoutes } from './interfaces'
import Home from '../screens/Home'
import Feed from '../screens/Feed'
import Profile from '../screens/Profile'
import { useTheme } from 'styled-components'

const Stack = createNativeStackNavigator<PropsStackRoutes>()
const Tab = createBottomTabNavigator<PropsStackRoutes>()

const AppNavigation = () => {
  const theme = useTheme()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secondary,
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Feather.glyphMap

          if (route.name === 'Home') {
            iconName = 'folder'
          } else if (route.name === 'Feed') {
            iconName = 'layout'
          } else {
            iconName = 'user'
          }

          return <Feather name={iconName} size={size} color={color} />
        },
        tabBarLabelStyle: {
          fontSize: 14,
          marginBottom: 5
        }
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Feed" component={Feed} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

export default AppNavigation
