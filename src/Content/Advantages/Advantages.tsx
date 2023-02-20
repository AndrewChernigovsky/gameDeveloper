import { Grid, Container, Heading, Flex, Icon,Text } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

const Advantages = () => {
	const color = useColorModeValue('red', 'blue');
		
	return (
		<section style={{ paddingTop: '100px' }} id='projects'>
			<Container maxW={{ lg: '1440px' }} fontWeight={600} mb="20px">
				<Heading as="h2" size={["xl", "2xl", "3xl", "4xl"]} mb="30px" textAlign="center" textTransform="uppercase">Advantages</Heading>
				<Flex justifyItems="space-between" minWidth="100%" gap="20px">
					<Grid borderRadius="50%" w="150px" h="150px" bgColor={color} alignContent="center" justifyContent="center" textAlign="center" border="2px solid white">
						<Icon></Icon>
						<Text>Clarity & Quality</Text>
					</Grid>
					<Grid borderRadius="50%" w="150px" h="150px" bgColor={color} alignContent="center" justifyContent="center" textAlign="center" border="2px solid white">
						<Icon></Icon>
						<Text>Team Management</Text>
					</Grid>
					<Grid borderRadius="50%" w="150px" h="150px" bgColor={color} alignContent="center" justifyContent="center" textAlign="center" border="2px solid white">
						<Icon></Icon>
						<Text>Project Planning</Text>
					</Grid>
					<Grid borderRadius="50%" w="150px" h="150px" bgColor={color} alignContent="center" justifyContent="center" textAlign="center" border="2px solid white">
						<Icon></Icon>
						<Text>Confidentiality Compliance</Text>
					</Grid>
				</Flex>
			</Container>
		</section >
	)
}

export default Advantages;