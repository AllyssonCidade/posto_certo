import * as S from './styles'
import React from 'react'
import { StyleSheet } from 'react-native'
import Post from '@/src/components/Post'

const Feed = () => {
  return (
    <S.Wrapper contentContainerStyle={styles.scrollView} testID="wrapper">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
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
