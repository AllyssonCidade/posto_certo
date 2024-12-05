import * as S from './styles'
import { StyleSheet } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import ProfileIcon from '../ProfileIcon'

export type SearchBarProps = {
  placeholder?: string
  iconLeft?: keyof typeof Feather.glyphMap
  iconRight?: keyof typeof Feather.glyphMap
  profile?: boolean
}
const SearchBar = ({ iconLeft, iconRight, placeholder, profile }: SearchBarProps) => (
  <S.Wrapper testID="wrapper">
    <S.Input placeholder={placeholder} />
    {iconRight && <Feather name={iconRight} size={30} color="black" style={styes.search} />}
    {iconLeft && <Feather name={iconLeft} size={30} color="black" style={styes.menu} />}
    {profile && <ProfileIcon style={styes.profile} />}
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
