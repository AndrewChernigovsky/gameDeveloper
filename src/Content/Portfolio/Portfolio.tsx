import { Flex, Container, Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { images } from './images';

const Portfolio = () => {
	return (
		<section style={{ paddingTop: '100px'  }}>
			<Container maxW={{ lg: '1440px' }} fontWeight={600}>
				<Heading as="h2" size="lg">Portfolio</Heading>
				<Flex>
					<Link to='/project1'>
						<picture>
							<source media="(min-width: 1440px)" srcSet={`${images.project1['1440px@4x']} 4x, ${images.project1['1440px@2x']} 2x, ${images.project1['1440px@1x']} 1x `} type="image/webp" />
							<source media="(min-width: 1024px)" srcSet={`${images.project1['1024px@4x']} 4x, ${images.project1['1024px@2x']} 2x, ${images.project1['1024px@1x']} 1x `} type="image/webp" />
							<source media="(min-width: 768px)" srcSet={`${images.project1['768px@4x']} 4x, ${images.project1['768px@2x']} 2x, ${images.project1['768px@1x']} 1x `} type="image/webp" />
							<source media="(min-width: 480px)" srcSet={`${images.project1['480px@4x']} 4x, ${images.project1['480px@2x']} 2x, ${images.project1['480px@1x']} 1x `} type="image/webp" />
							<img src={`${images.project1['320pxPNG@1x']}`} srcSet={`${images.project1['320px@4x']} 4x, ${images.project1['320px@2x']} x, ${images.project1['320px@1x']} 1x `} alt="project 1"/>
						</picture>
					</Link>
				
					<Text>Text</Text>
				</Flex>
				<Flex>
					<Link to='/project2'>
						<picture>
							<source media="(min-width: 1440px)" srcSet={`${images.project2['1440px@4x']} 4x, ${images.project2['1440px@2x']} 2x, ${images.project2['1440px@1x']} 1x `} type="image/webp" />
							<source media="(min-width: 1024px)" srcSet={`${images.project2['1024px@4x']} 4x, ${images.project2['1024px@2x']} 2x, ${images.project2['1024px@1x']} 1x `} type="image/webp" />
							<source media="(min-width: 768px)" srcSet={`${images.project2['768px@4x']} 4x, ${images.project2['768px@2x']} 2x, ${images.project2['768px@1x']} 1x `} type="image/webp" />
							<source media="(min-width: 480px)" srcSet={`${images.project2['480px@4x']} 4x, ${images.project2['480px@2x']} 2x, ${images.project2['480px@1x']} 1x `} type="image/webp" />
							<img src={`${images.project2['320pxPNG@1x']}`} srcSet={`${images.project2['320px@4x']} 4x, ${images.project2['320px@2x']} x, ${images.project2['320px@1x']} 1x `} alt="project 2"/>
						</picture>
					</Link>
				
					<Text>Text</Text>
				</Flex>

			</Container>
		</section >
	)
}

export default Portfolio;