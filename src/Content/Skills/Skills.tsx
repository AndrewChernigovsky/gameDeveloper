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
                    <Flex minWidth='100%' align='center' display='flex' alignItems='flex-start' justifyContent={{ base: 'center', md: 'center', lg: 'space-between' }} flexDirection={{ base: 'column', md: 'column', lg: 'row' }} gap='20px'>
                        <Box w={{ base: '100%', md: '100%', lg: '30%' }} h='auto' bg={skillsBg} color={skillsColor} padding='20px'>
                            <Text align='center' fontSize='20px' height='50px'>Expert knowledge in the field of programming</Text>
                            <Text fontSize='16' opacity='70%' paddingTop={{ base: '10px', md: '20px', lg: '30px' }} align='center' minH={{ base: '70px', md: '70px', lg: '100px' }}>Using unreal engine 4/5 C++ programming knowledge and drawings</Text>
                        </Box>
                        <Box w={{ base: '100%', md: '100%', lg: '30%' }} h='auto' bg={skillsBg} color={skillsColor} padding='20px'>
                            <Text align='center' fontSize='20px' height='50px'>Level Design</Text>
                            <Text fontSize='16' opacity='70%' paddingTop={{ base: '10px', md: '20px', lg: '30px' }} align='center' minH={{ base: '70px', md: '70px', lg: '100px' }}>Using the latest technology to create levels</Text>
                        </Box>
                        <Box w={{ base: '100%', md: '100%', lg: '30%' }} h='auto' bg={skillsBg} color={skillsColor} padding='20px'>
                            <Text align='center' fontSize='20px' height='50px'>Architectural visualization</Text>
                            <Text fontSize='16' opacity='70%' paddingTop={{ base: '10px', md: '20px', lg: '30px' }} align='center' minH={{ base: '70px', md: '70px', lg: '100px' }}>Creating cinematic and photorealistic videos and photos</Text>
                        </Box>
                    </Flex>
                </Box>
            </Container>
        </section>
    );
}

export default Skills;