import {
  SignInModal,
  SignInModalFormData
} from '@/components/organisms/SignInModal'
import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'
import { MarketplaceContainer } from '@/components/organisms/MarketplaceContainer'
import {
  SignUpModal,
  SignUpModalFormData
} from '@/components/organisms/SignUpModal'
import { useModal } from '@/contexts/ModalProvider'
import { EventDTO } from '@/models/EventDTO'
import { useAuthService } from '@/services/AuthService'
import { useMarketplaceService } from '@/services/MarketplaceService'
import { useAuth } from '@/contexts/AuthContext'

interface HomeProps {
  events: EventDTO[]
  weekEvents: EventDTO[]
}

export default function Home({ events, weekEvents }: HomeProps) {
  const { dispatch } = useModal()
  const { register } = useAuthService
  const { signIn } = useAuth()

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
      const response = signIn({ credencial, password })

      console.log(response)

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
      />
      <MarketplaceContainer events={events} weekEvents={weekEvents} />
      <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
  const { fetchEvents, fetchWeekEvents } = useMarketplaceService

  try {
    const [events, weekEvents] = await Promise.all([
      fetchEvents(),
      fetchWeekEvents()
    ])

    return {
      props: {
        events: events?.data?.data || [],
        weekEvents: weekEvents?.data || []
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
