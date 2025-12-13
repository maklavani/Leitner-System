import { createTheme } from '@mui/material/styles'

// Types
import type { Direction } from '@mui/material/styles'

// Fonts
import RubikFont from '@/styles/fonts/rubik'
import RobotoFont from '@/styles/fonts/roboto'

const ThemeConfig = (dir: Direction) =>
	createTheme({
		direction: dir,
		cssVariables: {
			colorSchemeSelector: 'class'
		},
		colorSchemes: {
			light: {
				palette: {
					mode: 'light',
					primary: { light: '#b73bff', main: '#a60bff', dark: '#510081', contrastText: '#fff' },
					secondary: { light: '#b8edff', main: '#00bbfa', dark: '#0083af', contrastText: '#333333' },
					background: { default: '#fafafa', paper: '#eee' }
				}
			},
			dark: {
				palette: {
					mode: 'dark',
					primary: { light: '#b73bff', main: '#a60bff', dark: '#510081', contrastText: '#fff' },
					secondary: { light: '#b8edff', main: '#00bbfa', dark: '#0083af', contrastText: '#333333' },
					background: { default: '#131313', paper: '#333' }
				}
			}
		},
		shape: { borderRadius: 16 },
		typography: {
			fontFamily: `${RubikFont.style.fontFamily}, ${RobotoFont.style.fontFamily}`,
			fontSize: 14
		},
		components: {
			MuiCssBaseline: {
				styleOverrides: {
					body: { scrollBehavior: 'smooth' },
					a: { textDecoration: 'none' }
				}
			}
		}
	})

export default ThemeConfig
