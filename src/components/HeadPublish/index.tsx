import * as S from './styles'
import { Text, View } from 'react-native'
import React from 'react'
import ProfileIcon from '../ProfileIcon'
import { FeedProps } from '@/src/types'

const HeadPublish = ({ name, job }: FeedProps) => (
  <S.Wrapper testID="wrapper">
    <S.Heade>
      <ProfileIcon size="medium" />
      <View>
        <S.Name>{name}</S.Name>
        <S.Job>{job}</S.Job>
      </View>
    </S.Heade>
  </S.Wrapper>
)

export default HeadPublish
