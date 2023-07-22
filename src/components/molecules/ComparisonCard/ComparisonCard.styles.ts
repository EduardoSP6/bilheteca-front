import { w } from 'windstitch'

export const Container = w.div(
  `
  block
  w-full
  min-w-[300px]
  max-w-[460px]
  px-10
  py-14
  rounded-2xl
  bg-white
  shadow-lg
`,
  {}
)

export const Title = w.div(
  `
    text-2xl
    mt-8
    font-bold
`,
  {}
)

export const Label = w.p(
  `
    text-xs
    mt-1
    text-zinc-400
`,
  {}
)

export const Description = w.p(
  `
    text-xs
    italic
    text-zinc-600
`,
  {
    variants: {
      ispaidcard: (yes: boolean) => (yes ? 'mt-1' : 'mt-6')
    },
    defaultVariants: {
      ispaidcard: false
    }
  }
)

export const Button = w.button(
  `
    bg-primary
    py-2
    px-4
    rounded-2xl
    mt-4
    text-white
    font-semibold
`,
  {}
)

export const ListWrapper = w.div(
  `
   border-t
   border-zinc-300
   w-full
   pt-6
   mt-5
`,
  {}
)

export const ListTitle = w.p(
  `
   text-xs
   font-bold
`,
  {}
)

export const ListContainer = w.ul(
  `
   marker:text-center
   list-disc
   mt-2
`,
  {}
)

export const ListItem = w.li(
  `
   text-xs
   text-zinc-500
   mt-1
`,
  {}
)
