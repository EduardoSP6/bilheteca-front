import { EventDTO } from '@/models/EventDTO'

interface EventCardProps {
  data: EventDTO
  onClick: (eventId: string) => void
}

export const EventCard = ({ data, onClick }: EventCardProps) => {
  return (
    <div
      className="flex max-w-[260px] flex-col bg-white rounded-lg hover:shadow-md overflow-hidden cursor-pointer transition-shadow"
      onClick={() => onClick(data.uuid)}
    >
      <img
        width={260}
        height={140}
        src={data?.poster ?? ''}
        alt="Logo"
        className="object-cover flex flex-1"
      />

      <div className="px-4 pt-2 pb-4">
        {/* <p className="text-xs font-semibold">DOM, 20 JUL - 21:00 {data.date}</p> */}
        <p className="text-xs font-semibold">{data.date}</p>
        <p className="text-base font-semibold mt-2">{data.title}</p>
        <p className="text-sm mt-2">{data.description}</p>
        <p className="text-xs text-zinc-400 mt-2">{data.place}</p>
      </div>
    </div>
  )
}
