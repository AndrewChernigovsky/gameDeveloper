import {
	Flex,
	Grid,
	Container,
	Text
} from '@chakra-ui/react';

import {Link} from "react-router-dom"
import icons from './../../AllImages'

interface IModeTheme {
	colorMode: any;
	toggleColorMode: () => void;
	isDark: boolean;
}

const Footer = ({colorMode,
toggleColorMode,
isDark}: IModeTheme) => {
	return (
		<footer >
			<Container maxW={{ lg: '1440px' }} fontFamily="Roboto" fontWeight={600} borderTop={`1px solid `}>
				<Grid m="0 auto" alignContent="center" justifyContent="center" p={"20px 20px"} gap="20px">
					<Text>Chat me: </Text>
					<Flex mb="50px">
						<Link to="https://vk.com/idcifrun" className='social-link'>
							{icons.VkIcon()}
						</Link>
						<Link to="https://vk.com/idcifrun" className='social-link'>
							{icons.TelegramIcon()}
						</Link>
						<Link to="https://vk.com/idcifrun" className='social-link'>
							{icons.EmailIcon()}

						</Link>

					</Flex>
					<Text>All rigths reserved 2023</Text>
				</Grid>
			
				
			</Container>
		</footer>
	);
};

export default Footer;
