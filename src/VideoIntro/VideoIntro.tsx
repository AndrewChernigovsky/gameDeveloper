const VideoIntro = () => {
	return (
		<div>
			<video autoPlay loop muted preload="auto" controls width='100%'
				height='100%' src={process.env.PUBLIC_URL + "/videos/intro-video.webm"}>
				<source src={process.env.PUBLIC_URL + "/videos/intro-video.webm"} type="video/webm" />
				<source src={process.env.PUBLIC_URL + "/videos/intro-video.mp4"} type="video/mp4" />
			</video>
		</div>
		
	)
}

export default VideoIntro;