import { Box } from "@chakra-ui/react";

const Intro = () => {
  return (
    <Box className="intro-section">
		<video muted autoPlay loop preload="auto">
			  <source src="../assets/intro-video.webm" type="video/webm" media="(min-width: 1440px)"/>
			  <source src="../assets/intro-video.webm" type="video/webm" media="(min-width: 1024px)"/>
			  <source src="../assets/intro-video.webm" type="video/webm" media="(min-width: 768px)"/>
			  <source src="../assets/intro-video.webm" type="video/webm" media="(min-width: 576px)" />
			  <source src="../assets/intro-video.webm" type="video/webm" media="(min-width: 480px)"/>
			  <source src="../assets/intro-video.webm" type="video/webm" media="(min-width: 320px)" />

			  <source src="../assets/intro-video.mp4" type="video/mp4" media="(min-width: 1440px)"/>
			  <source src="../assets/intro-video.mp4" type="video/mp4" media="(min-width: 1024px)"/>
			  <source src="../assets/intro-video.mp4" type="video/mp4" media="(min-width: 768px)"/>
			  <source src="../assets/intro-video.mp4" type="video/mp4" media="(min-width: 576px)" />
			  <source src="../assets/intro-video.mp4" type="video/mp4" media="(min-width: 480px)"/>
			  <source src="../assets/intro-video.mp4" type="video/mp4" media="(min-width: 320px)" />

			  <source src="../assets/intro-video.ogv"  type="video/ogv" media="(min-width: 1440px)"/>
			  <source src="../assets/intro-video.ogv"  type="video/ogv" media="(min-width: 1024px)"/>
			  <source src="../assets/intro-video.ogv"  type="video/ogv" media="(min-width: 768px)"/>
			  <source src="../assets/intro-video.ogv"  type="video/ogv" media="(min-width: 576px)" />
			  <source src="../assets/intro-video.ogv"  type="video/ogv" media="(min-width: 480px)"/>
			  <source src="../assets/intro-video.ogv"  type="video/ogv" media="(min-width: 320px)" />

			  {/* <track kind=”captions” src=”sampleCaption_he.vtt” scrlang=”he”/> */}
	  </video>
    </Box>
  );
};

export default Intro;
