import React, { useContext } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import ThemeContext from '../../context/context'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: '20px',
    },
    customLink: {
      textDecoration: 'none',
      '&:visited': { color: 'white' },
    },
  })
)

export default function ButtonLandingPage() {
  const classes = useStyles()
  const { theme } = useContext(ThemeContext)

  return (
    <div className={classes.root}>
      <Button
        style={{
          backgroundColor: theme.buttonColor,
          // color: theme.buttonText,
        }}
        variant="contained"
      >
        <Link
          className={classes.customLink}
          to="/country"
          style={{
            color: theme.foreground,
          }}
        >
          EXPLORE
        </Link>
      </Button>
    </div>
  )
}
