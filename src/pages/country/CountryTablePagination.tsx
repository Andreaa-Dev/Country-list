import React from 'react'
import { TablePagination } from '@material-ui/core'
import { CountryType } from '../../misc/types'

// Tips: hover to handleChangePage to see the type.
type PropsType = {
  data: CountryType[]
  rowsPerPage: number
  page: number
  handleChangePage: (newPage: any) => void
  handleChangeRowsPerPage: (event: any) => void
}

function CountryTablePagination({
  data,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
}: PropsType) {
  return (
    <div>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  )
}

export default CountryTablePagination
