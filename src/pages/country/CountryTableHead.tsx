import React from 'react'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { ColumnType, CountryType } from '../../misc/types'
import { Box, makeStyles, TableSortLabel } from '@material-ui/core'
import { visuallyHidden } from '@mui/utils'

import { Order } from './CountryTable'

const useStyles = makeStyles({
  title: {
    fontWeight: 'bold',
  },
})

type EnhancedTablePropsType = {
  numSelected: number
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof CountryType
  ) => void
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  order: Order
  orderBy: string
  rowCount: number
  columns: ColumnType[]
}

function CountryTableHead({
  columns,
  numSelected,
  onRequestSort,
  onSelectAllClick,
  order,
  orderBy,
  rowCount,
}: EnhancedTablePropsType) {
  const classes = useStyles()

  const createSortHandler =
    (property: keyof CountryType) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property)
    }
  return (
    <TableHead>
      <TableRow>
        {columns.map((column: ColumnType) => {
          const { sortable = true } = column
          return (
            <TableCell
              className={classes.title}
              key={column.id}
              sortDirection={orderBy === column.id ? order : false}
            >
              {sortable && (
                <TableSortLabel
                  active={orderBy === column.id}
                  direction={orderBy === column.id ? order : 'asc'}
                  onClick={createSortHandler(column.id as keyof CountryType)}
                >
                  {column.label}
                  {orderBy === column.id ? (
                    <Box component="span" style={visuallyHidden}>
                      {order === 'desc'
                        ? 'sorted descending'
                        : 'sorted ascending'}
                    </Box>
                  ) : null}
                </TableSortLabel>
              )}
            </TableCell>
          )
        })}
      </TableRow>
    </TableHead>
  )
}

export default CountryTableHead
