import { CreatorDTO } from './CreatorDTO'

export interface CreatorEventDTO {
  uuid: string
  creator: CreatorDTO
  title: string
  description: string
  date: string
  place: string
  price: number
  price_type: string
  price_type_name: string
  participant_limit: number
  poster: string
  status: string
  status_name: string
  published_at: string
  type: string
}
