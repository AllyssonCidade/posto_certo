import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { PropsStackRoutes } from './interfaces'
import { useAuth } from '../contexts/AuthContext'
import AuthNavigation from './auth'
import MainNavigation from './main'

const Stack = createNativeStackNavigator<PropsStackRoutes>()
const Tab = createBottomTabNavigator<PropsStackRoutes>()

const AppNavigation = () => {
  const { user } = useAuth()

  return <>{user ? <MainNavigation /> : <AuthNavigation />}</>
}

export default AppNavigation
