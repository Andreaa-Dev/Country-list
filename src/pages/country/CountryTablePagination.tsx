import React, { useContext } from 'react'
import { TablePagination } from '@material-ui/core'

import { CountryType } from '../../misc/types'
import ThemeContext from '../../context/context'

// Tips: hover to handleChangePage to see the type.
type PropsType = {
  data: CountryType[]
  rowsPerPage: number
  page: number
  handleChangePage: (event: unknown, newPage: number) => void
  handleChangeRowsPerPage: (event: any) => void
}

function CountryTablePagination({
  data,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
}: PropsType) {
  const { theme } = useContext(ThemeContext)

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
        style={{
          backgroundColor: theme.foreground,
          color: theme.textColor,
        }}
      />
    </div>
  )
}

export default CountryTablePagination
