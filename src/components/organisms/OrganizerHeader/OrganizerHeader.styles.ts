import { w } from 'windstitch'

export const Container = w.header(
  `
    fixed
    top-0
    left-0
    w-screen
    h-20 flex
    items-center
    px-6
    justify-between
    shadow-lg
    z-10
    bg-white
`,
  {}
)

export const ImageWrapper = w.div(
  `
  absolute
  left-6
  flex
  items-center
`,
  {}
)

export const MainNavigation = w.div(
  `
  flex
  items-center
  gap-6
  flex-1
  justify-center
`,
  {}
)

export const NavigationItem = w.a(
  `
  text-sm
  text-primary
  cursor-pointer
  hover:text-primary/70
`,
  {}
)

export const OrganizerText = w.a(
  `
  text-sm
  ml-4
  border-l
  pl-4
  border-zinc-500
`,
  {}
)
