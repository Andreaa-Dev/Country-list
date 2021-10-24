import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { useDispatch, useSelector } from 'react-redux'
import { AppState, CountryType } from '../../misc/types'
import { addFavorite, removeFavorite } from '../../redux/actions/favorite'

import { makeStyles } from '@material-ui/styles'

type PropType = {
  row: CountryType
}

function Favorite({ row }: PropType) {
  const dispatch = useDispatch()

  const favoriteArray = useSelector(
    (state: AppState) => state.favoriteState.favoriteList
  )

  const itemExist = favoriteArray.some((item) => {
    return item === row.name
  })
  const onClickHandler = () => {
    if (itemExist) {
      dispatch(removeFavorite(row.name))
    } else {
      dispatch(addFavorite(row.name))
    }
  }

  let color: 'primary' | 'secondary' = 'primary'

  if (itemExist) {
    color = 'secondary'
  }
  const useStyles = makeStyles({
    icon: {
      color: color,
    },
  })
  const classes = useStyles()

  return (
    <FavoriteIcon
      className={classes.icon}
      id="favIcon"
      onClick={onClickHandler}
      color={color}
    />
  )
}

export default Favorite
