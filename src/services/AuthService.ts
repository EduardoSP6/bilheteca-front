import { api, setupDefaultHeader } from './api'

interface LoginResponseDTO {
  access_token: string
  token_type: string
  expires_in: number
}

interface RegisterResponseDTO {
  uuid: string
  name: string
  email: string
  nick_name: string
  avatar: null
  cellphone: null
  whatsapp: null
  facebook: null
  instagram: null
  website: null
  token: string
}

interface RegisterParams {
  name: string
  nickname: string
  email: string
  password: string
  cellphone: string
  password_confirmation: string
}

const login = async (email: string, password: string) => {
  const response = await api.post<LoginResponseDTO>('/auth/login', {
    email,
    password
  })

  setupDefaultHeader(response.data.access_token)

  return response
}

const register = async ({
  email,
  name,
  password,
  nickname,
  cellphone,
  password_confirmation
}: RegisterParams) => {
  const response = api.post<RegisterResponseDTO>('/auth/register', {
    email,
    name,
    password,
    nick_name: nickname,
    cellphone,
    password_confirmation
  })

  return response
}

const logout = async () => {
  const response = api.post<RegisterResponseDTO>('/auth/logout')

  return response
}

export const useAuthService = { login, register, logout }
