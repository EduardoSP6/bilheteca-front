import { useRouter } from 'next/router'
import { GetServerSidePropsContext } from 'next'
import { useMarketplaceService } from '@/services/MarketplaceService'
import { MdOutlineCalendarMonth } from 'react-icons/md'

import * as S from './styles'
import { EventDetailHeader } from '@/components/molecules/EventDetailHeader'
import { EventDTO } from '@/models/EventDTO'
import { Footer } from '@/components/organisms/Footer'
import { TicketGrid } from '@/components/organisms/TicketGrid'

interface EventPageProps {
  data: EventDTO
  error: string
}

export default function EventPage({ data }: EventPageProps) {
  const router = useRouter()

  return (
    <S.Container>
      <EventDetailHeader handleNavigateHome={() => router.push('/')} />

      <S.PosterWrapper>
        <S.BackgroundCover>
          <S.BlurView />
        </S.BackgroundCover>

        <div className="w-full h-full relative flex justify-center">
          <S.Poster src="https://images.sympla.com.br/648a1ac601b05-lg.png" />
        </div>
      </S.PosterWrapper>

      <div className="w-screen mt-12 flex justify-center px-6">
        <S.ContentContainer>
          <h2 className="text-3xl font-bold">{data?.title}</h2>
          <div className="flex items-center gap-2 mt-4">
            <MdOutlineCalendarMonth color="#ccc" />
            <p>{'12 out - 2023 • 10:00 > 12 out - 2023 • 23:30'}</p>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <MdOutlineCalendarMonth color="#ccc" />
            <p>{data.place}</p>
          </div>
        </S.ContentContainer>
      </div>

      <div className="w-screen mt-8 flex justify-center px-6 pb-16 bg-zinc-100">
        <S.ContentContainer className="flex">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mt-8">Descrição do Evento</h2>

            <p className="text-md mt-6 text-zinc-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <p className="text-md mt-6 text-zinc-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>

          <div className="ml-20">
            <TicketGrid />
          </div>
        </S.ContentContainer>
      </div>

      <Footer />
    </S.Container>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { eventId } = ctx.query
  const { fetchEventDetail } = useMarketplaceService

  try {
    const response = await fetchEventDetail(eventId as string)

    return {
      props: {
        data: response.data,
        error: null
      }
    }
  } catch (error) {
    console.log(error)
    return {
      props: {
        data: [],
        error: null
      }
    }
  }
}
