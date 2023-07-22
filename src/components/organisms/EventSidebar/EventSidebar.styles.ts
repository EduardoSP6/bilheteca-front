import w from 'windstitch'

export const Container = w.aside(
  `
  bg-zinc-800
  pt-20
  flex
  flex-col
  h-screen
`,
  {}
)

export const EventSidebarItem = w.div(
  `
  flex
  cursor-pointer
  flex-col
  justify-center
  items-center
  border
  border-zinc-600/50
  py-5
`,
  {
    variants: {
      isselected: (yes: boolean) => (yes ? `bg-zinc-600` : '')
    }
  }
)
