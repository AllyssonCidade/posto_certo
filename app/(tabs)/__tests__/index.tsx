import { render } from '@testing-library/react-native'
import App from '..'
import { NavigationContainer } from '@react-navigation/native'

describe('App', () => {
  it('the component rendered', () => {
    const { debug } = render(
      <NavigationContainer>
        <App />
      </NavigationContainer>
    )
    debug()
  })
})
