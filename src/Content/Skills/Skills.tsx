import { Flex, Text, Box, Heading, Container, useColorModeValue } from '@chakra-ui/react'

const Skills = () => {
    const skillsBg = useColorModeValue('black', 'white')
    const skillsColor = useColorModeValue('#FFFFFF', '#000000')

    return (
        <section id="skills">
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
                    <Heading as="h2" size="4xl" mb="30px" textAlign="center" textTransform="uppercase">Skills</Heading>
                    <Flex minWidth='100%' align='center' display='flex' alignItems='flex-start' justifyContent={{ base: 'center', sm1: 'space-between' }} flexDirection={{ base: 'column',sm1: 'row', lg: 'row' }} gap='20px'>
                        <Box w={{ base: '100%', md: '100%', lg: '30%' }} minH={{ base: '70px', sm1: '300px', lg: '200px' }} display="flex" flexDirection='column' justifyContent='center' bg={skillsBg} color={skillsColor} padding='20px'>
                            <Heading textAlign='center' fontSize='20px'>Expert knowledge in the field of programming</Heading>
                            <Text fontSize='16' opacity='70%' paddingTop={{ base: '10px', md: '20px', lg: '30px' }} align='center'>Using unreal engine 4/5 C++ programming knowledge and drawings</Text>
                        </Box>
                        <Box w={{ base: '100%', md: '100%', lg: '30%' }} minH={{ base: '70px', sm1: '300px', lg: '200px' }} display="flex" flexDirection='column' justifyContent='center' bg={skillsBg} color={skillsColor} padding='20px'>
                            <Heading textAlign='center' fontSize='20px'>Level Design</Heading>
                            <Text fontSize='16' opacity='70%' paddingTop={{ base: '10px', md: '20px', lg: '30px' }} align='center'>Using the latest technology to create levels</Text>
                        </Box>
                        <Box w={{ base: '100%', md: '100%', lg: '30%' }} minH={{ base: '70px', sm1: '300px', lg: '200px' }} display="flex" flexDirection='column' justifyContent='center' bg={skillsBg} color={skillsColor} padding='20px'>
                            <Heading textAlign='center' fontSize='20px'>Architectural visualization</Heading>
                            <Text fontSize='16' opacity='70%' paddingTop={{ base: '10px', md: '20px', lg: '30px' }} align='center'>Creating cinematic and photorealistic videos and photos</Text>
                        </Box>
                    </Flex>
                </Box>
            </Container>
        </section>
    );
}

export default Skills;