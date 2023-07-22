import w from 'windstitch'

export const Container = w.div(
  `
  w-full
  max-h-screen
  flex
`,
  {}
)

export const ContentContainer = w.div(
  `
  overflow-y-auto
  pt-20
  flex-col
  w-full
  flex
  justify-between
  bg-zinc-50
`,
  {}
)

export const MainContentWrapper = w.main(
  `
  flex: 1
`,
  {}
)

export const EventHeader = w.div(
  `
  w-full
  p-6
  bg-white
`,
  {}
)

export const EventDetailsWrapper = w.div(
  `
  mt-4
  mx-6
  bg-white
  rounded-lg
  shadow
  p-4
`,
  {}
)
