import * as S from './styles'
import { Text, ViewStyle } from 'react-native'
import React from 'react'

export type RibbonProps = {
  title?: string
  location?: string
}
const Ribbon = ({ title, location }: RibbonProps) => (
  <S.Wrapper testID="wrapper">
    <Text>{title}</Text>
    <Text>{location}</Text>
  </S.Wrapper>
)

export default Ribbon
