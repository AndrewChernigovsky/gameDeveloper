import { Grid, Container, Heading, Flex, Icon,Text } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { Quality, Team, Plan, ConfidentialityCompliance } from './images';
import { Box } from '@chakra-ui/react';

const Advantages = () => {
	const color = useColorModeValue('red', 'blue');
		
	return (
		<section style={{ paddingTop: '100px' }} id='advantages'>
			<Container maxW={{ lg: '1440px' }} fontWeight={600} mb="20px">
				<Heading as="h2" size={["xl", "2xl", "3xl", "4xl"]} mb="50px" textAlign="center" textTransform="uppercase">Advantages</Heading>
				<Flex justifyItems="space-between" minWidth="100%" gap="20px">
					<Grid  w="150px" h="150px" alignContent="center" justifyContent="center" textAlign="center" className='advantages'>
						<Box borderRadius="50%" bgColor='transparent' border="2px solid white" padding='20px' mb='10px'>
							<Quality />
						</Box>
					
						<Text>Clarity & Quality</Text>
					</Grid>
					<Grid w="150px" h="150px" alignContent="center" justifyContent="center" textAlign="center" className='advantages'>
						<Box borderRadius="50%" bgColor='transparent' border="2px solid white" padding='20px' mb='10px'>
							<Team />
						</Box>

						<Text>Team Management</Text>
					</Grid>
					<Grid w="150px" h="150px" alignContent="center" justifyContent="center" textAlign="center" className='advantages'>
						<Box borderRadius="50%" bgColor='transparent' border="2px solid white" padding='20px' mb='10px'>
							<Plan />
						</Box>

						<Text>Project Planning</Text>
					</Grid>
					<Grid w="150px" h="150px" alignContent="center" justifyContent="center" textAlign="center" className='advantages'>
						<Box borderRadius="50%" bgColor='transparent' border="2px solid white" padding='20px' mb='10px'>
							<ConfidentialityCompliance />
						</Box>

						<Text>Confidentiality Compliance</Text>
					</Grid>
				</Flex>
			</Container>
		</section >
	)
}

export default Advantages;