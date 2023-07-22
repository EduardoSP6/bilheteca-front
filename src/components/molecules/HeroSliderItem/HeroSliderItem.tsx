import { EventDTO } from '@/models/EventDTO'

import * as S from './HeroSliderItem.styles'

interface HeroSliderItemProps {
  data: EventDTO
  onClickMoreDetails: (eventId: string) => void
}

export const HeroSliderItem = ({
  data,
  onClickMoreDetails
}: HeroSliderItemProps) => {
  return (
    <S.Container>
      <S.CoverImg
        src={data.poster ?? 'https://images.sympla.com.br/62d81e4169758.jpg'}
      />

      <S.ContentWrapper>
        <div>
          {/* <p className="text-sm font-semibold">17 de novembro de 2023, 09:00</p> */}
          <p className="text-sm font-semibold">{data.date}</p>
          <h3 className="mt-6 font-bold text-xl">{data.title}</h3>
          <h3 className="mt-6  text-md">{data.description}</h3>
          <p className="mt-4 text-sm font-thin">{data.place}</p>
        </div>

        <button
          className="border-primary border rounded-lg px-4 py-2 self-start"
          onClick={() => onClickMoreDetails(data.uuid)}
        >
          VER DETALHES
        </button>
      </S.ContentWrapper>
    </S.Container>
  )
}
