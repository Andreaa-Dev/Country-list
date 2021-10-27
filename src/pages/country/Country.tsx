import React, { useContext, useEffect } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { fetchEachCountryData } from '../../redux/actions'
import { AppState, ParamsType } from '../../misc/types'
import ThemeContext from '../../context/context'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 500,
      margin: 'auto',
      marginTop: 100,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    inlineText: {
      fontWeight: 'bold',
    },

    coatImg: {
      height: 150,
      width: 100,
      margin: 10,
    },
  })
)

export default function Country() {
  const { theme } = useContext(ThemeContext)
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const dispatch = useDispatch()
  const params = useParams<ParamsType>()

  const eachCountryData = useSelector((state: AppState) => {
    return state.countryState.eachCountry
  })

  const eachCountry = eachCountryData[0]

  useEffect(() => {
    dispatch(fetchEachCountryData(params.name))
  }, [params, dispatch])

  let countryStatus = ''
  if (eachCountry.independent === false) {
    countryStatus = 'not'
  }
  return (
    <Card
      className={classes.root}
      style={{
        backgroundColor: theme.foreground,
      }}
    >
      <CardHeader
        style={{
          color: theme.textColor,
        }}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {eachCountry.name.common.slice(0, 1)}
          </Avatar>
        }
        action={
          <IconButton
            aria-label="settings"
            style={{
              color: theme.textColor,
            }}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography
            style={{
              color: theme.textColor,
              fontSize: 16,
              fontWeight: 'bold',
            }}
          >
            {eachCountry.name.common.toUpperCase()}
          </Typography>
        }
        subheader={
          <Typography
            style={{
              color: theme.textColor,
              fontSize: 13,
            }}
          >
            {eachCountry.capital[0]}
          </Typography>
        }
      />
      <CardMedia
        className={classes.media}
        image={eachCountry.flags.svg}
        title="Country flag"
      />
      <CardContent>
        <Typography
          style={{
            color: theme.textColor,
          }}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          The country belongs to{' '}
          <span
            className={classes.inlineText}
            style={{
              color: theme.textHighlight,
            }}
          >
            {eachCountry.region}
          </span>{' '}
          region and{' '}
          <span
            className={classes.inlineText}
            style={{
              color: theme.textHighlight,
            }}
          >
            {eachCountry.subregion}
          </span>{' '}
          sub-region. Located at the{' '}
          <span
            className={classes.inlineText}
            style={{
              color: theme.textHighlight,
            }}
          >
            {eachCountry.latlng.slice(0, 1)}
          </span>{' '}
          °N and{' '}
          <span
            className={classes.inlineText}
            style={{
              color: theme.textHighlight,
            }}
          >
            {eachCountry.latlng.slice(1, 2)}
          </span>{' '}
          °W, this country has population of{' '}
          <span
            className={classes.inlineText}
            style={{
              color: theme.textHighlight,
            }}
          >
            {eachCountry.population}
          </span>{' '}
          and it has{' '}
          <span
            className={classes.inlineText}
            style={{
              color: theme.textHighlight,
            }}
          >
            {countryStatus}{' '}
          </span>{' '}
          gained the independent,according to the CIA World Factbook.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <Link to="/country">
            <ArrowBackIosIcon
              style={{
                color: theme.textColor,
              }}
            />
          </Link>
        </IconButton>
        <IconButton aria-label="share">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={eachCountry.maps.googleMaps}
          >
            <LocationOnIcon
              style={{
                color: theme.textColor,
              }}
            />
          </a>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon
            style={{
              color: theme.textColor,
            }}
          />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          style={{
            color: theme.textColor,
          }}
        >
          <Typography paragraph>
            <span className={classes.inlineText}>Languages:</span>
            {Object.values(eachCountry.languages).map((item) => {
              return <li>{item}</li>
            })}
          </Typography>

          <Typography paragraph>
            <span className={classes.inlineText}>Currencies:</span>
            {Object.values(eachCountry.currencies).map((item) => {
              console.log(Object.values(eachCountry.currencies), 'va')
              return (
                <li>
                  {item.name} ({item.symbol})
                </li>
              )
            })}
          </Typography>
          <Typography paragraph>
            <span className={classes.inlineText}>Time-zone:</span>{' '}
            {eachCountry.timezones[0]}
          </Typography>
          <Typography className={classes.inlineText}>Coat of arm:</Typography>
          <img
            className={classes.coatImg}
            src={eachCountry.coatOfArms.png}
            alt="Coat of Arm"
          />
        </CardContent>
      </Collapse>
    </Card>
  )
}
