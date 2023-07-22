import {
  SignInModal,
  SignInModalFormData
} from '@/components/organisms/SignInModal'
import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'
import {
  SignUpModal,
  SignUpModalFormData
} from '@/components/organisms/SignUpModal'
import { useModal } from '@/contexts/ModalProvider'
import { EventDTO } from '@/models/EventDTO'
import { useAuthService } from '@/services/AuthService'
import { useMarketplaceService } from '@/services/MarketplaceService'
import { useAuth } from '@/contexts/AuthContext'
import { GetServerSidePropsContext } from 'next'
import { EventsList } from '@/components/organisms/EventsList'
import { useRouter } from 'next/router'

interface HomeProps {
  events: EventDTO[]
  searchTerm: string
}

export default function SearchEventPage({ events, searchTerm }: HomeProps) {
  const { dispatch } = useModal()
  const { register } = useAuthService
  const { signIn } = useAuth()
  const router = useRouter()

  const navigateToEventDetail = (eventId: string) => {
    router.push(`/evento/${eventId}`)
  }

  const handleSignUp = async ({
    email,
    name,
    password,
    confirmPassword,
    phone,
    nickname
  }: SignUpModalFormData) => {
    try {
      const response = await register({
        email,
        name,
        password,
        cellphone: phone,
        nickname,
        password_confirmation: confirmPassword
      })

      if (response.data) {
        await signIn({ credencial: email, password })
      }

      dispatch({
        action: 'CLOSE_MODAL'
      })
    } catch (err) {
      console.log(err)
    }
  }

  const handleSignIn = async ({
    credencial,
    password
  }: SignInModalFormData) => {
    try {
      signIn({ credencial, password })

      dispatch({
        action: 'CLOSE_MODAL'
      })
    } catch (err) {
      console.log(err)
    }
  }

  const handleSignUpClick = () => {
    dispatch({
      action: 'OPEN_MODAL',
      component: <SignUpModal handleSignUp={handleSignUp} />
    })
  }

  const handleSignInClick = () => {
    dispatch({
      action: 'OPEN_MODAL',
      component: <SignInModal handleSignIn={handleSignIn} />
    })
  }

  return (
    <div className="flex flex-col flex-1 min-h-screen pt-20 overflow-x-hidden">
      <Header
        onSignUpClick={handleSignUpClick}
        onSignInClick={handleSignInClick}
        initialSearchTerm={searchTerm}
      />

      <main className="w-screen mt-12 flex justify-center px-6">
        <div className="max-w-7xl w-full">
          <h2 className="text-2xl font-medium mb-10">
            Você está buscando por <b>{`"${searchTerm}"`}</b>
          </h2>

          <EventsList onClick={navigateToEventDetail} data={events} />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { fetchEvents } = useMarketplaceService
  const { search } = ctx.query

  if (!search || typeof search !== 'string') {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  try {
    const events = await fetchEvents(search as string)

    return {
      props: {
        events: events?.data?.data ?? [],
        searchTerm: search
      }
    }
  } catch (err) {
    return {
      props: {
        events: [],
        weekEvents: []
      }
    }
  }
}
