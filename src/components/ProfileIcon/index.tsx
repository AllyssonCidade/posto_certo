import { Image, Text, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import styles from './styles'
import { ProfileIconProps } from '@/src/types'

//CASO SEJA PASSADA A PROP size='medium', DEVERÁ APARECER A IMAGEM DO PERFIL E O TAMANHO DO ICONE AUMENTARÁ PARA 40X40
//CASO CONTRÁRIO, SERÁ RENDERIZADA A LETRA INICIAL DO USUARIO E O TAMANHO MANTERÁ 36X36
const ProfileIcon = ({ style, size = 'small' }: ProfileIconProps) => (
  <TouchableOpacity style={[styles.wrapper, styles[size], style]} testID="wrapper">
    {size === 'medium' ? (
      <Image style={styles.medium} source={require('@/assets/images/user1.png')}></Image>
    ) : (
      <Text style={{ color: 'white', fontSize: 30 }}>A</Text>
    )}
  </TouchableOpacity>
)

export default ProfileIcon
