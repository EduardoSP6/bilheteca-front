import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { InputField } from '@/components/molecules/InputField'
import * as S from './SignUpModal.styles'

export type SignUpModalFormData = {
  name: string
  email: string
  phone: string
  password: string
  nickname: string
  confirmPassword: string
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Este campo é obrigatório'),
  email: Yup.string().required('Este campo é obrigatório'),
  phone: Yup.string().required('Este campo é obrigatório'),
  nickname: Yup.string().required('Este campo é obrigatório'),
  password: Yup.string().required('Este campo é obrigatório'),
  confirmPassword: Yup.string()
    .required('Este campo é obrigatório')
    .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
})

interface SignUpModalProps {
  handleSignUp: (data: SignUpModalFormData) => Promise<void>
}

export const SignUpModal = ({ handleSignUp }: SignUpModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpModalFormData>({
    resolver: yupResolver(validationSchema),
    reValidateMode: 'onBlur'
  })

  const onSubmit = handleSubmit(handleSignUp)

  return (
    <div className="bg-white rounded-lg min-w-[430px] overflow-hidden">
      <S.FormSection onSubmit={onSubmit}>
        <h3 className="text-2xl font-semibold mb-8">Criar conta</h3>

        <InputField
          {...register('name')}
          placeholder="Nome completo"
          error={errors.name?.message}
        />

        <InputField
          {...register('nickname')}
          placeholder="Apelido"
          error={errors.nickname?.message}
        />

        <InputField
          {...register('email')}
          placeholder="E-mail"
          error={errors.email?.message}
        />

        <InputField
          {...register('phone')}
          placeholder="Telefone"
          error={errors.phone?.message}
        />

        <InputField
          {...register('password')}
          type="password"
          placeholder="Senha"
          error={errors.password?.message}
        />

        <InputField
          {...register('confirmPassword')}
          type="password"
          placeholder="Confirmação da senha"
          error={errors.confirmPassword?.message}
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-primary text-white font-semibold py-3"
        >
          CADASTRAR
        </button>

        <p className="mt-6 text-sm text-center">
          Ao me cadastrar, concordo com os{' '}
          <a className="font-semibold text-primary cursor-pointer">
            Termos de uso
          </a>{' '}
          da Bilheteca
        </p>
      </S.FormSection>

      <div className="mt-10 bg-zinc-200 border-t border-zinc-400 p-4 w-full flex justify-center">
        <p className="text-sm">
          Já possui uma conta?{' '}
          <a className="font-bold text-sm text-primary cursor-pointer">
            Faça login!
          </a>
        </p>
      </div>
    </div>
  )
}
