import { Box, Heading } from "@chakra-ui/react";
import { images } from './images';

const About = () => {
	return (
		<Box className="about-section" pt={100} id="aboutMe">
			<Box
				display={["block", "block", "block", "flex"]}
				justifyContent="space-around"
				alignItems="center"
				className="main-text"
			>
				<Box maxW={["100%", "100%", "50%", "40%"]}>
					<p
						className="suptitle"
						style={{
							color: "#c2c2c2",
							fontSize: "25px",
							fontWeight: "700",
							letterSpacing: "10px",
							marginBottom: "20px",
							textDecoration: "underline",
						}}
					>
						About me
					</p>
					<Heading mb="30px" fontWeight='400'>I know who I am and what I am capable of</Heading>
					<p className="subtitle">
						Individual approach to any of the tasks. The possibility of edits
						and additions to the task. Prospects for long-term work.
					</p>
				</Box>

				<Box
					overflow="hidden"
					textAlign={["center", "center", "center", "center"]}
					boxSize={["300px", "300px", "md"]}
					objectFit="cover"
					borderRadius='10px'
				>
					<picture>
						<source media="(min-width: 768px)" srcSet={`${images.avatar['320px@4x']} 4x, ${images.avatar['320px@4x']} 2x, ${images.avatar['320px@4x']} 1x `} type="image/webp" />
						<source media="(min-width: 480px)" srcSet={`${images.avatar['320px@4x']} 4x, ${images.avatar['320px@4x']} 2x, ${images.avatar['320px@2x']} 1x `} type="image/webp" />
						<img src={`${images.avatar['320px']}`} srcSet={`${images.avatar['320px@4x']} 4x, ${images.avatar['320px@2x']} x, ${images.avatar['320px@1x']} 1x `} alt="avatar game developer Alexandr Volyansky" />
					</picture>
				</Box>
			</Box>
		</Box>
	);
};

export default About;
