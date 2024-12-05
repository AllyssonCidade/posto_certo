import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Home'
import UnitHealth from '../UnitHealth'
import MakeReport from '../MakeReport'

const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen
        name="UnitHealth"
        component={UnitHealth}
        options={{
          headerShown: true,
          headerBackButtonMenuEnabled: true,
          headerTitle: '',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'white'
          },
          headerShadowVisible: false
        }}
      />
      <Stack.Screen
        name="MakeReport"
        component={MakeReport}
        options={{
          headerShown: true,
          headerBackButtonMenuEnabled: true,
          headerTitle: 'Fazer um Relato',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'white'
          },
          headerShadowVisible: false
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeStack
