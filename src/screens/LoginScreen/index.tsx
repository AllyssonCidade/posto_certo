import React, { useState } from 'react'
import { View, Text, TextInput, Image } from 'react-native'

import { useAuth } from '@/src/contexts/AuthContext'
import { Button } from '@/src/components/Button'

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, user, logout } = useAuth()

  const handleLogin = async () => {
    try {
      await login(email, password)
      console.log('Usuário logado', user?.email)
    } catch (error) {
      console.error('Erro ao logar:', error)
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', gap: 26, padding: 20, backgroundColor: '#ffff' }}>
      <Image
        style={{ width: 100, height: 100 }}
        source={require('@/assets/images/logosaude.png')}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Faça Login</Text>
      <TextInput
        style={{
          width: '100%',
          borderColor: 'gray',
          borderWidth: 1,
          height: 55,
          borderRadius: 10,
          padding: 20
        }}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={{
          width: '100%',
          borderColor: 'gray',
          borderWidth: 1,
          height: 55,
          borderRadius: 10,
          padding: 20
        }}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text style={{ color: 'blue', marginTop: -16, alignSelf: 'flex-end' }}>
        Esqueci minha Senha
      </Text>
      <Button size="xxlarge" style={{ height: 55 }} title="Entrar" onPress={handleLogin}>
        Entrar
      </Button>
      <Image
        style={{ alignSelf: 'center', bottom: 0, width: 400, height: 400 }}
        source={require('@/assets/images/Polygon.png')}
      />
    </View>
  )
}
