import { w } from 'windstitch'

export const Container = w.div('relative w-full mb-4', {})

export const InputWrapper = w.div('flex flex-col rel', {})

export const Input = w.input('border w-full p-3 rounded', {
  variants: {
    isfocused: (yes: boolean) => (yes ? 'outline-primary' : ''),
    iserrored: (yes: boolean) => (yes ? 'border-red-500' : '')
  },
  defaultVariants: {
    iserrored: false,
    isfocused: false
  }
})

export const ErrorMessage = w.span(' text-red-500 text-xs', {})
