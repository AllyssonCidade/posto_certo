import * as S from './styles'
import React, { useRef, useState, useEffect } from 'react'
import { ListItem } from 'react-native-elements'
import { Button } from '@/src/components/Button'
import { StyleSheet, Text, View, ActivityIndicator, TextInput } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useLocation } from '@/src/contexts/LocationContext'
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete
} from 'react-native-google-places-autocomplete'

const MakeReport = () => {
  const [expanded, setExpanded] = useState(false)
  const [region, setRegion] = useState({
    latitude: -23.55052,
    longitude: -46.633308,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05
  })

  const mapRef = useRef<MapView>(null)
  const { location } = useLocation()
  if (!location) {
    console.error('Erro: Location não foi carregada corretamente.')
  }

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

  return (
    <S.Wrapper testID="wrapper">
      <GooglePlacesAutocomplete
        placeholder="Buscar uma unidade de saude"
        onPress={(data, details) => {
          if (details) {
            setRegion({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01
            })
          } else {
            console.error('Erro: Detalhes do local não disponíveis.')
          }
        }}
        fetchDetails={true}
        query={{
          key: process.env.API_KEY_FAKE,
          language: 'pt-br'
        }}
        styles={{
          container: {
            flex: 0,
            alignItems: 'center'
          },
          textInputContainer: {
            width: '100%',
            alignItems: 'center',
            height: 50
          },
          textInput: {
            height: 38,
            zIndex: 10,
            color: '#5d5d5d',
            fontSize: 16,
            backgroundColor: '#f5f5f5',
            borderRadius: 20
          },
          listView: {
            zIndex: 9,
            height: 100,
            marginTop: 50,
            position: 'absolute',
            backgroundColor: '#f5f5f5'
          },
          row: {
            backgroundColor: 'white',
            padding: 13,
            height: 44,
            flexDirection: 'row'
          },
          description: {
            color: '#1faadb'
          }
        }}
      />

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
              Tipos de Relato
            </ListItem.Title>
          </ListItem.Content>
        }
        isExpanded={expanded}
        onPress={() => setExpanded(!expanded)}
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

      <View style={styles.infoCard}>
        <TextInput placeholder="Descrição" style={styles.infoText} />
      </View>

      <Button
        size="large"
        color="blue"
        title="Concluir"
        style={{ width: '90%', alignSelf: 'center' }}
        onPress={() => console.log('Press')}
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
  }
})

export default MakeReport
