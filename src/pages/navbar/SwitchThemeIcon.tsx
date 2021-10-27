import React, { useContext } from 'react'
import Switch from '@material-ui/core/Switch'
import ThemeContext from '../../context/context'

export default function SwitchThemeIcon() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }
  const { switchTheme } = useContext(ThemeContext)

  return (
    <div>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        onClick={switchTheme}
      />
    </div>
  )
}
