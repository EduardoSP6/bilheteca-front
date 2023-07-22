import { AxiosInstance } from 'axios'
import { api } from './api'
import { CreatorEventDTO } from '@/models/CreatorEventDTO'

interface FetchCreatorEventsResponse {
  data: CreatorEventDTO[]
}

export const useCreatorService = (client: AxiosInstance = api) => {
  const fetchCreatorEvents = async (filter?: string) => {
    const response = await client.get<FetchCreatorEventsResponse>(
      '/creator/events',
      {
        params: {
          ['filter[title]']: filter ?? ''
        }
      }
    )
    return response
  }

  return {
    fetchCreatorEvents
  }
}
