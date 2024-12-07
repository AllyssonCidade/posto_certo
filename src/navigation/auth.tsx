import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import { PropsStackRoutes } from './interfaces'
import Feed from '../screens/Feed'
import { useTheme } from 'styled-components'
import ProfileStack from '../screens/Profile/profileStack'
import HomeStack from '../screens/Home/homeStack'
import LoginScreen from '../screens/LoginScreen'

const Stack = createNativeStackNavigator<PropsStackRoutes>()

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default AuthNavigation
