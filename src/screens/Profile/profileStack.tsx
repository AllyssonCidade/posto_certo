import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../Profile'
import EditProfile from '../EditProfile'

const Stack = createNativeStackNavigator()

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: true,
          headerBackButtonMenuEnabled: true,
          headerTitle: 'Editar Perfil',
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

export default ProfileStack
