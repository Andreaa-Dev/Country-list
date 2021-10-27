import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import ThemeContext from '../../context/context'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { CountryType } from '../../misc/types'

type PropType = {
  row: CountryType
}

function MoreInformation({ row }: PropType) {
  const { theme } = useContext(ThemeContext)

  return (
    <div>
      <Link to={`/country/${row.name}`}>
        <ArrowForwardIosIcon
          style={{
            color: theme.buttonColor,
            // color: theme.buttonText,
          }}
        />
      </Link>
    </div>
  )
}

export default MoreInformation
