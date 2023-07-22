import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useRouter } from 'next/router'

import { withSSRAuth } from '@/utils/withSSRAuth'
import { OrganizerHeader } from '@/components/organisms/OrganizerHeader'
import { InputField } from '@/components/molecules/InputField'
import * as S from './styles'
import { Footer } from '@/components/organisms/Footer'
import { RichTextEditor } from '@/components/organisms/RichTextEditor/RichTextEditor'
import { DropzoneUpload } from '@/components/organisms/DropzoneUpload'

export type CreateEventFormData = {
  name: string
  address: string
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Este campo é obrigatório'),
  address: Yup.string().required('Este campo é obrigatório')
})

export default function CreateEventPage() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateEventFormData>({
    resolver: yupResolver(validationSchema),
    reValidateMode: 'onBlur'
  })

  const handleMyEventsClick = () => {
    router.push('/organizador/meus-eventos')
  }

  return (
    <>
      <OrganizerHeader onMyEventsClick={handleMyEventsClick} />

      <S.CreateEventHeader>
        <S.EventHeaderContent>
          <h2 className="text-xl text-white">
            Criar <b>Evento Presencial</b>
          </h2>
          <S.HeaderButtonsWrapper>
            <button className="rounded-xl bg-white text-primary font-semibold text-sm p-2 mr-4">
              PUBLICAR EVENTO
            </button>
            <button className="bg-transparent text-white font-semibold text-sm p-2">
              SALVAR RASCUNHO
            </button>
          </S.HeaderButtonsWrapper>
        </S.EventHeaderContent>
      </S.CreateEventHeader>

      <S.Container>
        <S.Form>
          <S.SectionWrapper>
            <S.SectionTitle>1. Onde o seu evento vai acontecer?</S.SectionTitle>

            <S.FormWrapper>
              <InputField
                {...register('name')}
                placeholder="Nome do local"
                error={errors.name?.message}
              />

              <InputField
                {...register('address')}
                placeholder="Endreço"
                error={errors.address?.message}
              />
            </S.FormWrapper>
          </S.SectionWrapper>

          <S.SectionWrapper>
            <S.SectionTitle>2. Informações básicas</S.SectionTitle>
            <S.SectionDescription>
              Adicione as principais informações do evento.
            </S.SectionDescription>

            <S.FormWrapper>
              <InputField
                {...register('name')}
                placeholder="Digite o nome do evento"
                error={errors.name?.message}
              />

              <p className="text-zinc-600 text-sm font-semibold mt-6">{`Imagem de divulgação (opcional)`}</p>

              <DropzoneUpload />
            </S.FormWrapper>
          </S.SectionWrapper>

          <S.SectionWrapper>
            <S.SectionTitle>3. Descrição do evento</S.SectionTitle>
            <S.SectionDescription className="mb-4">
              Conte todos os detalhes do seu evento, como a programação e os
              diferenciais da sua produção!
            </S.SectionDescription>

            <RichTextEditor />
          </S.SectionWrapper>

          <S.SectionWrapper>
            <h3>3. Data e horário</h3>
            <p>Informe aos participantes quando seu evento vai acontecer.</p>
          </S.SectionWrapper>

          <S.SectionWrapper>
            <h3>4. Ingressos</h3>
          </S.SectionWrapper>

          <S.SectionWrapper>
            <h3>4. Ingressos</h3>
          </S.SectionWrapper>
        </S.Form>
      </S.Container>
      <Footer />
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const lala = await Promise.resolve()

  console.log(ctx)

  return {
    props: {}
  }
})
