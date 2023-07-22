import { EventDTO } from '@/models/EventDTO'
import { EventCard } from '../molecules/EventCard'

interface EventsListProps {
  data: EventDTO[]
  onClick: (eventId: string) => void
}

export const EventsList = ({ data, onClick }: EventsListProps) => {
  return (
    <div className="grid grid-cols-5 gap-6">
      {data?.map((eachEvent) => (
        <EventCard data={eachEvent} key={eachEvent.uuid} onClick={onClick} />
      ))}
    </div>
  )
}
