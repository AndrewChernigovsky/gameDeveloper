import { Grid, Container, Heading, Flex, Icon,Text } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { Quality, Team, Plan, ConfidentialityCompliance } from './images';
import { Box } from '@chakra-ui/react';
import './Advantages.css';

const Advantages = () => {
	const color = useColorModeValue("#8b00ff ", "rgb(255, 204, 80)");

	return (
		<section id='advantages' className='container'>
			<Container maxW={{ lg: '1440px' }} fontWeight={600} mb="20px">
				<Heading as="h2" size={["xl", "2xl", "3xl", "4xl"]} mb="50px" textAlign="center" textTransform="uppercase">Advantages</Heading>
				<div  className='advantages-icons'>
					<div className='advantages-icons__icon'>
						<Box borderRadius="50%" bgColor='transparent' border="2px solid white" padding='20px' mb='10px'>
							<Quality />
						</Box>
					
						<p className='advantages-icons__text'>Clarity & Quality</p>
					</div>
					<div className='advantages-icons__icon'>
						<Box borderRadius="50%" bgColor='transparent' border="2px solid white" padding='20px' mb='10px'>
							<Team />
						</Box>

						<p className='advantages-icons__text'>Team Management</p>
					</div>
					<div className='advantages-icons__icon'>
						<Box borderRadius="50%" bgColor='transparent' border="2px solid white" padding='20px' mb='10px'>
							<Plan />
						</Box>

						<p className='advantages-icons__text'>Project Planning</p>
					</div>
					<div className='advantages-icons__icon'>
						<Box borderRadius="50%" bgColor='transparent' border="2px solid white" padding='20px' mb='10px'>
							<ConfidentialityCompliance />
						</Box>

						<p className='advantages-icons__text'>Confidentiality Compliance</p>
					</div>
				</div>
			</Container>
		</section >
	)
}

export default Advantages;