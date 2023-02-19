import { Flex, Container, Switch, IconButton } from '@chakra-ui/react';

import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useColorModeValue } from '@chakra-ui/react';
import { Darktheme } from '../theme';


interface IModeTheme {
	toggleColorMode: () => void;
	isDark: boolean;
}

const Header = ({ toggleColorMode, isDark }: IModeTheme) => {
	const [display, changeDisplay] = useState('none');
	const color = useColorModeValue('#000080', 'white');
	const colorFonts = useColorModeValue('white', 'black');
	const colorSwitch = useColorModeValue('blue', 'blue');

	return (
		<header style={{ backgroundColor: color, minHeight: '70px', position: 'fixed', minWidth: '100%', borderBottom: `1px solid ${color}`, paddingBottom: '20px', color: colorFonts,}}>
			<Container maxW={{ lg: '1440px' }} fontWeight={600}>
				<Flex>
					<Flex
						pos="fixed"
						top="1rem"
						right="1rem"
						align="center"
					></Flex>
				</Flex>
				<Flex
					w="100vw"
					bgColor='#718096'
					zIndex={20}
					h="100vh"
					top="0"
					left="0"
					pos="fixed"
					overflowY="auto"
					flexDir="column"
					display={display}
				>
					<Flex justify="flex-end">
						<IconButton
							mt={2}
							mr={2}
							aria-label="Close Menu"
							size="lg"
							icon={<CloseIcon />}
							onClick={() => changeDisplay('none')}
						></IconButton>
					</Flex>
					<Flex flexDir="column" align="center">
						<HashLink to="aboutMe">About Me</HashLink>
						<HashLink to="projects">Commercial Projects</HashLink>
						<HashLink to="skills">Skills</HashLink>
					</Flex>
				</Flex>

				<Flex>
					<Flex pos="fixed" top="10px" right="45px">
						<Flex pos="fixed" top="1rem" right="1rem">
							<Flex
								display={['none', 'none', 'flex', 'flex']}
								mr="60px"
								mt="5px"
								gap="10px"
							>
								<HashLink to="aboutMe" className='link'>About Me</HashLink>
								<HashLink to="projects" className='link'>
									Commercial Projects
								</HashLink>
								<HashLink to="skills" className='link'>Skills</HashLink>
							</Flex>
						</Flex>
						<IconButton
							aria-label="Open Menu"
							size="lg"
							mr={2}
							icon={<HamburgerIcon />}
							display={['flex', 'flex', 'none', 'none']}
							onClick={() => changeDisplay('flex')}
						/>

						<Switch
							pos="fixed"
							top="20px"
							right="10px"
							colorScheme={colorSwitch}
							size="lg"
							isChecked={isDark}
							onChange={toggleColorMode}
						/>
					</Flex>
				</Flex>
			</Container>
		</header>
	);
};

export default Header;
