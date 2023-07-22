import w from 'windstitch'

export const Container = w.div(
  `
  w-full
  flex
  justify-center
  px-8
  flex-col
  h-full
  pb-20
`,
  {}
)

export const CreateEventHeader = w.div(
  `
  w-full
  mt-20
  bg-primary
  h-20
  drop-shadow
  px-8
  flex
  justify-center
  fixed
  z-50
`,
  {}
)

export const HeaderButtonsWrapper = w.div(
  `
  flex
  items-center
`,
  {}
)

export const EventHeaderContent = w.div(
  `
  flex
  justify-between
  items-center
  max-w-7xl
  w-full
`,
  {}
)

export const Form = w.form(
  `
  flex
  w-full
  flex-col
  items-center
  mt-[180px]
`,
  {}
)

export const SectionWrapper = w.section(
  `
  mt-8
  bg-white
  shadow-lg
  p-6
  border
  rounded
  w-full
  max-w-7xl
`,
  {}
)

export const SectionTitle = w.h3(
  `
  text-primary
  text-lg
  font-bold
`,
  {}
)

export const SectionDescription = w.p(
  `
  text-zinc-500
  mt-1
  ml-5
  text-sm
`,
  {}
)

export const FormWrapper = w.div(
  `
  mt-6
`,
  {}
)
