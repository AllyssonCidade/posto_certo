import * as S from './styles'
import React from 'react'
import SearchBar from '../../components/SearchBar'
import ReportCard from '@/src/components/ReportCard'
import HealthMenu from '@/src/components/HealthMenu'
import Actions from '@/src/components/Actions'

const Home = () => (
  <S.Wrapper testID="wrapper">
    <SearchBar />
    <ReportCard />
    <HealthMenu />
    <Actions />
  </S.Wrapper>
)

export default Home
