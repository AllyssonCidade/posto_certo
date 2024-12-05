import * as S from './styles'
import { Text, TextInput, TextStyle, ViewStyle } from 'react-native'
import React from 'react'

export type InputContainerProps = {
  onBlur: () => void
  onChange: (value: string) => void
  value: string | any
  placeholder: string
}
const InputContainer = ({ onBlur, onChange, value, placeholder }: InputContainerProps) => (
  <S.Wrapper testID="wrapper">
    <TextInput placeholder={placeholder} onBlur={onBlur} onChangeText={onChange} value={value} />
  </S.Wrapper>
)

export default InputContainer
