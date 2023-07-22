import { ReactNode, cloneElement } from 'react'
import { ModalProvider } from './ModalProvider'
import { AuthProvider } from './AuthContext'

interface AppProviderProps {
  children: ReactNode
}

const contexts = [
  <ModalProvider key="modal-provider" />,
  <AuthProvider key="auth-provider" />
]

export const AppProvider = ({
  children: app
}: AppProviderProps): JSX.Element => (
  <>
    {contexts.reduce(
      (children, parent) => cloneElement(parent, { children }),
      app
    )}
  </>
)
