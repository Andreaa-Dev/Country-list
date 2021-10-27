import React, { useCallback, useContext, useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import { makeStyles, TableBody } from '@material-ui/core'
import TableContainer from '@material-ui/core/TableContainer'
import ThemeContext from '../../context/context'

import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../redux/actions/country'
import { AppState, CountryType } from '../../misc/types'
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

// sort here
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

export type Order = 'asc' | 'desc'

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string | any[] },
  b: { [key in Key]: number | string | any[] }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) {
      return order
    }
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

function CountryTable() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const data = useSelector((state: AppState) => {
    return state.countryState.country
  })

  const searchResult = useSelector(
    (state: AppState) => state.countryState.search
  )

  let countryList = data
  if (searchResult) {
    countryList = searchResult
  }

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<keyof CountryType>('name')
  const [selected, setSelected] = useState<readonly string[]>([])

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage)
  }, [])

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value)
      setPage(0)
    },
    []
  )
  //sort

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = data.map((n) => n.name)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof CountryType
  ) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const isSelected = (name: string) => selected.indexOf(name) !== -1

  return (
    <Paper
      className={classes.margin}
      style={{
        backgroundColor: theme.foreground,
      }}
    >
      <SearchCountry />
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <CountryTableHead
            columns={columns}
            order={order}
            orderBy={orderBy}
            rowCount={data.length}
            numSelected={selected.length}
            onRequestSort={handleRequestSort}
            onSelectAllClick={handleSelectAllClick}
          />
          <TableBody>
            <CountryTableRow
              data={countryList}
              rowsPerPage={rowsPerPage}
              page={page}
              stableSort={stableSort}
              getComparator={getComparator}
              isSelected={isSelected}
              order={order}
              orderBy={orderBy}
            />
          </TableBody>
        </Table>
      </TableContainer>
      <CountryTablePagination
        data={countryList}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default CountryTable
