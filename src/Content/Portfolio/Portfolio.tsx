import { Grid, Container, Heading } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { images } from './images';

const Portfolio = () => {
	return (
		<section style={{ paddingTop: '100px' }} id='projects'>
			<Container maxW={{ lg: '1440px' }} fontWeight={600} mb="20px">
				<Heading as="h2" size={["xl", "2xl", "3xl", "4xl"]} mb="30px" textAlign="center" textTransform="uppercase">Commercial Projects</Heading>
				<Grid gap="20px" textAlign="center" justifyContent="center">
					<Grid>
						<Link to='/project1' className='imageWrapper'>
							<picture>
								<source media="(min-width: 1440px)" srcSet={`${images.project1['1440px@4x']} 4x, ${images.project1['1440px@2x']} 2x, ${images.project1['1440px@1x']} 1x `} type="image/webp" />
								<source media="(min-width: 1024px)" srcSet={`${images.project1['1024px@4x']} 4x, ${images.project1['1024px@2x']} 2x, ${images.project1['1024px@1x']} 1x `} type="image/webp" />
								<source media="(min-width: 768px)" srcSet={`${images.project1['768px@4x']} 4x, ${images.project1['768px@2x']} 2x, ${images.project1['768px@1x']} 1x `} type="image/webp" />
								<source media="(min-width: 480px)" srcSet={`${images.project1['480px@4x']} 4x, ${images.project1['480px@2x']} 2x, ${images.project1['480px@1x']} 1x `} type="image/webp" />
								<img src={`${images.project1['320pxPNG@1x']}`} srcSet={`${images.project1['320px@4x']} 4x, ${images.project1['320px@2x']} x, ${images.project1['320px@1x']} 1x `} alt="project 1" />
							</picture>
						</Link>

						<Heading as="h3" size="md" mt="10px">Project 1</Heading>
					</Grid>
					<Grid>
						<Link to='/project2' className='imageWrapper'>
							<picture>
								<source media="(min-width: 1440px)" srcSet={`${images.project2['1440px@4x']} 4x, ${images.project2['1440px@2x']} 2x, ${images.project2['1440px@1x']} 1x `} type="image/webp" />
								<source media="(min-width: 1024px)" srcSet={`${images.project2['1024px@4x']} 4x, ${images.project2['1024px@2x']} 2x, ${images.project2['1024px@1x']} 1x `} type="image/webp" />
								<source media="(min-width: 768px)" srcSet={`${images.project2['768px@4x']} 4x, ${images.project2['768px@2x']} 2x, ${images.project2['768px@1x']} 1x `} type="image/webp" />
								<source media="(min-width: 480px)" srcSet={`${images.project2['480px@4x']} 4x, ${images.project2['480px@2x']} 2x, ${images.project2['480px@1x']} 1x `} type="image/webp" />
								<img src={`${images.project2['320pxPNG@1x']}`} srcSet={`${images.project2['320px@4x']} 4x, ${images.project2['320px@2x']} x, ${images.project2['320px@1x']} 1x `} alt="project 2" />
							</picture>
						</Link>

						<Heading as="h3" size="md" mt="10px">Project 2</Heading>
					</Grid>
					<Grid>
						<Link to='/project3' className='imageWrapper'>
							<picture>
								<source media="(min-width: 1440px)" srcSet={`${images.project3['1440px@4x']} 4x, ${images.project3['1440px@2x']} 2x, ${images.project3['1440px@1x']} 1x `} type="image/webp" />
								<source media="(min-width: 1024px)" srcSet={`${images.project3['1024px@4x']} 4x, ${images.project3['1024px@2x']} 2x, ${images.project3['1024px@1x']} 1x `} type="image/webp" />
								<source media="(min-width: 768px)" srcSet={`${images.project3['768px@4x']} 4x, ${images.project3['768px@2x']} 2x, ${images.project3['768px@1x']} 1x `} type="image/webp" />
								<source media="(min-width: 480px)" srcSet={`${images.project3['480px@4x']} 4x, ${images.project3['480px@2x']} 2x, ${images.project3['480px@1x']} 1x `} type="image/webp" />
								<img src={`${images.project3['320pxPNG@1x']}`} srcSet={`${images.project3['320px@4x']} 4x, ${images.project3['320px@2x']} x, ${images.project3['320px@1x']} 1x `} alt="project 3" />
							</picture>
						</Link>

						<Heading as="h3" size="md" mt="10px">Project 3</Heading>
					</Grid>
					{/* <Grid>
						<Link to='/project4' className='imageWrapper'>
							<picture>
								<source media="(min-width: 1440px)" srcSet={`${images.project4['1440px@4x']} 4x, ${images.project4['1440px@2x']} 2x, ${images.project4['1440px@1x']} 1x `} type="image/webp" />
								<source media="(min-width: 1024px)" srcSet={`${images.project4['1024px@4x']} 4x, ${images.project4['1024px@2x']} 2x, ${images.project4['1024px@1x']} 1x `} type="image/webp" />
								<source media="(min-width: 768px)" srcSet={`${images.project4['768px@4x']} 4x, ${images.project4['768px@2x']} 2x, ${images.project4['768px@1x']} 1x `} type="image/webp" />
								<source media="(min-width: 480px)" srcSet={`${images.project4['480px@4x']} 4x, ${images.project4['480px@2x']} 2x, ${images.project4['480px@1x']} 1x `} type="image/webp" />
								<img src={`${images.project4['320pxPNG@1x']}`} srcSet={`${images.project4['320px@4x']} 4x, ${images.project4['320px@2x']} x, ${images.project4['320px@1x']} 1x `} alt="project 4" />
							</picture>
						</Link>

						<Heading as="h3" size="md" mt="10px">Project 4</Heading>
					</Grid>
					<Grid>
						<Link to='/project5' className='imageWrapper'>
							<picture>
								<source media="(min-width: 1440px)" srcSet={`${images.project5['1440px@4x']} 4x, ${images.project5['1440px@2x']} 2x, ${images.project5['1440px@1x']} 1x `} type="image/webp" />
								<source media="(min-width: 1024px)" srcSet={`${images.project5['1024px@4x']} 4x, ${images.project5['1024px@2x']} 2x, ${images.project5['1024px@1x']} 1x `} type="image/webp" />
								<source media="(min-width: 768px)" srcSet={`${images.project5['768px@4x']} 4x, ${images.project5['768px@2x']} 2x, ${images.project5['768px@1x']} 1x `} type="image/webp" />
								<source media="(min-width: 480px)" srcSet={`${images.project5['480px@4x']} 4x, ${images.project5['480px@2x']} 2x, ${images.project5['480px@1x']} 1x `} type="image/webp" />
								<img src={`${images.project5['320pxPNG@1x']}`} srcSet={`${images.project5['320px@4x']} 4x, ${images.project5['320px@2x']} x, ${images.project5['320px@1x']} 1x `} alt="project 5" />
							</picture>
						</Link>

						<Heading as="h3" size="md" mt="10px">Project 5</Heading>
					</Grid> */}
				</Grid>
				
			</Container>
		</section >
	)
}

export default Portfolio;