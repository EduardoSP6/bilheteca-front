import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { AiOutlineEye } from 'react-icons/ai'

import { withSSRAuth } from '@/utils/withSSRAuth'

import * as S from './styles'
import { OrganizerHeader } from '@/components/organisms/OrganizerHeader'
import { ListTable } from '@/components/organisms/ListTable'
import { useCreatorService } from '@/services/CreatorService'
import { setupAPIClient } from '@/services/api'
import { CreatorEventDTO } from '@/models/CreatorEventDTO'
import { Footer } from '@/components/organisms/Footer'
import { useRouter } from 'next/router'

interface MyEventsPageProps {
  data: CreatorEventDTO[]
}

type RenderItemProps = {
  item: CreatorEventDTO
  index: number
}

dayjs.extend(utc)

export default function MyEventsPage({ data }: MyEventsPageProps) {
  const router = useRouter()

  const handleCreateEventClick = () => {
    router.push('/organizador/criar-evento')
  }

  const handleManageEventClick = (event: CreatorEventDTO) => {
    router.push(`/organizador/meus-eventos/${event.uuid}`)
  }

  const renderTableItem = ({ item }: RenderItemProps) => {
    return (
      <>
        <span>{item.status_name}</span>
        <span>{item.title}</span>
        <span>{dayjs.utc(item.date).format('DD/MM/YYYY')}</span>
        <span>{item.place}</span>
        <span>{item.participant_limit}</span>
        <button
          onClick={() => handleManageEventClick(item)}
          className="w-full rounded-xl border border-primary text-primary font-semibold py-1 text-sm"
        >
          GERENCIAR
        </button>
        <span>
          <AiOutlineEye size={24} />
        </span>
      </>
    )
  }

  return (
    <>
      <S.Container>
        <OrganizerHeader onCreateEventClick={handleCreateEventClick} />

        <S.ContentWrapper>
          {/* FILTERS */}

          <S.PageTitle>Meus eventos</S.PageTitle>

          <ListTable<CreatorEventDTO>
            tableStructure={{
              columns: [
                'STATUS',
                'EVENTO',
                'QUANDO',
                'ONDE',
                'INGRESSOS',
                '',
                ''
              ]
            }}
            data={data}
            renderItem={renderTableItem}
            keyExtractor={(event) => event.uuid}
          />
        </S.ContentWrapper>
      </S.Container>

      <Footer />
    </>
  )
}

export const getServerSideProps = withSSRAuth<MyEventsPageProps>(
  async (ctx) => {
    const apiClient = setupAPIClient(ctx)
    const { fetchCreatorEvents } = useCreatorService(apiClient)

    try {
      const response = await fetchCreatorEvents()

      return {
        props: {
          data: response.data.data
        }
      }
    } catch (err) {
      console.log(err)
    }

    return {
      props: {
        data: []
      }
    }
  }
)
