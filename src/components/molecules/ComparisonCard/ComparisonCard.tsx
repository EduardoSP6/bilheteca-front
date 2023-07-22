import { Tag } from '@/components/atoms/Tag'
import * as S from './ComparisonCard.styles'

interface ComparisonCardProps {
  schema: 'green' | 'blue' | 'purple'
  title: string
  label?: string
  description: string
  buttonLabel: string
  bullets: {
    presential: string[]
    digital: string[]
  }
  services: string[]
}

export const ComparisonCard = ({
  schema,
  title,
  label,
  description,
  buttonLabel,
  bullets,
  services
}: ComparisonCardProps) => {
  return (
    <S.Container>
      <Tag name="Criações gratuitas" schema={schema} />
      <S.Title>{title}</S.Title>
      <S.Label>{label ?? ''}</S.Label>
      <S.Description ispaidcard={!!label}>{description}</S.Description>

      <S.Button>{buttonLabel}</S.Button>

      <S.ListWrapper>
        <S.ListTitle>Presencial</S.ListTitle>
        <S.ListContainer>
          {bullets.presential.map((eachBullet) => (
            <S.ListItem key={eachBullet}>{eachBullet}</S.ListItem>
          ))}
        </S.ListContainer>

        <S.ListTitle className="mt-2">Digital</S.ListTitle>
        <S.ListContainer>
          {bullets.digital.map((eachBullet) => (
            <S.ListItem key={eachBullet}>{eachBullet}</S.ListItem>
          ))}
        </S.ListContainer>
      </S.ListWrapper>

      <S.ListWrapper>
        <S.ListTitle>
          Serviços{' '}
          <span className="font-normal text-zinc-500">
            {title === 'Customizado' ? 'sob negociação' : 'inclusos'}
          </span>
        </S.ListTitle>
        <S.ListContainer>
          {services.map((eachBullet) => (
            <S.ListItem key={eachBullet}>{eachBullet}</S.ListItem>
          ))}
        </S.ListContainer>
      </S.ListWrapper>
    </S.Container>
  )
}
