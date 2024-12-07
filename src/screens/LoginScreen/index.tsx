import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'

import { useAuth } from '@/src/contexts/AuthContext'

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, user, logout } = useAuth()

  const handleLogin = async () => {
    try {
      await login(email, password)
      console.log('Usuário logado', user.email)
    } catch (error) {
      console.error('Erro ao logar:', error)
    }
  }

  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  )
}
