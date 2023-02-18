import { Grid, Container, Heading } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { images } from './../../images';

const Portfolio = () => {
	return (
		<section style={{ paddingTop: '100px' }}>
			<Container maxW={{ lg: '1440px' }} fontWeight={600} mb="20px">
				<Heading as="h2" size="4xl" mb="30px" textAlign="center" textTransform="uppercase">Project 1</Heading>
				<Grid gap="20px" textAlign="center" justifyContent="center">
					<picture>
						<source media="(min-width: 1440px)" srcSet={`${images.project1['1440px@4x']} 4x, ${images.project1['1440px@2x']} 2x, ${images.project1['1440px@1x']} 1x `} type="image/webp" />
						<source media="(min-width: 1024px)" srcSet={`${images.project1['1024px@4x']} 4x, ${images.project1['1024px@2x']} 2x, ${images.project1['1024px@1x']} 1x `} type="image/webp" />
						<source media="(min-width: 768px)" srcSet={`${images.project1['768px@4x']} 4x, ${images.project1['768px@2x']} 2x, ${images.project1['768px@1x']} 1x `} type="image/webp" />
						<source media="(min-width: 480px)" srcSet={`${images.project1['480px@4x']} 4x, ${images.project1['480px@2x']} 2x, ${images.project1['480px@1x']} 1x `} type="image/webp" />
						<img src={`${images.project1['320pxPNG@1x']}`} srcSet={`${images.project1['320px@4x']} 4x, ${images.project1['320px@2x']} x, ${images.project1['320px@1x']} 1x `} alt="project 1" />
					</picture>
				</Grid>

				<Heading as="h3" size="md" mt="10px">Project 1</Heading>
			</Container>
		</section >
	)
}

export default Portfolio;