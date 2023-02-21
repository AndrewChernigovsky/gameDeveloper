import { Box } from "@chakra-ui/react";
// import videoWebm from './../../videos/intro-video';
// import videoMp4 from "./../../videos/intro-video";

const Intro = () => {


	return (
		<Box className="intro-section">
			<video muted autoPlay loop preload="auto">
				{/* <source src={videoWebm} type="video/webm" media="(min-width: 1440px)" />
				<source src={videoWebm} type="video/webm" media="(min-width: 1024px)" />
				<source src={videoWebm} type="video/webm" media="(min-width: 768px)" />
				<source src={videoWebm} type="video/webm" media="(min-width: 576px)" />
				<source src={videoWebm} type="video/webm" media="(min-width: 480px)" />
				<source src={videoWebm} type="video/webm" media="(min-width: 320px)" />

				<source src={videoMp4} type="video/mp4" media="(min-width: 1440px)" />
				<source src={videoMp4} type="video/mp4" media="(min-width: 1024px)" />
				<source src={videoMp4} type="video/mp4" media="(min-width: 768px)" />
				<source src={videoMp4} type="video/mp4" media="(min-width: 576px)" />
				<source src={videoMp4} type="video/mp4" media="(min-width: 480px)" />
				<source src={require(videoMp4)} type="video/mp4" media="(min-width: 320px)" />

				<source src="../assets/intro-video.ogv" type="video/ogv" media="(min-width: 1440px)" />
				<source src="../assets/intro-video.ogv" type="video/ogv" media="(min-width: 1024px)" />
				<source src="../assets/intro-video.ogv" type="video/ogv" media="(min-width: 768px)" />
				<source src="../assets/intro-video.ogv" type="video/ogv" media="(min-width: 576px)" />
				<source src="../assets/intro-video.ogv" type="video/ogv" media="(min-width: 480px)" />
				<source src="../assets/intro-video.ogv" type="video/ogv" media="(min-width: 320px)" />
				{/* 
			<track kind=”captions” src=”sampleCaption_he.vtt” scrlang=”he”/> */}
				<p>Если вы видите эту надпись, значит ваш браузер не поддерживает видео HTML5. Sorry, your browser doesn't support videos. </p>
			</video>
		</Box>
	);
};

export default Intro;
