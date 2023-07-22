import * as S from './Tag.styles'

interface TagProps {
  name: string
  schema: 'green' | 'blue' | 'purple'
}

export const Tag = ({ name, schema }: TagProps) => {
  return (
    <S.Container schema={schema}>
      <S.Label schema={schema}>{name}</S.Label>
    </S.Container>
  )
}
