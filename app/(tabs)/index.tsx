import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { theme } from '../../theme'
import AppNavigation from '@/src/navigation'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import 'react-native-get-random-values'
import { LocationProvider } from '@/src/contexts/LocationContext'
import { AuthProvider } from '@/src/contexts/AuthContext'

const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <LocationProvider>
          <ThemeProvider theme={theme}>
            <AppNavigation />
          </ThemeProvider>
        </LocationProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  )
}

export default App
