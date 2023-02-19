import { Box, Image, Heading } from "@chakra-ui/react";

const About = () => {
  return (
    <Box className="about-section" pt={100}>
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
          <Image
            src="https://www.kleo.ru/img/articles/1747116759577b84d17eeae363406219.jpg"
            height='500px'
          />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
