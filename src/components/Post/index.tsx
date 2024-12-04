import * as S from './styles'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeadPublish from '../HeadPublish'
import MyCarousel from '../Carousel'

const entries = [
  {
    title: 'Hospital Nacional',
    location: 'Rua da Saudade',
    reason: 'Atendimento',
    image: require('@/assets/images/hpt1.jpg')
  },
  {
    title: 'UBS Pernambués',
    location: 'Av. Castor Filho',
    reason: 'Infraestrutura',
    image: require('@/assets/images/hpt2.jpg')
  },

  {
    title: 'UBS Pelourinho',
    location: 'Pelourinho',
    reason: 'Equipamentos',
    image: require('@/assets/images/hpt3.jpg')
  }
]

const textos = [
  {
    text: 'Fui atendido na UBS Nascer do Sol e fiquei frustrado com a falta de atenção do médico. A equipe de enfermagem, por outro lado, foi excelente e muito solícita. A unidade estava limpa e bem organizada.'
  },
  {
    text: 'Fui atendido na UBS Nascer do Sol e fiquei frustrado com a falta de atenção do médico. A equipe de enfermagem, por outro lado, foi excelente e muito solícita. A unidade estava limpa e bem organizada.'
  }
]
const Post = () => {
  const width = Dimensions.get('window').width

  return (
    <S.Wrapper testID="wrapper">
      <HeadPublish name="Clarice Lispector" job="Escritor" />
      <View style={styles.carouselContainer}>
        <MyCarousel entries={entries} />
      </View>
      <Text numberOfLines={4} ellipsizeMode="tail" style={styles.text}>
        {textos[0].text}
      </Text>
    </S.Wrapper>
  )
}

const styles = StyleSheet.create({
  carouselContainer: {
    width: '100%',
    height: Dimensions.get('window').width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4
  },
  text: {
    fontSize: 14,
    paddingHorizontal: 12,
    marginTop: 8
  }
})

export default Post
