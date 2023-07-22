import * as S from './EventDetailHeader.styles'

interface EventDetailHeaderProps {
  handleNavigateHome: () => void
}

export const EventDetailHeader = ({
  handleNavigateHome
}: EventDetailHeaderProps) => {
  return (
    <S.Container>
      <S.ContentWrapper>
        <S.LogoImg src="/images/white-logo.png" onClick={handleNavigateHome} />
      </S.ContentWrapper>
    </S.Container>
  )
}
