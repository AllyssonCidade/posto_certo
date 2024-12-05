import { Feather } from '@expo/vector-icons'
import * as S from './styles'
import React from 'react'
import { View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import { Button } from '@/src/components/Button'
import { LogBox } from 'react-native'
import { useNavigation } from 'expo-router'
import { RootStackParamList } from '@/src/types'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types'

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Profile'>

//IGNORANDO WARNS VINDOS DO react-native-elements, AGUARDANDO ATUALIZAÇÃO DE FIX PARA REMOÇÃO DAS DEFAULTPROPS.
LogBox.ignoreLogs(['Warning: TextElement: Support for defaultProps will be removed'])
const Profile = () => {
  const [expandedMore, setExpandedMore] = React.useState(true)
  const [expandedPref, setExpandedPref] = React.useState(true)

  const navigation = useNavigation<ProfileScreenNavigationProp>()

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
          onPress={() => navigation.navigate('EditProfile')}
        >
          Editar Perfil
        </Button>
      </S.TopContainer>

      <S.BottomContainer showsVerticalScrollIndicator={false}>
        <ListItem.Accordion
          content={
            <ListItem.Content>
              <ListItem.Title style={{ fontWeight: 'bold' }}>Mais Informações</ListItem.Title>
            </ListItem.Content>
          }
          isExpanded={expandedMore}
          onPress={() => {
            setExpandedMore(!expandedMore)
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

        <ListItem.Accordion
          content={
            <ListItem.Content>
              <ListItem.Title style={{ fontWeight: 'bold' }}>Preferências</ListItem.Title>
            </ListItem.Content>
          }
          isExpanded={expandedPref}
          onPress={() => {
            setExpandedPref(!expandedPref)
          }}
        >
          <ListItem>
            <ListItem.Content style={{ marginLeft: 20 }}>
              <ListItem.Title>Notifações</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem>
            <ListItem.Content style={{ marginLeft: 20 }}>
              <ListItem.Title>Dark Mode</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </ListItem.Accordion>
        <Button
          textStyle={{ color: 'white', fontWeight: 'bold' }}
          style={{ alignSelf: 'center', backgroundColor: 'red', marginTop: 20 }}
        >
          Logout
        </Button>
      </S.BottomContainer>
    </S.Wrapper>
  )
}
export default Profile
