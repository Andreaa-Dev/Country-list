import React, { useContext } from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

import MainPicture from './MainPicture'
import ButtonLandingPage from './ButtonLandingPage'
import ThemeContext from '../../context/context'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    margin: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 200,
  },
  text: {
    fontSize: 20,
    marginTop: 10,
  },
  animatedEnter: {
    animation: `$enter 3000ms ${theme.transitions.easing.easeInOut}`,
  },
  '@keyframes enter': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-200%)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
}))

function LandingPage() {
  const { theme } = useContext(ThemeContext)
  const classes = useStyles()
  return (
    <Box
      className={classes.root}
      style={{
        backgroundColor: theme.foreground,
        color: theme.textColor,
      }}
    >
      <MainPicture />

      <Box className={classes.animatedEnter}>
        <Typography className={classes.title}>EXPLORE THE WORLD</Typography>
        <Typography className={classes.text}>
          The love of one's country is a splendid thing. But why should love
          stop at the border?
        </Typography>
        <ButtonLandingPage />
      </Box>
    </Box>
  )
}

export default LandingPage
