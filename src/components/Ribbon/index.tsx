import * as S from './styles'
import { Text, ViewStyle } from 'react-native'
import React from 'react'

export type RibbonProps = {
  title?: string
  location?: string
  viewStyle?: ViewStyle
}

const Ribbon = ({ title, location, viewStyle }: RibbonProps) => (
  <S.Wrapper style={viewStyle} testID="wrapper">
    <S.Title>{title}</S.Title>
    <S.Subtitle>{location}</S.Subtitle>
  </S.Wrapper>
)

export default Ribbon
