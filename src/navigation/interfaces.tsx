import { NativeStackScreenProps } from '@react-navigation/native-stack'

//adicione aqui as propriedades para suas rotas
export type RouteProps = {}

//aqui devem ser colocadas e tipadas suas rotas com base no routeProps
export type PropsStackRoutes = {
  Dir: undefined | RouteProps
  Settings: undefined | RouteProps
}

export type PropsScreensApp = NativeStackScreenProps<PropsStackRoutes>
