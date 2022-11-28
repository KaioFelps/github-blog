import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './router'
import { GlobalStyle } from './styles/global'
import { DarkMode } from './styles/themes/darkMode'

export function App() {
  return (
    <ThemeProvider theme={DarkMode}>
      <GlobalStyle />

      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
