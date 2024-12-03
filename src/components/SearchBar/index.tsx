import * as S from './styles'
import { StyleSheet } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import ProfileIcon from '../ProfileIcon'

const SearchBar = () => (
  <S.Wrapper testID="wrapper">
    <S.Input placeholder="Encontre o que procura" />
    <Feather name="search" size={30} color="black" style={styes.search} />
    <Feather name="menu" size={30} color="black" style={styes.menu} />
    <ProfileIcon style={styes.profile} />
  </S.Wrapper>
)
const styes = StyleSheet.create({
  menu: {
    position: 'absolute',
    top: 6,
    left: 10
  },
  search: {
    position: 'absolute',
    top: 6,
    right: 50
  },
  profile: {
    position: 'absolute',
    top: 4,
    right: 4
  }
})

export default SearchBar
