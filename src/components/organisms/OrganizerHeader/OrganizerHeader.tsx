import { useRouter } from 'next/router'
import Image from 'next/image'

import * as S from './OrganizerHeader.styles'

interface OrganizerHeaderProps {
  onMyEventsClick?: () => void
  onCreateEventClick?: () => void
}

export const OrganizerHeader = ({
  onMyEventsClick,
  onCreateEventClick
}: OrganizerHeaderProps) => {
  const router = useRouter()

  return (
    <S.Container>
      <S.ImageWrapper>
        <Image
          onClick={() => router.push('/')}
          width={140}
          height={50}
          className="cursor-pointer"
          src="/images/purple-logo.png"
          alt="Logo"
        />

        <S.OrganizerText>ÁREA DO PRODUTOR</S.OrganizerText>
      </S.ImageWrapper>

      <S.MainNavigation>
        {onMyEventsClick && (
          <S.NavigationItem onClick={onMyEventsClick}>
            MEUS EVENTOS
          </S.NavigationItem>
        )}

        {onCreateEventClick && (
          <S.NavigationItem onClick={onCreateEventClick}>
            CRIAR EVENTO
          </S.NavigationItem>
        )}
      </S.MainNavigation>
    </S.Container>
  )
}
