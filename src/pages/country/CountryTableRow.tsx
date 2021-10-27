import React, { useContext } from 'react'
import { TableRow } from '@material-ui/core'
import TableCell from '@material-ui/core/TableCell'
import { makeStyles } from '@material-ui/core/styles'
import ThemeContext from '../../context/context'

import { CountryType } from '../../misc/types'
import Favorite from './Favorite'
import MoreInformation from './MoreInformation'
import { Order } from './CountryTable'

const useStyles = makeStyles({
  flag: {
    width: '100px',
    height: 'auto',
    borderRadius: '5%',
  },
})

type PropType = {
  data: CountryType[]
  rowsPerPage: number
  page: number
  getComparator: <Key extends string | number | symbol>(
    order: Order,
    orderBy: Key
  ) => (
    a: { [key in Key]: string | number | any[] },
    b: { [key in Key]: string | number | any[] }
  ) => number
  isSelected: (name: string) => boolean
  stableSort: <T>(
    array: readonly T[],
    comparator: (a: T, b: T) => number
  ) => T[]
  order: Order
  orderBy: keyof CountryType
}

function CountryTableRow({
  data,
  rowsPerPage,
  page,
  getComparator,
  isSelected,
  stableSort,
  order,
  orderBy,
}: PropType) {
  const classes = useStyles()
  const { theme } = useContext(ThemeContext)

  return (
    <>
      {stableSort<CountryType>(
        data,
        getComparator<keyof CountryType>(order, orderBy)
      )
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => {
          const isItemSelected = isSelected(row.name)
          // const labelId = `enhanced-table-checkbox-${index}`

          return (
            <TableRow
              hover
              role="checkbox"
              tabIndex={-1}
              aria-checked={isItemSelected}
              key={row.name}
            >
              <TableCell>
                <img className={classes.flag} src={row.flag} alt="error" />
              </TableCell>
              <TableCell
                style={{
                  color: theme.textColor,
                }}
              >
                {row.name}
              </TableCell>
              <TableCell
                style={{
                  color: theme.textColor,
                }}
              >
                {row.region}
              </TableCell>
              <TableCell
                style={{
                  color: theme.textColor,
                }}
              >
                {row.population}
              </TableCell>
              <TableCell
                style={{
                  color: theme.textColor,
                }}
              >
                {row.languages.map((item) => (
                  <li> {item.name}</li>
                ))}
              </TableCell>
              <TableCell>
                <Favorite row={row} />
              </TableCell>
              <TableCell>
                <MoreInformation row={row} />
              </TableCell>
            </TableRow>
          )
        })}
    </>
  )
}

export default CountryTableRow
