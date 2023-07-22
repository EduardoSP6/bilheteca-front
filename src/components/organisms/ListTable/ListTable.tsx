import { Key } from 'react'
import * as S from './ListTable.styles'

type RenderItemProps<T> = {
  item: T
  index: number
}

type TableProps<T> = {
  data: T[]
  keyExtractor: (data: T) => Key | null | undefined
  tableStructure: {
    columns: any[]
  }
  renderItem: (data: RenderItemProps<T>) => JSX.Element
  listHeaderComponent?: () => JSX.Element
  listFooterComponent?: () => JSX.Element
  lessPadding?: boolean
  canEdit?: boolean
  disableEllipsis?: boolean
  fitContent?: boolean
  pX?: [string, string] | []
}

export const ListTable: <T>(props: TableProps<T>) => React.ReactElement = ({
  tableStructure,
  renderItem,
  keyExtractor,
  data,
  listFooterComponent
}) => {
  const renderGridHeader = tableStructure.columns.map((eachColumn: any) => (
    <S.GridHeader key={eachColumn.toString()}>{eachColumn}</S.GridHeader>
  ))

  const renderGridRow = data.map((eachLine, index) => (
    <S.TableRow key={keyExtractor(eachLine)}>
      {renderItem && renderItem({ item: eachLine, index })}
    </S.TableRow>
  ))

  return (
    <S.Container>
      <S.TableWrapper>
        <S.TableHeader>{renderGridHeader}</S.TableHeader>

        {renderGridRow}
      </S.TableWrapper>

      {listFooterComponent && listFooterComponent()}
    </S.Container>
  )
}
