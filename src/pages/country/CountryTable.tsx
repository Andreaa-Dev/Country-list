import React, { useCallback, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import { makeStyles, TableBody } from '@material-ui/core'
import TableContainer from '@material-ui/core/TableContainer'

import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../redux/actions/country'
import { AppState } from '../../misc/types'
import { columns } from '../../misc/column'
import CountryTableHead from './CountryTableHead'
import CountryTableRow from './CountryTableRow'
import CountryTablePagination from './CountryTablePagination'
import SearchCountry from './SearchCountry'

const useStyles = makeStyles({
  margin: {
    marginTop: '30px',
  },
  searchField: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
})

function CountryTable() {
  const classes = useStyles()

  const data = useSelector((state: AppState) => {
    return state.countryState.country
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = useCallback((newPage: number) => {
    setPage(newPage)
  }, [])

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value)
      setPage(0)
    },
    []
  )

  return (
    <Paper className={classes.margin}>
      <SearchCountry />
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <CountryTableHead columns={columns} />
          <TableBody>
            <CountryTableRow
              data={data}
              rowsPerPage={rowsPerPage}
              page={page}
            />
          </TableBody>
        </Table>
        <CountryTablePagination
          data={data}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Paper>
  )
}

export default CountryTable
