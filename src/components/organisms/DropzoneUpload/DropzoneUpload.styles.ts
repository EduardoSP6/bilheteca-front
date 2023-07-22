import w from 'windstitch'

export const Container = w.div(
  `
  w-full
  flex
  mt-2
  items-center
`,
  {}
)

export const Dropzone = w.div(
  `
  w-[400px]
  h-[200px]
  mr-10
  border-dotted
  border
  border-primary
  bg-zinc-100
  flex
  items-center
  justify-center
  flex-col
  cursor-pointer
`,
  {}
)

export const Instructions = w.div(
  `
  flex-1
  text-zinc-700
`,
  {}
)
