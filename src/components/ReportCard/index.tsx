import * as S from './styles'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '../Button'
import { LinearGradient } from 'expo-linear-gradient'
import styles from '../Button/styles'

const ReportCard = () => (
  <S.Wrapper style={styles.wrapper} testID="wrapper">
    <LinearGradient
      // Background Linear Gradient
      colors={['rgba(0,0,0,0.2)', 'transparent']}
      style={{
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: '#f5f5f5',
        borderRadius: 16,
        height: 158,
        width: '100%',
        paddingHorizontal: 1
      }}
    >
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 45, alignSelf: 'flex-start' }}>
          Participar
        </Text>
        <Text style={{ fontSize: 14, alignSelf: 'flex-start' }}>
          Esteve em uma unidade de saúde? relate aqui!
        </Text>
      </View>
      <Button color="white" size="xlarge" style={{ elevation: 3 }}>
        Clique aqui para iniciar
      </Button>
    </LinearGradient>
  </S.Wrapper>
)

export default ReportCard
