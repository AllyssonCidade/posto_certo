import * as S from './styles'
import React from 'react'
import SearchBar from '@/src/components/SearchBar'
import { ListItem } from 'react-native-elements'
import { Button } from '@/src/components/Button'
import { Text, View } from 'react-native'

const MakeReport = () => {
  const [expanded, setExpanded] = React.useState(false)

  return (
    <S.Wrapper testID="wrapper">
      <SearchBar placeholder="Buscar Unidade de Saúde" iconLeft="chevron-left" />

      <ListItem.Accordion
        content={
          <ListItem.Content>
            <ListItem.Title style={{ fontWeight: 'bold', marginBottom: 16 }}>
              Mais Informações
            </ListItem.Title>
          </ListItem.Content>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded)
        }}
      >
        <ListItem>
          <ListItem.Content style={{ marginLeft: 20 }}>
            <ListItem.Title>Favoritos</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Content style={{ marginLeft: 20 }}>
            <ListItem.Title>Atendimentos</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Content style={{ marginLeft: 20 }}>
            <ListItem.Title>Exames</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </ListItem.Accordion>
      <View
        style={{
          alignItems: 'center',
          width: '90%',
          borderColor: 'black',
          borderWidth: 0.4,
          borderRadius: 8,
          height: 100,
          alignSelf: 'center',
          marginBottom: 24
        }}
      >
        <Text style={{ fontWeight: 'bold' }}>Loren Ipsun</Text>
      </View>
      <Button
        size="large"
        color="blue"
        title="concluir"
        style={{ width: '90%', alignSelf: 'center' }}
        onPress={() => console.log('Press')}
      >
        Concluir
      </Button>
    </S.Wrapper>
  )
}

export default MakeReport
