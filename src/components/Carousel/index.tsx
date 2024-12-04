import { Dimensions, Image } from 'react-native'
import Ribbon from '../Ribbon'
import Carousel from 'react-native-reanimated-carousel'
import Animated from 'react-native-reanimated'
import { Reason, ReasonText } from './styles'

const MyCarousel = ({ entries }: any) => {
  const width = Dimensions.get('window').width
  return (
    <Carousel
      loop
      width={width}
      height={width / 2}
      autoPlay={false}
      data={entries}
      snapEnabled={true}
      onSnapToItem={(index) => console.log('current index:', index)}
      modeConfig={{
        parallaxScrollingScale: 0.8,
        parallaxScrollingOffset: 50,
        parallaxAdjacentItemScale: 0.75
      }}
      renderItem={({ item, index }: any) => (
        <Animated.View
          key={index}
          style={{
            width: '100%',
            borderRadius: 12,
            flexDirection: 'column',
            paddingHorizontal: 8,
            paddingBottom: 8
          }}
        >
          <Image
            source={item.image}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 12
            }}
            resizeMode="cover"
          />
          <Ribbon
            viewStyle={{
              position: 'absolute',
              top: 0,
              zIndex: 1,
              left: 10
            }}
            location={item.location}
            title={item.title}
          />
          <Reason style={{ shadowColor: '#000', shadowRadius: 2, elevation: 2 }}>
            <ReasonText>{item.reason}</ReasonText>
          </Reason>
        </Animated.View>
      )}
    />
  )
}

export default MyCarousel
