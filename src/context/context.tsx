import React from 'react'

export const themes = {
  light: {
    foreground: '#FFFFFF',
    textColor: '#323232',
    buttonColor: '#0F52BA',
    textHighlight: '#193498 ',
    navColor: '#0F52BA',
  },
  dark: {
    foreground: '#323232',
    textColor: '#FFFFFF',
    buttonColor: '#FFFFFF',
    textHighlight: '#FF0000',
    navColor: '#323232',
  },
}

export default React.createContext({
  theme: themes.light,
  switchTheme: () => {},
})
