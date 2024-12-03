import * as S from './styles'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { HealthIconProps } from '@/src/types'

const HealthIcon = ({ title, name, onPress }: HealthIconProps) => (
  <S.Wrapper testID="wrapper">
    <S.CircleMenu onPress={onPress}>
      <MaterialIcons name={name} size={40} color="black" />
    </S.CircleMenu>
    <S.iconTitle>{title}</S.iconTitle>
  </S.Wrapper>
)

export default HealthIcon
