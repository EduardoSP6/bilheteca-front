import { w } from 'windstitch'

export const Container = w.div(` overflow-x-hidden`, {})

export const BackgroundCover = w.div(
  `
  w-screen
  h-[92%]
  bg-[url('https://images.sympla.com.br/648a1ac601b05-lg.png')]
  bg-no-repeat
  bg-cover
  absolute
  -z-10
`,
  {}
)

export const BlurView = w.div(
  `
  w-full
  h-full
  backdrop-blur-xl
`,
  {}
)

export const PosterWrapper = w.div(
  `
  w-full
  relative
  h-[75vh]
`,
  {}
)

export const Poster = w.img(
  `
  rounded-2xl
  max-w-7xl w-full
  h-[75vh]
  object-cover
  absolute
  -top-2
  z-50
  shadow-2xl
`,
  {}
)

export const ContentContainer = w.h2(`max-w-7xl w-full`, {})
