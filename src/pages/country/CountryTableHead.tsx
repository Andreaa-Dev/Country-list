import React from 'react'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { ColumnType } from '../../misc/types'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  title: {
    fontWeight: 'bold',
  },
})

type PropType = {
  columns: ColumnType[]
}

function CountryTableHead({ columns }: PropType) {
  const classes = useStyles()
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell className={classes.title} key={column.id}>
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default CountryTableHead
