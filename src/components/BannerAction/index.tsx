import * as S from './styles'
import { Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import styled from 'styled-components'
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
      <S.Card>
        <Image source={require('@/assets/images/gripe.png')} />
      </S.Card>
    </ScrollView>
  </S.Wrapper>
)

const styles = StyleSheet.create({
  card: {
    marginRight: 16
  },
  ribbon: {
    position: 'absolute',
    top: 10,
    right: 0
  }
})

export default BannerAction
