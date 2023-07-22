import { AxiosInstance } from 'axios'
import { api } from './api'
import { CreatorDTO } from '@/models/CreatorDTO'
import { MyProfileFormData } from '@/pages/organizador/minha-conta'

type GetMeResponse = CreatorDTO

export const useProfileService = (client: AxiosInstance = api) => {
  const getMe = async () => {
    const response = await client.get<GetMeResponse>('/profile')
    return response
  }

  const updateProfile = async (uuid: string, params: MyProfileFormData) => {
    const response = await client.put<GetMeResponse>(`/profile/${uuid}`, params)
    return response
  }

  return {
    getMe,
    updateProfile
  }
}
