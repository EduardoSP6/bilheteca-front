import { w } from 'windstitch'

export const Container = w.div(
  `
  flex items-center
  px-2
  py-3
  border-b
  border-zinc-300
`,
  {}
)

export const ContentWrapper = w.div(
  `
  flex-1
`,
  {}
)

export const QuantityWrapper = w.div(
  `
  flex
  items-center
  gap-2
  ml-4
`,
  {}
)
