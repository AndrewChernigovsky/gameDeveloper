import { Flex, Container, Switch, IconButton } from "@chakra-ui/react";

import { HashLink } from "react-router-hash-link";
import { useState } from "react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface IModeTheme {
	toggleColorMode: () => void;
	isDark: boolean;
}

const Header = ({ toggleColorMode, isDark }: IModeTheme) => {
	const [display, changeDisplay] = useState('none');
	const color = useColorModeValue('#8b00ff', '#000080');
	const colorHeader = useColorModeValue(' #0a0a0a ', '8b00ff');
	// const colorSwitch = useColorModeValue('#000080', '#8b00ff');


	return (
		<header style={{ backgroundColor: colorHeader, minHeight: '70px', position: 'fixed', minWidth: '100%', borderBottom: `1px solid ${color}`, color: color, zIndex: 551, left: '0' }}>

			<Container maxW='1440px' fontWeight={600}>
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
					<Flex flexDir="column" align="center" maxW='1440px'>
						<HashLink smooth to="/#aboutMe" className="link">About Me</HashLink>
						<HashLink smooth to="/#projects" className="link">Commercial Projects</HashLink>
						<HashLink smooth to="/#skills" className="link">Skills</HashLink>
					</Flex>
				</Flex>
				<Flex justifyContent="flex-end">
					<Flex justifyItems="space-between"
						alignItems="center" minH="70px" position="relative">
						<Flex top="1rem" right="1rem" >
							<Flex
								display={['none', 'none', 'flex', 'flex']}
								mr="80px"
								mt="5px"
								gap="10px"
								alignItems="center"
								minHeight="70px"
							>
								<HashLink to="/#aboutMe" className='link'>About Me</HashLink>
								<HashLink to="/#projects" className='link'>
									Commercial Projects
								</HashLink>
								<HashLink to="/#skills" className='link'>Skills</HashLink>
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
							id="Switch"
							top="20px"
							right="10px"
							position="absolute"
							// colorScheme='black'
							// color={colorSwitch}
							// bgColor={colorSwitch}
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
