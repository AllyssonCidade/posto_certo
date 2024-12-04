import * as S from './styles'
import React from 'react'
import HeadPublish from '@/src/components/HeadPublish'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import MyCarousel from '@/src/components/Carousel'
import Post from '@/src/components/Post'

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

const Feed = () => {
  const width = Dimensions.get('window').width

  return (
    <S.Wrapper testID="wrapper">
      <Post />
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
    paddingHorizontal: 12
  }
})

export default Feed
