import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { destroyCookie, parseCookies } from 'nookies'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withSSRAuth<T extends { [key: string]: any }>(
  fn: GetServerSideProps<T>
) {
  return async (ctx: GetServerSidePropsContext) => {
    const cookies = parseCookies(ctx)
    const token = cookies['bilheteca.token']

    if (!token) {
      return {
        redirect: {
          destination: '/organizador-login',
          permanent: false
        }
      }
    }

    try {
      return await fn(ctx)
    } catch (err) {
      destroyCookie(ctx, 'bilheteca.token')

      return {
        redirect: {
          destination: '/organizador-login',
          permanent: false
        }
      }
    }
  }
}
