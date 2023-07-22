import { useRouter } from 'next/router'

import { EventDTO } from '@/models/EventDTO'
import { EventsList } from './EventsList'
import { Slider } from './Slider'

interface MarketPlaceContainerProps {
  events: EventDTO[]
  weekEvents: EventDTO[]
}

export const MarketplaceContainer = ({
  events,
  weekEvents
}: MarketPlaceContainerProps) => {
  const router = useRouter()

  const navigateToEventDetail = (eventId: string) => {
    router.push(`/evento/${eventId}`)
  }

  return (
    <main className="w-screen mt-12 flex justify-center px-6">
      <div className="max-w-7xl w-full">
        <h2 className="text-2xl font-medium">Eventos da semana</h2>
        <Slider onClickMoreDetails={navigateToEventDetail} data={weekEvents} />

        <h2 className="text-2xl font-medium mt-14 mb-6">Festas e shows</h2>
        <EventsList onClick={navigateToEventDetail} data={events} />
      </div>
    </main>
  )
}
