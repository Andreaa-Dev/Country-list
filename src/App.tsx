import React, { useState } from 'react'

import Routes from './Routes'
import ThemeContext, { themes } from './context/context'

export default function App() {
  const [context, setContext] = useState({
    theme: themes.light,
    switchTheme: () => {
      setContext((current) => ({
        ...current,
        theme: current.theme === themes.light ? themes.dark : themes.light,
      }))
    },
  })
  return (
    <ThemeContext.Provider value={context}>
      <Routes />
    </ThemeContext.Provider>
  )
}
