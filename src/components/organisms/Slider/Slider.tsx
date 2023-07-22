import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

SwiperCore.use([Pagination])

import * as S from './Slider.styles'
import { HeroSliderItem } from '@/components/molecules/HeroSliderItem'
import { EventDTO } from '@/models/EventDTO'

interface SliderProps {
  data: EventDTO[]
  onClickMoreDetails: (eventId: string) => void
}

export const Slider = ({ data, onClickMoreDetails }: SliderProps) => {
  return (
    <S.Container>
      <Swiper
        pagination={{ clickable: true }}
        slidesPerView={1}
        style={{ borderRadius: 8 }}
        spaceBetween={24}
      >
        {data?.map((eachEvent) => (
          <SwiperSlide key={eachEvent.uuid} style={{ paddingBottom: 60 }}>
            <HeroSliderItem
              data={eachEvent}
              onClickMoreDetails={onClickMoreDetails}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  )
}
