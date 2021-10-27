import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import ThemeContext from '../../context/context'

import { searchCountry } from '../../redux/actions'
import { UserInputType } from '../../misc/types'

export default function SearchCountry() {
  const { theme } = useContext(ThemeContext)
  const dispatch = useDispatch()

  const useStyles = makeStyles({
    root: {
      margin: 10,
      borderColor: 'white',
    },
    outlinedInput: {
      '& $notchedOutline': {
        borderColor: `${theme.navColor}`,
      },
    },
  })
  const classes = useStyles()

  const [userInput, setUserInput] = useState<UserInputType>({ userInput: '' })

  const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
    const element = event.target as Element
    setUserInput({
      ...userInput,
      [element.id]: (element as HTMLInputElement).value,
    })
  }

  useEffect(() => {
    dispatch(searchCountry(userInput.userInput))
  }, [userInput.userInput, dispatch])

  return (
    <form
      noValidate
      autoComplete="off"
      onChange={formHandler}
      style={{
        backgroundColor: theme.foreground,
      }}
    >
      <TextField
        id="userInput"
        label="Search"
        className={classes.outlinedInput}
        InputLabelProps={{ style: { color: theme.textColor } }}
      />
    </form>
  )
}
