import {
  InputHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
  useState
} from 'react'

import * as S from './InputField.styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  error?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error, onFocus, placeholder, value, onBlur, ...rest },
  parentRef
) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <S.Container>
      <S.InputWrapper>
        <S.Input
          ref={parentRef}
          type="text"
          name={name}
          placeholder={placeholder}
          iserrored={!!error}
          isfocused={isFocused}
          onFocus={(e: React.FocusEvent<HTMLInputElement, Element>) => {
            setIsFocused(true)
            onFocus && onFocus(e)
          }}
          onBlur={(e: React.FocusEvent<HTMLInputElement, Element>) => {
            setIsFocused(false)
            setTimeout(() => {
              if (!e.target.value) {
                setIsFocused(false)
              }
            }, 100)

            onBlur && onBlur(e)
          }}
          autoComplete="off"
          data-lpignore="true"
          value={value}
          {...rest}
        />
      </S.InputWrapper>
      {!!error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.Container>
  )
}

export const InputField = forwardRef(InputBase)
