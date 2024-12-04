import * as S from './styles'
import { Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Ribbon from '../Ribbon'

const BannerAction = () => (
  <S.Wrapper testID="wrapper">
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 1 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <S.Card style={styles.card}>
        <Image source={require('@/assets/images/covid.png')} />
        <Ribbon title="Vacinação contra Covid-19" location="Todas as UBS" />
      </S.Card>
      <S.Card style={styles.card}>
        <Image source={require('@/assets/images/gripe.png')} />
        <Ribbon title="Vacinação contra Covid-19" location="Todas as UBS" />
      </S.Card>
    </ScrollView>
  </S.Wrapper>
)

const styles = StyleSheet.create({
  card: {
    marginRight: 16,
    height: 120,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: '#fff'
  },

  ribbon: {
    position: 'absolute',
    top: 10,
    right: 0
  }
})

export default BannerAction
