import { w } from 'windstitch'

export const Container = w.aside(
  `
  w-[340px]
  shadow-lg
  rounded-lg
  overflow-hidden
  bg-white
`,
  {}
)

export const Header = w.div(
  `
  bg-primary
  flex
  items-center
  justify-between
  p-3
`,
  {}
)

export const TicketListContainer = w.div(
  `
  overflow-y-auto
  max-h-[500px]
`,
  {}
)

export const Footer = w.div(
  `
  px-3
  pt-4
  pb-6
`,
  {}
)

export const Button = w.button(
  `
  w-full
  border rounded-lg 
  px-4 py-2
  bg-zinc-300
  text-zinc-500
  `,
  {}
)
