import * as S from './styles'
import React from 'react'
import { StyleSheet } from 'react-native'
import Post from '@/src/components/Post'
import { LogBox } from 'react-native'

//IGNORANDO WARNS VINDOS DO react-native-elements, AGUARDANDO ATUALIZAÇÃO DE FIX PARA REMOÇÃO DAS DEFAULTPROPS.
LogBox.ignoreLogs([
  'Warning: TapRating: Support for defaultProps will be removed',
  'Warning: Star: Support for defaultProps will be removed'
])
const Feed = () => {
  return (
    <S.Wrapper contentContainerStyle={styles.scrollView} testID="wrapper">
      <Post />
      <Post />
      <Post />
      <Post />
    </S.Wrapper>
  )
}
const styles = StyleSheet.create({
  scrollView: {
    display: 'flex'
  },
  item: {
    marginBottom: 16
  }
})

export default Feed
