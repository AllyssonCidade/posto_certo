import React, { useState } from 'react'
import { View, TextInput, Alert, LogBox, Modal } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import { Feather } from '@expo/vector-icons'
import { Button } from '@/src/components/Button'
import {
  getAuth,
  updateProfile,
  updateEmail,
  EmailAuthProvider,
  reauthenticateWithCredential
} from 'firebase/auth'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import * as ImagePicker from 'expo-image-picker'
import * as S from './styles'
import { useNavigation } from 'expo-router'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types'
import { RootStackParamList } from '@/src/types'

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Profile'>

LogBox.ignoreLogs(['Warning: TextElement: Support for defaultProps will be removed'])
const Profile = () => {
  const auth = getAuth()
  const user = auth.currentUser
  const [expandedMore, setExpandedMore] = React.useState(true)
  const [expandedPref, setExpandedPref] = React.useState(true)
  const [name, setName] = useState(user?.displayName || '')
  const [photoURL, setPhotoURL] = useState(user?.photoURL || 'https://via.placeholder.com/120')
  const [isEditingName, setIsEditingName] = useState(false)
  const [isEditingEmail, setIsEditingEmail] = useState(false)
  const [newEmail, setNewEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation<ProfileScreenNavigationProp>()
  const handleSaveName = async () => {
    if (!user) return

    try {
      await updateProfile(user, { displayName: name })
      Alert.alert('Sucesso', 'Nome atualizado com sucesso!')
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível atualizar o nome.')
      console.error('Erro ao atualizar o nome:', error)
    }
    setIsEditingName(false)
  }

  const handleSaveEmail = async () => {
    if (!user) return

    try {
      const credential = EmailAuthProvider.credential(user.email || '', password)
      await reauthenticateWithCredential(user, credential)
      await updateEmail(user, newEmail)
      Alert.alert('Sucesso', 'E-mail atualizado com sucesso!')
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível atualizar o e-mail.')
      console.error('Erro ao atualizar e-mail:', error)
    }
    setIsEditingEmail(false)
    setNewEmail('')
    setPassword('')
  }

  const handleEditPhoto = async () => {
    if (!user) return

    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (!permission.granted) {
      Alert.alert('Permissão negada', 'É necessário permitir acesso à galeria para alterar a foto.')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1
    })

    if (!result.canceled) {
      try {
        const storage = getStorage()
        const fileRef = ref(storage, `profilePictures/${user.uid}.jpg`)
        const response = await fetch(result.assets[0].uri)
        const blob = await response.blob()

        await uploadBytes(fileRef, blob)
        const newPhotoURL = await getDownloadURL(fileRef)

        await updateProfile(user, { photoURL: newPhotoURL })
        setPhotoURL(newPhotoURL)
        Alert.alert('Sucesso', 'Foto de perfil atualizada com sucesso!')
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível atualizar a foto de perfil.')
        console.error('Erro ao atualizar foto de perfil:', error)
      }
    }
  }

  return (
    <S.Wrapper>
      <S.TopContainer>
        <View style={{ alignItems: 'flex-end', flexDirection: 'row', paddingLeft: 30 }}>
          <Avatar
            size={120}
            rounded
            source={{ uri: 'https://randomuser.me/api/portraits/men/12.jpg' }}
          />
          <Feather
            name="edit-3"
            size={30}
            color="black"
            onPress={() =>
              console.log(
                'Editar foto desabilitada. Até a versão final para não gerar custo na api'
              )
            }
            style={{ marginLeft: -20 }}
          />
        </View>

        <View style={{ alignItems: 'center', marginTop: 20 }}>
          {isEditingName ? (
            <TextInput
              style={{
                fontSize: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
                padding: 5,
                textAlign: 'center'
              }}
              value={name}
              onChangeText={setName}
              onSubmitEditing={handleSaveName}
              autoFocus
            />
          ) : (
            <S.name onPress={() => setIsEditingName(true)}>{name || 'Editar Nome'}</S.name>
          )}
          <S.email onPress={() => setIsEditingEmail(true)}>{user?.email}</S.email>
        </View>

        {isEditingName && (
          <Button
            textStyle={{ color: '#14a4cc', fontWeight: 'bold' }}
            size="medium"
            color="white"
            title="Salvar Nome"
            onPress={handleSaveName}
          >
            Salvar Nome
          </Button>
        )}
        <Button
          textStyle={{ color: '#14a4cc', fontWeight: 'bold' }}
          size="medium"
          color="white"
          title="Editar Perfil"
          onPress={() => navigation.navigate('Home')}
        >
          Editar Perfil
        </Button>
      </S.TopContainer>

      <Modal visible={isEditingEmail} transparent animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}
        >
          <View
            style={{
              width: '90%',
              padding: 20,
              backgroundColor: 'white',
              borderRadius: 10,
              alignItems: 'center'
            }}
          >
            <TextInput
              placeholder="Novo e-mail"
              value={newEmail}
              onChangeText={setNewEmail}
              style={{
                width: '100%',
                marginBottom: 10,
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
                padding: 5
              }}
            />
            <TextInput
              placeholder="Senha atual"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={{
                width: '100%',
                marginBottom: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
                padding: 5
              }}
            />
            <Button
              textStyle={{ color: 'white' }}
              size="medium"
              color="blue"
              title="Salvar E-mail"
              onPress={handleSaveEmail}
            >
              Salvar E-mail
            </Button>
            <Button
              textStyle={{ color: 'white' }}
              size="medium"
              color="red"
              title="Cancelar"
              onPress={() => setIsEditingEmail(false)}
              style={{ marginTop: 10 }}
            >
              Cancelar
            </Button>
          </View>
        </View>
      </Modal>

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
          onPress={() => auth.signOut()}
          textStyle={{ color: 'white', fontWeight: 'bold' }}
          style={{ alignSelf: 'center', marginTop: 20, backgroundColor: 'red' }}
        >
          Logout
        </Button>
      </S.BottomContainer>
    </S.Wrapper>
  )
}
export default Profile
