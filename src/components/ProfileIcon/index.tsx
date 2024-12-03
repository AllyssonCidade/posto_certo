import * as S from './styles'
import { Text, ViewStyle } from 'react-native'
import React from 'react'

interface ProfileIconProps {
  style?: ViewStyle
}

const ProfileIcon = ({ style }: ProfileIconProps) => (
  <S.Wrapper style={style} testID="wrapper">
    <Text style={{ color: 'white', fontSize: 30 }}>A</Text>
  </S.Wrapper>
)

export default ProfileIcon
