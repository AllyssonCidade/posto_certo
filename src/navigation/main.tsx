import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import { PropsStackRoutes } from './interfaces'
import Feed from '../screens/Feed'
import { useTheme } from 'styled-components'
import ProfileStack from '../screens/Profile/profileStack'
import HomeStack from '../screens/Home/homeStack'
import { useAuth } from '../contexts/AuthContext'

const Stack = createNativeStackNavigator<PropsStackRoutes>()
const Tab = createBottomTabNavigator<PropsStackRoutes>()
const MainNavigation = () => {
  const { login, user, logout } = useAuth()
  console.log(user.email)

  const theme = useTheme()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secondary,
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Feather.glyphMap

          if (route.name === 'LoginScreen') {
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
      <Tab.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Acontecimentos Próximos'
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{ headerShown: false, headerTransparent: false, title: 'Profile' }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigation
