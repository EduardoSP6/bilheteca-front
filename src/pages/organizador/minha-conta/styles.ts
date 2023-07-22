import { w } from 'windstitch'

export const Container = w.div(
  `
  pt-20
  w-full
  flex
  justify-center
`,
  {}
)

export const ContentWrapper = w.main(
  `
  mt-16
  max-w-5xl w-full
  bg-white
  shadow-lg
  p-6
  border
  rounded
  mx-4
`,
  {}
)

export const Title = w.div(
  `
  text-3xl
  font-semibold
  text-primary
`,
  {}
)

export const FormWrapper = w.form(
  `
  mt-6
`,
  {}
)
