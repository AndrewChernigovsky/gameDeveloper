import { extendTheme } from '@chakra-ui/react'

const fonts = { roboto: `'Roboto', sans-serif` }

const breakpoints = {
	sm: '320px',
	md: '768px',
	lg: '960px',
	xl: '1200px',
	'2xl': '1536px',
}

const theme = extendTheme({
	breakpoints,
	fonts,
	colors: {
		black: '#16161D',
	}
})
