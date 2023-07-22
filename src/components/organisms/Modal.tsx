import { useCallback, useEffect } from 'react'

import { useModal } from '@/contexts/ModalProvider'

export const Modal = () => {
  const { component, dispatch, isOpen, canCloseModal } = useModal()

  const handleCloseModal = useCallback(() => {
    dispatch({ action: 'CLOSE_MODAL' })
  }, [dispatch])

  const handleKeyUp = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          handleCloseModal()
          break

        default:
          break
      }
    },
    [handleCloseModal]
  )

  const handleClickPropagation = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation()
  }

  useEffect(() => {
    if (canCloseModal) {
      window.addEventListener('keyup', handleKeyUp)
      return () => window.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyUp, canCloseModal])

  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 z-20 bg-black/50"
          onClick={() => {
            if (canCloseModal) handleCloseModal()
          }}
        >
          <div
            onClick={handleClickPropagation}
            className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2"
          >
            {component}
          </div>
        </div>
      )}
    </>
  )
}
