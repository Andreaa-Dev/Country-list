import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import PublicIcon from '@material-ui/icons/Public'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

import SwitchTheme from './SwitchTheme'
import { useSelector } from 'react-redux'
import { AppState } from '../../misc/types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },

    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  })
)

export default function NavBar() {
  const state = useSelector(
    (state: AppState) => state.favoriteState.favoriteList
  )
  console.log(state, 'fav')
  const favoriteNumber = state.length
  const classes = useStyles()
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            COUNTRY
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
              <HomeIcon />
            </IconButton>
            <IconButton color="inherit">
              <Badge color="secondary">
                <PublicIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 4 new notifications" color="inherit">
              <Badge badgeContent={favoriteNumber} color="secondary">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <SwitchTheme />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
