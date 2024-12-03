import React from 'react'
import HealthIcon from '../HealthIcon'
import { ScrollView, StyleSheet, Text } from 'react-native'
import * as S from './styles'

const HealthMenu = () => (
  <S.Wrapper testID="Wrapper">
    <S.Title>Minha Saúde</S.Title>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <HealthIcon name="vaccines" title="Vacinas" />
      <HealthIcon name="healing" title="Exames" />
      <HealthIcon name="medication" title="Medicações" />
      <HealthIcon name="water-drop" title="Dignidade Menstrual" />
      <HealthIcon name="history-edu" title="Histórico" />
    </ScrollView>
  </S.Wrapper>
)

export default HealthMenu
