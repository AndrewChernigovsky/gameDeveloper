import { extendTheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools"

const fonts = { roboto: `'Roboto', sans-serif` }

const breakpoints = {
	sm: '320px',
	sm1: '600px',
	md: '768px',
	lg: '960px',
	xl: '1200px',
	'2xl': '1536px',
}

export const Darktheme = extendTheme({
	breakpoints,
	colors: {
		dark: {
			res: '#07035a',
			white: '#001230'
		}
	},
	fonts: {
		heading: `'Roboto', sans-serif`,
		body: `'Roboto', sans-serif`,
	},
	config: {
		disableTransitionOnChange: false
	},
	styles: {
		global: (props: any) => ({
			body: {
				// fontFamily: "body",
				// color: mode("#0a0a0a", "#8b00ff")(props),
				bg: mode("#", "#")(props),
				lineHeight: "base",
			},
		}),
	},
	components: {
	}
})
