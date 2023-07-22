import * as S from './EventSidebar.styles'

interface EventSidebarProps {
  selected: string
  items: {
    id: string
    label: string
    icon: JSX.Element
    onClick: () => void
  }[]
}

export const EventSidebar = ({ items, selected }: EventSidebarProps) => {
  return (
    <S.Container>
      {items.map((eachItem) => (
        <S.EventSidebarItem
          key={eachItem.label}
          isselected={selected === eachItem.id}
        >
          {eachItem.icon}
          <p className="text-center text-white text-xs mt-2">
            {eachItem.label}
          </p>
        </S.EventSidebarItem>
      ))}
    </S.Container>
  )
}
