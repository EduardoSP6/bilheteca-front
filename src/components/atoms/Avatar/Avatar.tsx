import { useMemo } from 'react'

import * as S from './Avatar.styles'

const getNameInitials = (name: string) => {
  const initials = name.split(' ')

  const theInitials = `${initials[0].charAt(0)}${
    initials.length >= 2 ? initials[initials.length - 1].charAt(0) : ''
  }`

  return theInitials || ''
}

export type AvatarProps = {
  title: string
  avatarUrl?: string | ArrayBuffer | null
  onClick?: () => void
}

export const Avatar = ({ avatarUrl, title, onClick, ...rest }: AvatarProps) => {
  const initials = useMemo(
    () => (title ? getNameInitials(title).toUpperCase() : ''),
    [title]
  )

  return (
    <S.AvatarContainer {...rest} onClick={onClick}>
      {avatarUrl ? (
        <img src={avatarUrl as string} alt="avatar" />
      ) : (
        <span>{initials}</span>
      )}
    </S.AvatarContainer>
  )
}
