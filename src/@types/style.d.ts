import 'styled-components'
import { DarkMode } from '../styles/themes/darkMode'

type ThemeType = typeof DarkMode

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
