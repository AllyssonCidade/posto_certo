import * as S from './styles'
import React from 'react'
import SearchBar from '../../components/SearchBar'
import ReportCard from '@/src/components/ReportCard'
import HealthMenu from '@/src/components/HealthMenu'
import Actions from '@/src/components/Actions'
import Nearby from '@/src/components/Nearby'
import { StyleSheet } from 'react-native'

const Home = () => (
  <S.Wrapper contentContainerStyle={styles.scrollView} testID="wrapper">
    <SearchBar />
    <ReportCard />
    <HealthMenu />
    <Actions />
    <Nearby />
  </S.Wrapper>
)
const styles = StyleSheet.create({
  scrollView: {
    display: 'flex'
  },
  item: {
    marginBottom: 16
  }
})
export default Home
