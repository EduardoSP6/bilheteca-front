import { w } from 'windstitch'

export const Container = w.div(
  `flex flex-row h-[420px] relative rounded-lg overflow-hidden shadow-lg`,
  {}
)

export const CoverImg = w.img(
  `
  w-2/3
  object-cover
`,
  {}
)

export const ContentWrapper = w.div(
  `w-[500px] bg-zinc-100 px-6 pt-11 pb-6 flex flex-1 flex-col justify-between`,
  {}
)
