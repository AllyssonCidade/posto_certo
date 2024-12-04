import * as S from './styles'
import { Image, Text } from 'react-native'
import React from 'react'

const Nearby = () => (
  <S.Wrapper testID="wrapper">
    <S.HeadContainer>
      <S.Title>Unidades de Saúde próximas</S.Title>
      <S.Link testID="link">
        <S.LinkText>Ver Todas</S.LinkText>
      </S.Link>
    </S.HeadContainer>
    <S.Cards horizontal contentContainerStyle={{ gap: 16 }} showsHorizontalScrollIndicator={false}>
      <S.Card>
        <S.Image source={require('@/assets/images/usb1.png')} />
        <S.CardTitle numberOfLines={1} ellipsizeMode="tail" style={{ color: 'black' }}>
          - Unidade de Saúde 1
        </S.CardTitle>
        <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: 'black' }}>
          - Praça Terreiro De Jesus
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: 'black' }}>
          - Pelourinho.
        </Text>
      </S.Card>
      <S.Card>
        <S.Image source={require('@/assets/images/usb2.png')} />
        <S.CardTitle
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{ color: 'black', overflow: 'hidden' }}
        >
          - Marechal Rondon
        </S.CardTitle>
        <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: 'black' }}>
          - Praça Marechal Rondon
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: 'black' }}>
          - Marechal Rondon
        </Text>
      </S.Card>
      <S.Card>
        <S.Image source={require('@/assets/images/usb3.png')} />
        <S.CardTitle numberOfLines={1} ellipsizeMode="tail" style={{ color: 'black' }}>
          - UBS Pelourinho
        </S.CardTitle>
        <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: 'black' }}>
          - R. do Bpo., 37
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: 'black' }}>
          - Pelourinho
        </Text>
      </S.Card>
    </S.Cards>
  </S.Wrapper>
)

export default Nearby
