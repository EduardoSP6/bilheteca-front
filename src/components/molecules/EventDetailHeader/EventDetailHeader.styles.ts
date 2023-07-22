import { w } from 'windstitch'

export const Container = w.header(
  `
  flex
  items-center
  justify-center
  w-screen h-20
  bg-primary
`,
  {}
)

export const ContentWrapper = w.div(
  `
  flex
  flex-1
  items-center
  justify-center
  bg-red
  max-w-7xl w-full
`,
  {}
)

export const LogoImg = w.img(
  `
  cursor-pointer
  h-10
`,
  {}
)
