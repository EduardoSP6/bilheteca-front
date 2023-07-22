import { w } from 'windstitch'

export const Container = w.div(
  `
  h-6
  flex
  items-center
  px-3
  border
  bg-blue-500
  w-fit
  rounded-lg
  
`,
  {
    variants: {
      schema: {
        green: 'bg-green-500/10',
        blue: 'bg-blue-500/10',
        purple: 'bg-purple-500/10'
      }
    }
  }
)

export const Label = w.span(
  `
  font-medium text-sm`,
  {
    variants: {
      schema: {
        green: 'text-green-500',
        blue: 'text-blue-500',
        purple: 'text-purple-500'
      }
    }
  }
)
