import w from 'windstitch'

export const Container = w.div(``, {})

export const TableWrapper = w.div(
  `
  flex
  flex-col
  overflow-x-auto
`,
  {}
)

export const TableHeader = w.div(
  `
  inline-grid
  w-full
  min-w-[800px]
  gap-4
  grid-cols-[0.5fr_1.5fr_0.5fr_1fr_0.5fr_100px_50px]
  bg-zinc-100
  p-4
`,
  {}
)

export const TableRow = w.div(
  `
  inline-grid
  w-full
  min-w-[800px]
  gap-4
  border-b
  border-zinc-300
  items-center
  grid-cols-[0.5fr_1.5fr_0.5fr_1fr_0.5fr_100px_50px]
  p-4
`,
  {}
)

export const GridHeader = w.div(``, {})
