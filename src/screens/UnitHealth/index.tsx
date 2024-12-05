import * as S from './styles'
import { Image, Text, View } from 'react-native'
import React from 'react'
import Ribbon from '@/src/components/Ribbon'
import { Button } from '@/src/components/Button'

const UnitHealth = () => (
  <S.Wrapper testID="wrapper">
    <S.ImgContainer>
      <Image
        resizeMode="stretch"
        style={{ width: '100%', height: '100%', borderRadius: 20 }}
        source={require('@/assets/images/hpt1.jpg')}
      />
      <Ribbon
        viewStyle={{
          position: 'absolute',
          top: 9,
          left: 9,
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 0
        }}
        title="UBS- IAPI"
        location="Avenida. Hab. Santa Etelvina II"
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 24,
          position: 'absolute',
          bottom: 10
        }}
      >
        <Button style={{ gap: 8 }} size="xlarge" icon="calendar" color="white">
          Fazer um comentário
        </Button>
        <Button style={{ gap: 8 }} size="xlarge" icon="map-pin" color="white">
          12 mins de você
        </Button>
      </View>
    </S.ImgContainer>
    <View
      style={{
        flexDirection: 'row',
        gap: 10,
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Button style={{ gap: 8 }} size="large" color="blue">
        Especialidades
      </Button>
      <Button style={{ gap: 8 }} size="large" color="blue">
        Campanhas
      </Button>
      <Button style={{ gap: 8 }} size="large" color="blue">
        Vacinas Disponíveis
      </Button>
      <Button style={{ gap: 8 }} size="large" color="blue">
        Dias de Marcação
      </Button>
      <Button style={{ gap: 8 }} size="large" color="blue">
        Exames
      </Button>
      <Button style={{ gap: 8 }} size="large" color="blue">
        Avisos
      </Button>
    </View>
    <View style={{ padding: 16, gap: 8 }}>
      <Text style={{ fontSize: 14, textAlign: 'left' }}>Consultas Médicas</Text>
      <Text style={{ fontSize: 14, textAlign: 'left' }}>Pediatria</Text>
      <Text style={{ fontSize: 14, textAlign: 'left' }}>Ginecologia</Text>
      <Text style={{ fontSize: 14, textAlign: 'left' }}>Odontologia</Text>
      <Text style={{ fontSize: 14, textAlign: 'left' }}>Enfermagem</Text>
      <Text style={{ fontSize: 14, textAlign: 'left' }}>Serviços Laboratoriais</Text>
      <Text style={{ fontSize: 14, textAlign: 'left' }}>Serviços de Emergência</Text>
    </View>
  </S.Wrapper>
)

export default UnitHealth
