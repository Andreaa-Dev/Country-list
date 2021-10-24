import React from 'react'
import { TableRow } from '@material-ui/core'
import TableCell from '@material-ui/core/TableCell'
import { makeStyles } from '@material-ui/core/styles'

import { CountryType } from '../../misc/types'
import Favorite from './Favorite'
import MoreInformation from './MoreInformation'

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
}

function CountryTableRow({ data, rowsPerPage, page }: PropType) {
  const classes = useStyles()
  return (
    <>
      {data
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell>
                <img className={classes.flag} src={row.flag} alt="error" />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.population}</TableCell>{' '}
              <TableCell>
                {row.languages.map((item) => (
                  <li> {item.name}</li>
                ))}
              </TableCell>
              <TableCell>{row.region}</TableCell>
              <TableCell>
                <Favorite row={row} />
              </TableCell>
              <TableCell>
                <MoreInformation />
              </TableCell>
            </TableRow>
          )
        })}
    </>
  )
}

export default CountryTableRow
