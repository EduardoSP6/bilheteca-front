import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { InputField } from '@/components/molecules/InputField'
import * as S from './SignInModal.styles'

export type SignInModalFormData = {
  credencial: string
  password: string
}

const validationSchema = Yup.object().shape({
  credencial: Yup.string().required('Este campo é obrigatório'),
  password: Yup.string().required('Este campo é obrigatório')
})

interface SignInModalProps {
  handleSignIn: (data: SignInModalFormData) => void
}

export const SignInModal = ({ handleSignIn }: SignInModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInModalFormData>({
    resolver: yupResolver(validationSchema),
    reValidateMode: 'onBlur'
  })

  const onSubmit = handleSubmit(handleSignIn)

  return (
    <div className="bg-white rounded-lg min-w-[430px] overflow-hidden">
      <S.FormSection onSubmit={onSubmit}>
        <h3 className="text-2xl font-semibold mb-8">Login</h3>

        <InputField
          {...register('credencial')}
          placeholder="E-mail ou telefone"
          error={errors.credencial?.message}
        />

        <InputField
          {...register('password')}
          type="password"
          placeholder="Senha"
          error={errors.password?.message}
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-primary text-white font-semibold py-3"
        >
          LOGIN
        </button>

        <p className="mt-6 text-sm text-center">
          Esqueceu sua senha?{' '}
          <a className="font-semibold text-primary cursor-pointer">
            Clique aqui!
          </a>
        </p>
      </S.FormSection>

      <div className="mt-10 bg-zinc-200 border-t border-zinc-400 p-4 w-full flex justify-center">
        <p className="text-sm">
          Não possui uma conta?{' '}
          <a className="font-bold text-sm text-primary cursor-pointer">
            Cadastre-se!
          </a>
        </p>
      </div>
    </div>
  )
}
