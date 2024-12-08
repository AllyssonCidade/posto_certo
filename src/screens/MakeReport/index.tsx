import * as S from './styles'
import React, { useRef, useState, useEffect } from 'react'
import { ListItem } from 'react-native-elements'
import { Button } from '@/src/components/Button'
import { StyleSheet, Text, View, ActivityIndicator, TextInput, Image } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useLocation } from '@/src/contexts/LocationContext'
import { useAuth } from '@/src/contexts/AuthContext'
import { getDatabase, ref, push, set } from 'firebase/database'
import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from 'expo-media-library'
import { useNavigation } from 'expo-router'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types'
import { RootStackParamList } from '@/src/types'

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

const MakeReport = () => {
  const { user } = useAuth()
  const navigation = useNavigation<ProfileScreenNavigationProp>()
  const [expanded, setExpanded] = useState(false)
  const [region, setRegion] = useState({
    latitude: -23.55052,
    longitude: -46.633308,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05
  })

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [reason, setReason] = useState('') // Motivo do relato
  const [locationName, setLocationName] = useState('') // Nome da unidade de saúde
  const [locationAddress, setLocationAddress] = useState('') // Endereço ou localização
  const [image, setImage] = useState<string | null>(null)

  const mapRef = useRef<MapView>(null)
  const { location } = useLocation()

  useEffect(() => {
    if (location && location.coords) {
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      })
    }
  }, [location])

  const pickImage = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync()
    if (status !== 'granted') {
      alert('Desculpe, precisamos da permissão para acessar suas fotos!')
      return
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.canceled) {
      const uri = result.assets?.[0]?.uri
      setImage(uri || null)
    }
  }

  const handleConclude = () => {
    const db = getDatabase()
    const reportsRef = ref(db, 'reports')
    const newReportRef = push(reportsRef)

    set(newReportRef, {
      title,
      location: {
        latitude: region.latitude,
        longitude: region.longitude
      },
      reason,
      text: description,
      image,
      locationName,
      locationAddress,
      userName: user?.displayName,
      userEmail: user?.email,
      userImage: user?.photoURL,
      userJob: 'Estudante',
      timestamp: Date.now()
    })
      .then(() => {
        console.log('Relato enviado com sucesso!')
        alert('Relato enviado com sucesso!')
        navigation.navigate('Home')
      })
      .catch((error) => {
        console.error('Erro ao enviar o relato: ', error)
        alert('Erro ao enviar o relato.')
      })
  }

  return (
    <S.Wrapper testID="wrapper">
      <View style={{ width: '100%', height: 200, alignSelf: 'center' }}>
        {!location || !location.coords ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text>Carregando mapa...</Text>
          </View>
        ) : (
          <MapView ref={mapRef} provider="google" region={region} style={styles.map}>
            <Marker
              coordinate={{
                latitude: region.latitude,
                longitude: region.longitude
              }}
            />
          </MapView>
        )}
      </View>

      <ListItem.Accordion
        content={
          <ListItem.Content>
            <ListItem.Title style={{ fontWeight: 'bold', marginBottom: 16 }}>
              Motivo do Relato
            </ListItem.Title>
          </ListItem.Content>
        }
        isExpanded={expanded}
        onPress={() => setExpanded(!expanded)}
      >
        <TextInput
          placeholder="Motivo (máx. 10 caracteres)"
          style={{ width: '90%', alignSelf: 'center', marginBottom: 16 }}
          value={reason}
          maxLength={10}
          onChangeText={setReason}
        />
      </ListItem.Accordion>

      <ListItem.Accordion
        content={
          <ListItem.Content>
            <ListItem.Title style={{ fontWeight: 'bold', marginBottom: 16 }}>
              Unidade de Saúde
            </ListItem.Title>
          </ListItem.Content>
        }
        isExpanded={expanded}
        onPress={() => setExpanded(!expanded)}
      >
        <TextInput
          placeholder="Nome da Unidade"
          style={{ width: '90%', alignSelf: 'center', marginBottom: 16 }}
          value={locationName}
          maxLength={50}
          onChangeText={setLocationName}
        />
        <TextInput
          placeholder="Localização"
          style={{ width: '90%', alignSelf: 'center', marginBottom: 16 }}
          value={locationAddress}
          maxLength={100}
          onChangeText={setLocationAddress}
        />
      </ListItem.Accordion>

      <View style={styles.imagePickerContainer}>
        <Button
          size="large"
          color="white"
          icon="camera"
          style={{ width: '90%', alignSelf: 'center', marginBottom: 16 }}
          title={image ? 'Trocar Imagem' : 'Selecionar Imagem'}
          onPress={pickImage}
        />
        {image && (
          <View style={styles.imagePreview}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        )}
      </View>

      <View style={styles.infoCard}>
        <TextInput
          placeholder="Descrição (máx. 100 caracteres)"
          style={styles.infoText}
          value={description}
          maxLength={100}
          onChangeText={setDescription}
        />
      </View>

      <Button
        size="large"
        color="blue"
        title="Concluir"
        style={{ width: '90%', alignSelf: 'center' }}
        onPress={handleConclude}
      >
        Concluir
      </Button>
    </S.Wrapper>
  )
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
    borderRadius: 20
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 20,
    alignItems: 'center'
  },
  infoCard: {
    alignItems: 'center',
    width: '100%',
    borderColor: 'black',
    borderWidth: 0.4,
    borderRadius: 8,
    height: 200,
    alignSelf: 'center',
    marginBottom: 24
  },
  infoText: {
    alignSelf: 'flex-start',
    padding: 8
  },
  imagePickerContainer: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20
  },
  imagePreview: {
    marginTop: 10
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8
  }
})

export default MakeReport
