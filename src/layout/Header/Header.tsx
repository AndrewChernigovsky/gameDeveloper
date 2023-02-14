import { Flex, Spacer, Center, Text, Square, Box, Image, Stack, Link } from '@chakra-ui/react'

// import breakpoints from './../../Mediaqueries'

// const breakpoints = {
// 	sm: '320px',
// 	md: '480px',
// 	tb: '768px',
// 	lg: '1024px',
// 	xl: '1440px',
// },

const Header = () => {
	return (
		<header>
			<Flex color='white' maxW={ {sm: '320px', md: '550px' } } m='0 auto' p='0 10px'>
				<Center flex='1' bg='green.500' alignContent='center'>
					<Link href='/' w={'100%'} textAlign='center'>About me</Link>
				</Center>
				<Center flex='1' bg='blue.500'>
					<Link href='/' w={'100%'} textAlign='center'>Portfolio</Link>
				</Center>
				<Center flex='1' bg='tomato' alignItems='center'>
					<Link href='/' w={'100%'} textAlign='center'>Skills</Link>
				</Center>
			</Flex>

			<Stack direction='row'>
				<Image
					boxSize='100px'
					objectFit='cover'
					src='https://bit.ly/dan-abramov'
					alt='Dan Abramov'
				/>
				<Image
					boxSize='150px'
					objectFit='cover'
					src='https://bit.ly/dan-abramov'
					alt='Dan Abramov'
				/>
				<Image boxSize='200px' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
			</Stack>
		</header>
	)
}

export default Header;