import { FiEdit } from 'react-icons/fi'
import { MdLocationOn, MdGroups2 } from 'react-icons/md'
import { TfiPanel } from 'react-icons/tfi'
import { IoTicketOutline } from 'react-icons/io5'
import { AiOutlineMail } from 'react-icons/ai'

import { OrganizerHeader } from '@/components/organisms/OrganizerHeader'

import * as S from './styles'
import { EventSidebar } from '@/components/organisms/EventSidebar'
import { Footer } from '@/components/organisms/Footer'
import { useRouter } from 'next/router'

export default function MyEventDetailPage() {
  const router = useRouter()
  const handleEditEvent = () => null

  const handleClickMyEvents = () => {
    router.push('/organizador/meus-eventos')
  }

  const sidebarItems = [
    {
      id: 'eventPanel',
      label: 'Painel do Evento',
      icon: <TfiPanel color="#fff" size={14} />,
      onClick: () => null
    },
    {
      id: 'tickets',
      label: 'Ingressos',
      icon: <IoTicketOutline color="#fff" />,
      onClick: () => null
    },
    {
      id: 'invites',
      label: 'Convites',
      icon: <AiOutlineMail color="#fff" />,
      onClick: () => null
    },
    {
      id: 'participants',
      label: 'Participantes',
      icon: <MdGroups2 color="#fff" size={20} />,
      onClick: () => null
    }
  ]

  return (
    <S.Container>
      <OrganizerHeader onMyEventsClick={handleClickMyEvents} />
      <EventSidebar items={sidebarItems} selected="eventPanel" />

      <S.ContentContainer>
        <S.MainContentWrapper>
          <S.EventHeader>
            <div className="flex items-center">
              <h2 className="text-xl font-bold mr-2">FESTIVAL DE ROCK</h2>
              <div onClick={handleEditEvent} className="cursor-pointer">
                <FiEdit color="#320D4C" />
              </div>
            </div>
            <div className="flex mt-2">
              <p className="mr-4 text-zinc-500">
                Sexta, 09/06/203, 20:30 - 24:30
              </p>
              <div className="flex items-center">
                <MdLocationOn color="rgb(113 113 122" />
                <p className="ml-2 text-zinc-500">Evento online</p>
              </div>
            </div>
          </S.EventHeader>

          <S.EventDetailsWrapper>
            <h3 className="text-zinc-400 font-semibold">DETALHES DO EVENTO</h3>
            <div className="flex flex-col mt-4">
              <span className="text-sm text-zinc-500">Status</span>
              <p>Encerrado</p>
            </div>

            <div className="flex flex-col mt-4">
              <span className="text-sm text-zinc-500">Visibilidade</span>
              <p>Público</p>
            </div>
          </S.EventDetailsWrapper>

          <S.EventDetailsWrapper>
            <h3 className="text-zinc-400 font-semibold">INGRESSOS</h3>
            <div className="flex flex-col mt-4">
              <span className="text-sm text-zinc-500">Status</span>
              <p>Encerrado</p>
            </div>

            <div className="flex flex-col mt-4">
              <span className="text-sm text-zinc-500">Visibilidade</span>
              <p>Público</p>
            </div>
          </S.EventDetailsWrapper>

          <S.EventDetailsWrapper>
            <h3 className="text-zinc-400 font-semibold">VENDAS</h3>
            <div className="flex flex-col mt-4">
              <span className="text-sm text-zinc-500">Status</span>
              <p>Encerrado</p>
            </div>

            <div className="flex flex-col mt-4">
              <span className="text-sm text-zinc-500">Visibilidade</span>
              <p>Público</p>
            </div>
          </S.EventDetailsWrapper>
        </S.MainContentWrapper>

        <Footer />
      </S.ContentContainer>
    </S.Container>
  )
}
