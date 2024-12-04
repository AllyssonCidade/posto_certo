import { Feather } from '@expo/vector-icons'
import * as S from './styles'
import React from 'react'
import { StatusBar, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import { Button } from '@/src/components/Button'

const Profile = () => (
  <S.Wrapper testID="wrapper">
    <S.TopContainer>
      <View style={{ alignItems: 'flex-end', flexDirection: 'row', paddingLeft: 30 }}>
        <Avatar
          size={120}
          rounded
          source={{ uri: 'https://randomuser.me/api/portraits/men/56.jpg' }}
        />
        <Feather name="edit-3" size={30} color="black" />
      </View>
      <View style={{ alignItems: 'center' }}>
        <S.name>John Doe</S.name>
        <S.email>8H2mE@example.com</S.email>
      </View>
      <Button
        textStyle={{ color: '#14a4cc' }}
        size="small"
        color="white"
        title="Editar Perfil"
        onPress={() => {}}
      >
        Editar Perfil
      </Button>
    </S.TopContainer>
  </S.Wrapper>
)

export default Profile
