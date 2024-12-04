import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { theme } from '../../theme'
import AppNavigation from '@/src/navigation'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <AppNavigation />
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}

export default App
