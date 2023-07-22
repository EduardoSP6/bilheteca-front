import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useCallback
} from 'react'

interface ModalContextData {
  component: JSX.Element | null
  isOpen: boolean
  dispatch: (action: ModalActionProps) => void
  canCloseModal: boolean
}

interface ModalProviderProps {
  children?: ReactNode
}

interface ModalActionProps {
  action: 'CLOSE_MODAL' | 'OPEN_MODAL'
  component?: JSX.Element
  canClose?: boolean
}

export const ModalContext = createContext({} as ModalContextData)

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [component, setComponent] = useState<JSX.Element | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [canCloseModal, setCanCloseModal] = useState(true)

  const dispatch = useCallback(
    ({ action, component, canClose = true }: ModalActionProps) => {
      setCanCloseModal(canClose)

      switch (action) {
        case 'CLOSE_MODAL':
          setIsOpen(false)
          setComponent(null)
          return

        case 'OPEN_MODAL':
          setIsOpen(true)
          setComponent(component || <></>)
          return

        default:
          setIsOpen(false)
          setComponent(null)
          return
      }
    },
    []
  )

  return (
    <ModalContext.Provider
      value={{ isOpen, component, dispatch, canCloseModal }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = (): ModalContextData => {
  const context = useContext(ModalContext)

  return context
}
