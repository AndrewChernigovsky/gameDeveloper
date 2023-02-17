import {
	Flex,
	Container,
	Switch,
	IconButton,
} from '@chakra-ui/react';

import { HashLink } from 'react-router-hash-link';

import { useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';


interface IModeTheme {
	colorMode: any;
	toggleColorMode: () => void;
	isDark: boolean;
}

const Header = ({
	colorMode,
	toggleColorMode,
	isDark}: IModeTheme) => {

	const [display, changeDisplay] = useState('none');
	
	return (
		<header>
			<Container maxW={{ lg: '1440px' }} fontFamily="Roboto" fontWeight={600}>
				<Flex>
					<Flex
						pos="fixed"
						top="1rem"
						right="1rem"
						align="center"
					></Flex>
					<Switch
						pos="fixed"
						top="25px"
						right="10px"
						color="green"
						isChecked={isDark}
						onChange={toggleColorMode}
					/>
				</Flex>
				<Flex
					w="100vw"
					bgColor="gray.50"
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
					<Flex pos="fixed" top="10px" right="45px" >
						<Flex pos="fixed" top="1rem" right="1rem">
							<Flex display={['none', 'none', 'flex', 'flex']} mr="40px" mt="5px" gap="10px">
								<HashLink to="aboutMe">About Me</HashLink>
								<HashLink to="projects">
									Commercial Projects
								</HashLink>
								<HashLink to="skills">Skills</HashLink>
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
							top="25px"
							right="10px"
							color="green"
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
