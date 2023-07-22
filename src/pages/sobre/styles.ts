import { w } from 'windstitch'

export const Header = w.header(``, {})

export const ComparisonTableSection = w.section(
  `
  flex
  flex-col
  items-center
  w-full
  bg-zinc-100
  py-20
  px-15
`,
  {}
)

export const ComparisonCardsWrapper = w.div(
  `
  flex
  max-w-5xl w-full
  h-auto
  gap-4
`,
  {}
)

export const StatisticsSession = w.section(
  `
  flex
  flex-col
  items-center
  w-full
  bg-zinc-0
  py-20
  px-15
`,
  {}
)

export const StatisticsList = w.div(
  `
  grid
  w-[50%]
  grid-cols-2
`,
  {}
)

export const StatisticsWrapper = w.div(
  `
  flex
  flex-col
  items-center
`,
  {}
)

export const StatisticsNumbersWrapper = w.div(
  `
  flex
  flex-col
  items-center
  justify-center
`,
  {}
)

export const StatisticsButton = w.button(
  `
  bg-primary
  text-white
  rounded-3xl
  font-bold
  px-8
  py-3
  mt-[100px]
`,
  {}
)

export const HeaderSection = w.section(
  `
  relative
  w-full
  h-[100vh]
  flex
  flex-col
  items-center
  justify-center
  shadow
`,
  {}
)

export const PosterWrapper = w.div(
  `
  absolute
  top-0
  left-0
  right-0
  h-[100vh]
  -z-0
`,
  {}
)

export const Poster = w.img(
  `
  w-full
  h-full
`,
  {}
)
