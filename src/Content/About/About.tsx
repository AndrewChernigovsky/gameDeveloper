import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { images } from './images';

interface IModeTheme {
	isDark: boolean;
}

const About = ({isDark}: IModeTheme) => {
	return (
		<Box className="about-section" pt={100} m='0 auto'>
			<Heading as='h2' size={["xl", "2xl", "3xl", "4xl"]} textAlign='center' mb='30px'>ABOUT ME</Heading>
			<Container
				display={["grid", "grid", "flex", "flex"]}
				justifyContent="space-between"
				className="main-text"
				gap='20px'
				// minW='2xl'
			>
				<Box maxW={["100%", "100%", "100%", "100%"]}>
					<Text mb="30px" fontWeight='500' size={["sm", "md", "md", "lg", "2xl"]}> - I know who I am and what I am capable of</Text>
					<p className="subtitle">
						Individual approach to any of the tasks. The possibility of edits
						and additions to the task. Prospects for long-term work.
					</p>
				</Box>

				<Box
					overflow="hidden"
					textAlign="center"
					objectFit="contain"
					className="avatar"
				>
					<picture style={{margin: '0 auto'}}>
						<source media="(min-width: 768px)" srcSet={`${images.avatar['320px@4x']} 4x, ${images.avatar['320px@4x']} 2x, ${images.avatar['320px@4x']} 1x `} type="image/webp" />
						<source media="(min-width: 480px)" srcSet={`${images.avatar['320px@4x']} 4x, ${images.avatar['320px@4x']} 2x, ${images.avatar['320px@2x']} 1x `} type="image/webp" />
						<img src={`${images.avatar['320px']}`} srcSet={`${images.avatar['320px@4x']} 4x, ${images.avatar['320px@2x']} x, ${images.avatar['320px@1x']} 1x `} alt="avatar game developer Alexandr Volyanskiy" />
					</picture>
				</Box>
			</Container>
		</Box>
	);
};

export default About;
