import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

import MainPicture from './MainPicture'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
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
  const classes = useStyles()
  return (
    <div className={classes.animatedEnter}>
      <Box>
        <Typography>EXPLORE THE WORLD</Typography>
        <Typography>
          The love of one's country is a splendid thing. But why should love
          stop at the border?
        </Typography>
      </Box>
      <MainPicture />
    </div>
  )
}

export default LandingPage
