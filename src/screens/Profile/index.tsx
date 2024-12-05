import { Feather } from '@expo/vector-icons'
import * as S from './styles'
import React from 'react'
import { StatusBar, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import { Button } from '@/src/components/Button'

const Profile = () => {
  const [expanded, setExpanded] = React.useState(true)
  return (
    <S.Wrapper testID="wrapper">
      <S.TopContainer>
        <View style={{ alignItems: 'flex-end', flexDirection: 'row', paddingLeft: 30 }}>
          <Avatar
            size={120}
            rounded
            source={{ uri: 'https://randomuser.me/api/portraits/men/12.jpg' }}
          />
          <Feather name="edit-3" size={30} color="black" />
        </View>
        <View style={{ alignItems: 'center' }}>
          <S.name>John Doe</S.name>
          <S.email>8H2mE@example.com</S.email>
        </View>
        <Button
          textStyle={{ color: '#14a4cc', fontWeight: 'bold' }}
          size="medium"
          color="white"
          title="Editar Perfil"
          onPress={() => {}}
        >
          Editar Perfil
        </Button>
      </S.TopContainer>

      <S.BottomContainer>
        <ListItem.Accordion
          content={
            <ListItem.Content>
              <ListItem.Title>Mais Informações</ListItem.Title>
            </ListItem.Content>
          }
          isExpanded={expanded}
          onPress={() => {
            setExpanded(!expanded)
          }}
        >
          <ListItem>
            <ListItem.Content style={{ marginLeft: 20 }}>
              <ListItem.Title>Favoritos</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem>
            <ListItem.Content style={{ marginLeft: 20 }}>
              <ListItem.Title>Atendimentos</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem>
            <ListItem.Content style={{ marginLeft: 20 }}>
              <ListItem.Title>Exames</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </ListItem.Accordion>
      </S.BottomContainer>
    </S.Wrapper>
  )
}
export default Profile
