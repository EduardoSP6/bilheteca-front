import { EventDTO } from '@/models/EventDTO'
import { api } from './api'

interface ListEventsResponse {
  data: EventDTO[]
}

const fetchEvents = async (filter?: string) => {
  const response = await api.get<ListEventsResponse>('/marketplace/events', {
    params: {
      ['filter[title]']: filter
    }
  })
  return response
}

const fetchWeekEvents = async () => {
  const response = await api.get<ListEventsResponse>('/marketplace/events/week')
  return response
}

const fetchEventDetail = async (eventUuid: string) => {
  const response = await api.get<ListEventsResponse>(
    `/marketplace/events/${eventUuid}`
  )
  return response
}

export const useMarketplaceService = {
  fetchEvents,
  fetchWeekEvents,
  fetchEventDetail
}
