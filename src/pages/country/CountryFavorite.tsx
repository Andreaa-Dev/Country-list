import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { AppState, CountryType } from '../../misc/types'
import { Link } from 'react-router-dom'
import { Box } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
  },
  card: {
    maxWidth: 345,
    margin: 10,
  },
  customLink: {
    textDecoration: 'none',
    margin: 10,
    '&:visited': { color: 'white' },
  },
})

function CountryFavorite() {
  const classes = useStyles()

  const favoriteList = useSelector(
    (state: AppState) => state.favoriteState.favoriteList
  )

  const countryList = useSelector(
    (state: AppState) => state.countryState.country
  )
  const filterResult = countryList.filter((item: CountryType) =>
    favoriteList.includes(item.name)
  )

  console.log(filterResult, 'e')

  const result = filterResult.map((country) => {
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={country.flag}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {country.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {country.region}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  })

  return (
    <div>
      <Box className={classes.root}>{result}</Box>
      <Button size="small" color="primary" variant="contained">
        <Link to="/country" className={classes.customLink}>
          Back
        </Link>
      </Button>
    </div>
  )
}

export default CountryFavorite
