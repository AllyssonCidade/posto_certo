import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      background: string
      text: string
    }
    spacing: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
    fontSizes: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
  }
}
