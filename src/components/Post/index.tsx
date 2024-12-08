import * as S from './styles'
import { Dimensions, StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AirbnbRating } from 'react-native-elements'
import HeadPublish from '../HeadPublish'
import MyCarousel from '../Carousel'
import { getDatabase, ref, onValue } from 'firebase/database'
import { useAuth } from '@/src/contexts/AuthContext'

const Post = () => {
  const { user } = useAuth()
  const [entries, setEntries] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [ratings, setRatings] = useState<number[]>([])

  useEffect(() => {
    const db = getDatabase()
    const reportsRef = ref(db, 'reports')

    onValue(reportsRef, (snapshot) => {
      if (snapshot.exists()) {
        const reportsData = snapshot.val()
        const entriesArray = Object.values(reportsData)
        setEntries(entriesArray)
        setRatings(new Array(entriesArray.length).fill(0))
      } else {
        console.log('Nenhum relato encontrado!')
      }
      setLoading(false)
    })

    return () => setLoading(true)
  }, [])

  const handleRatingChange = (index: number, rating: number) => {
    const updatedRatings = [...ratings]
    updatedRatings[index] = rating
    setRatings(updatedRatings)
  }

  const width = Dimensions.get('window').width

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando relatos...</Text>
      </View>
    )
  }

  return (
    <S.Wrapper testID="wrapper">
      <ScrollView style={styles.scrollView}>
        {entries.map((entry, index) => (
          <View key={index} style={styles.entryContainer}>
            <HeadPublish
              name={user?.displayName || 'Usuário'}
              job={user?.email || 'Não informado'}
            />
            <View style={styles.carouselContainer}>
              <MyCarousel
                location={entry.locationName}
                title={entry.locationAddress}
                reason={entry.reason}
                image={entry.image}
                entries={[{ image: entry.image || require('@/assets/images/usb1.png') }]}
              />
            </View>
            <Text numberOfLines={4} ellipsizeMode="tail" style={styles.text}>
              {entry.text}
            </Text>
            <AirbnbRating
              count={5}
              reviews={[]}
              defaultRating={ratings[index] || 0}
              size={20}
              onFinishRating={(rating) => handleRatingChange(index, rating)}
              showRating={false}
            />
          </View>
        ))}
      </ScrollView>
    </S.Wrapper>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    paddingBottom: 24
  },
  entryContainer: {
    marginBottom: 20,
    backgroundColor: '#ffff',

    borderRadius: 8
  },
  carouselContainer: {
    width: '100%',
    height: Dimensions.get('window').width / 1.7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  text: {
    fontSize: 14,
    paddingHorizontal: 12,
    marginTop: 8,
    marginBottom: 16,
    marginLeft: 16
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Post
