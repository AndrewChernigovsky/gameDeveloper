import { extendTheme } from '@chakra-ui/react'

const fonts = { roboto: `'Roboto', sans-serif` }

const breakpoints = {
	sm: '320px',
	md: '768px',
	lg: '960px',
	xl: '1200px',
	'2xl': '1536px',
}

export const Darktheme = extendTheme({
	breakpoints,
	fonts,
	colors: {
		// black: '#16161D',
		// blue: '#0000FF',
		// gray: '#E2E8F0',
		// dark: '#1111FF',
		
		// customize: {
		// 	100: 'green'
		// }

		dark: {
			blue: '#000080'
		}
	}
})
