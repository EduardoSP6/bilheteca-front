import axios from 'axios'
import { GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
})

export const setupDefaultHeader = (token: string) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const setupAPIClient = (
  ctx: GetServerSidePropsContext | undefined = undefined
) => {
  const cookies = parseCookies(ctx)
  const token = cookies['bilheteca.token']

  api.defaults.headers.common['Authorization'] = `Bearer ${token}`

  return api
}
