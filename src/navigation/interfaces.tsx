import { NativeStackScreenProps } from '@react-navigation/native-stack'

//adicione aqui as propriedades para suas rotas
export type RouteProps = {}

//aqui devem ser colocadas e tipadas suas rotas com base no routeProps
export type PropsStackRoutes = {
  Home: undefined | RouteProps
  Feed: undefined | RouteProps
  Profile: undefined | RouteProps
  EditProfile: undefined | RouteProps
  ProfileStack: undefined | RouteProps
  UnitHealth: undefined | RouteProps
  HomeStack: undefined | RouteProps
  MakeReport: undefined | RouteProps
  LoginScreen: undefined | RouteProps
}

export type PropsScreensApp = NativeStackScreenProps<PropsStackRoutes>
