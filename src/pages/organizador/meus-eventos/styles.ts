import { w } from 'windstitch'

export const Container = w.div(
  `
  pt-20
  w-full
  flex
  justify-center
  px-8
`,
  {}
)

export const ContentWrapper = w.main(
  `
  mt-16
  w-full
  bg-white
  shadow-lg
  p-6
  border
  rounded
  mx-4
`,
  {}
)

export const PageTitle = w.h2(
  `
  text-2xl
  mb-6
  mt-2
`,
  {}
)
