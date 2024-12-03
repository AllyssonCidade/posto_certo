import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { theme } from '../../theme'
import AppNavigation from '@/src/navigation'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppNavigation />
    </ThemeProvider>
  )
}

export default App
