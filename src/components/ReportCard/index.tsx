import * as S from './styles'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '../Button'
import { LinearGradient } from 'expo-linear-gradient'
import styles from '../Button/styles'
import { RootStackParamList } from '@/src/types'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types'
import { useNavigation } from 'expo-router'

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MakeReport'>

const ReportCard = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>()

  return (
    <S.Wrapper style={styles.wrapper} testID="wrapper">
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0, 0, 0, 0.203)', 'transparent']}
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
        <Button
          onPress={() => navigation.navigate('MakeReport')}
          color="white"
          size="xxlarge"
          style={{ elevation: 3 }}
        >
          Clique aqui para iniciar
        </Button>
      </LinearGradient>
    </S.Wrapper>
  )
}

export default ReportCard
