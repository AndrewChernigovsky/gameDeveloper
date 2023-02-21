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
	fonts,
	colors: {
		dark: {
			res: '#07035a',
			white: '#001230'
		}
	},
	config: {
		disableTransitionOnChange: false
	},
	styles: {
		global: (props: any) => ({
			body: {
				fontFamily: "body",
				color: mode("#0a0a0a", "#8b00ff")(props),
				bg: mode("#FFC500", "#0a0a0a")(props),
				lineHeight: "base",
			},
		}),
	},
	components: {
		Switch: {
			variants: {
				"with-shadow": {
					bg: "red.400",
					boxShadow: "0 0 2px 2px #efdfde",
				},

				'#Switch': (props: any) => ({
					backgroundColor: mode("gray.800", "gray.900")(props),
					colorScheme: mode("blue", "yellow"),
					bg: mode("blue", "dark.res")(props),
					color: mode("gray.800", "whiteAlpha.900")(props),
				}),

				// baseStyle: (colorMode: any ) => {
				// 	return {
				// 		color: colorMode === 'dark' ? 'red.300' : 'blue.300',
				// 		fontWeight: 'normal',
				// 	};
				// },
			},
		}
	}
})
