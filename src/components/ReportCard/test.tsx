import { render, fireEvent } from '@testing-library/react-native'
import ReportCard from '.'

//seus testes sao feitos aqui.

//descreva qual componente vai ser testado

describe('<ReportCard />', () => {
   //it para dizer como vai testar

  it('should be render', () => {

    //aqui o seu teste em si, faça mais...
    const { debug, getByText, getByTestId } = render(<ReportCard />)

  })
})