import { Flex, Text, Box, Heading, Container, useColorModeValue } from '@chakra-ui/react'
import { Magic, Document } from './images';

const IntroText = () => {
    const skillsColor = useColorModeValue('#FFFFFF', '#000000')

    return (
        <section id="skills" className='container'>
            <Container
                maxW={{ lg: '1440px' }}
                fontWeight={600}
                mb="20px"
                paddingTop='100px'
            >
                <Box
                    display='flex'
                    flexDirection='column'
                    minWidth='100%'
                >
                    <Flex minWidth='100%' align='center' display='flex' alignItems='flex-start' justifyContent={{ base: 'center', sm1: 'space-between' }} flexDirection={{ base: 'column', sm1: 'row', lg: 'row' }} gap='20px'>
                        <Box w={{ base: '100%', md: '100%', lg: '50%' }} minH={{ base: '70px', sm1: '300px', lg: '200px' }} display="flex" flexDirection='column' justifyContent='center' color={skillsColor} padding='20px' alignContent="flex-start">
                            <Box className='icon-wrapper' margin="0 auto" display="flex" justifyContent="center" alignItems="center" borderRadius="50%" bgColor='transparent' border="2px solid white" padding='20px' mb='10px' w="auto" minH="auto">
                                <Magic />
                            </Box>
                            <Heading textAlign='center' fontSize='20px'>Creating wonders in the field of games</Heading>
                            <Text fontSize='16' opacity='70%' paddingTop={{ base: '10px', md: '20px', lg: '30px' }} align='center'>More than 20 large completed orders</Text>
                        </Box>
                        <Box w={{ base: '100%', md: '100%', lg: '50%' }} minH={{ base: '70px', sm1: '300px', lg: '200px' }} display="flex" flexDirection='column' justifyContent='center' color={skillsColor} padding='20px' alignContent="flex-start">
                            <Box className='icon-wrapper' margin="0 auto" display="flex" justifyContent="center" alignItems="center" borderRadius="50%" bgColor='transparent' border="2px solid white" padding='20px' mb='10px' w="auto" minH="auto">
                                <Document />
                            </Box>
                            <Heading textAlign='center' fontSize='20px'>Compliance with all agreements</Heading>
                            <Text fontSize='16' opacity='70%' paddingTop={{ base: '10px', md: '20px', lg: '30px' }} align='center'>Knowledge of all pipelines, compliance with deadlines</Text>
                        </Box>
                    </Flex>
                </Box>
            </Container>
        </section>
    );
}

export default IntroText;