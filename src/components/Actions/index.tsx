import BannerAction from '../BannerAction'
import * as S from './styles'
import React from 'react'

const Actions = () => (
  <S.Wrapper testID="wrapper">
    <S.HeadContainer>
      <S.Title>Ações em sua Região</S.Title>
      <S.Link testID="link">
        <S.LinkText>Ver Todas</S.LinkText>
      </S.Link>
    </S.HeadContainer>
    <BannerAction />
  </S.Wrapper>
)

export default Actions
