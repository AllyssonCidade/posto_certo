import { Dimensions, Image } from 'react-native'
import Ribbon from '../Ribbon'
import Carousel from 'react-native-reanimated-carousel'
import Animated from 'react-native-reanimated'
import { Reason, ReasonText } from './styles'

const MyCarousel = ({ entries, location, title, reason, image }: any) => {
  const width = Dimensions.get('window').width
  return (
    <Carousel
      loop
      width={width}
      height={width / 1.7}
      autoPlay={false}
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5
      }}
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
            source={{ uri: image }}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 25
            }}
            resizeMode="cover"
          />
          <Ribbon
            viewStyle={{
              position: 'absolute',
              top: 0,
              borderTopLeftRadius: 20,
              zIndex: 1,
              left: 10
            }}
            location={location}
            title={title}
          />
          <Reason style={{ height: 30, backgroundColor: '#ffff' }}>
            <ReasonText>{reason}</ReasonText>
          </Reason>
        </Animated.View>
      )}
    />
  )
}

export default MyCarousel
