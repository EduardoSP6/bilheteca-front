import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useRouter } from 'next/router'

import { withSSRAuth } from '@/utils/withSSRAuth'
import { OrganizerHeader } from '@/components/organisms/OrganizerHeader'
import { InputField } from '@/components/molecules/InputField'
import * as S from './styles'
import { Footer } from '@/components/organisms/Footer'
import { useProfileService } from '@/services/ProfileService'
import { setupAPIClient } from '@/services/api'
import { CreatorDTO } from '@/models/CreatorDTO'
import { useAuth } from '@/contexts/AuthContext'

export type MyProfileFormData = {
  name: string
  email: string
  nickname: string
  cellphone: string | undefined
  whatsapp: string | undefined
  facebook: string | undefined
  instagram: string | undefined
  website: string | undefined
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Este campo é obrigatório'),
  email: Yup.string().required('Este campo é obrigatório'),
  nickname: Yup.string().required('Este campo é obrigatório'),
  cellphone: Yup.string().optional(),
  whatsapp: Yup.string().optional(),
  facebook: Yup.string().optional(),
  instagram: Yup.string().optional(),
  website: Yup.string().optional()
})

interface MyProfilePageProps {
  data: CreatorDTO | null
}

export default function MyProfilePage({ data }: MyProfilePageProps) {
  const { user, updateUser } = useAuth()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<MyProfileFormData>({
    resolver: yupResolver(validationSchema),
    reValidateMode: 'onBlur',
    values: {
      name: user?.name ?? data?.name ?? '',
      email: user?.email ?? data?.email ?? '',
      nickname: user?.nick_name ?? data?.nick_name ?? '',
      cellphone: user?.cellphone ?? data?.cellphone ?? '',
      facebook: user?.facebook ?? data?.facebook ?? '',
      instagram: user?.instagram ?? data?.instagram ?? '',
      website: user?.website ?? data?.website ?? '',
      whatsapp: user?.whatsapp ?? data?.whatsapp ?? ''
    }
  })

  const handleMyEventsClick = () => {
    router.push('/organizador/meus-eventos')
  }

  const handleCreateEventClick = () => {
    router.push('/organizador/criar-evento')
  }

  const onSubmit = handleSubmit(async (params) => {
    try {
      await updateUser(params)
    } catch (err) {
      console.log(err)
    }
  })

  return (
    <>
      <S.Container>
        <OrganizerHeader
          onCreateEventClick={handleCreateEventClick}
          onMyEventsClick={handleMyEventsClick}
        />

        <S.ContentWrapper>
          <S.Title>Minha conta</S.Title>
          <S.FormWrapper onSubmit={onSubmit}>
            <InputField
              {...register('name')}
              placeholder="Nome completo"
              error={errors.name?.message}
            />

            <InputField
              {...register('email')}
              placeholder="E-mail"
              error={errors.email?.message}
            />

            <InputField
              {...register('nickname')}
              placeholder="Nome de usuário"
              error={errors.nickname?.message}
            />

            <InputField
              {...register('cellphone')}
              placeholder="Telefone"
              error={errors.cellphone?.message}
            />

            <InputField
              {...register('whatsapp')}
              placeholder="Whatsapp"
              error={errors.whatsapp?.message}
            />

            <InputField
              {...register('facebook')}
              placeholder="Facebook"
              error={errors.facebook?.message}
            />

            <InputField
              {...register('instagram')}
              placeholder="Instagram"
              error={errors.instagram?.message}
            />

            <InputField
              {...register('website')}
              placeholder="Website"
              error={errors.instagram?.message}
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-primary text-white font-semibold py-3 mt-4"
            >
              ATUALIZAR
            </button>
          </S.FormWrapper>
        </S.ContentWrapper>
      </S.Container>
      <Footer />
    </>
  )
}

export const getServerSideProps = withSSRAuth<MyProfilePageProps>(
  async (ctx) => {
    const apiClient = setupAPIClient(ctx)
    const { getMe } = useProfileService(apiClient)

    try {
      const response = await getMe()

      return {
        props: {
          data: response.data
        }
      }
    } catch (err) {
      return {
        props: { data: null }
      }
    }
  }
)
