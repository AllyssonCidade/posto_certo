import { Text, StyleSheet, Image } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import * as S from './styles'
import InputContainer from '@/src/components/InputContainer'
import { Button } from '@/src/components/Button'

export default function EditProfile() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      fullName: '',
      cpf: '',
      Nascimento: '',
      Email: '',
      Password: '',
      NewPassword: '',
      RepeatPassword: ''
    }
  })
  const onSubmit = (data: any) => console.log(data)

  return (
    <S.Wrapper
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollView}
      testID="wrapper"
    >
      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputContainer
            placeholder="Nome completo"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        )}
        name="fullName"
      />
      {errors.fullName && <Text>Este é um campo obrigatorio</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 11,
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputContainer placeholder="CPF" onBlur={onBlur} onChange={onChange} value={value} />
        )}
        name="cpf"
      />
      {errors.cpf && <Text>Cpf inválido</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 6
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputContainer
            placeholder="Data de Nascimento"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        )}
        name="Nascimento"
      />
      {errors.Nascimento && <Text>Campo obrigatório</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputContainer placeholder="E-Mail" onBlur={onBlur} onChange={onChange} value={value} />
        )}
        name="Email"
      />
      {errors.Email && <Text>Campo inválido</Text>}

      <Text style={{ fontWeight: 'bold', fontSize: 16, alignSelf: 'center', padding: 8 }}>
        Alterar Senha
      </Text>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
          minLength: 6
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputContainer
            placeholder="Senha Atual"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        )}
        name="Password"
      />
      {errors.Password && <Text>Senha inválida</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
          minLength: 6
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputContainer
            placeholder="Nova Senha"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        )}
        name="NewPassword"
      />
      {errors.NewPassword && <Text>Senha Não confere</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 11,
          minLength: 6
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputContainer
            placeholder="Repita a Senha"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        )}
        name="RepeatPassword"
      />
      {errors.RepeatPassword && <Text>Senhas não conferem</Text>}

      <Button
        title="Submit"
        onPress={handleSubmit(onSubmit)}
        size="xlarge"
        style={{ height: 48, marginBottom: -20, alignSelf: 'center' }}
      >
        Salvar
      </Button>
      <Image style={{ alignSelf: 'center' }} source={require('@/assets/images/Polygon.png')} />
    </S.Wrapper>
  )
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
    gap: 24
  }
})
