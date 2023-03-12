import { Box } from "@chakra-ui/react";
import { useState } from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import project1 from "../../images/content/projects/project1/project1P768px@4x.webp";
import project2 from "../../images/content/projects/project2/project2P768px@4x.webp";
import project3 from "../../images/content/projects/project3/project3P768px@4x.webp";
import project4 from "../../images/content/projects/project4/project4P768px@4x.webp";
import project5 from "../../images/content/projects/project5/project5P768px@4x.webp";
import project6 from "../../images/content/projects/project6/project6P768px@4x.webp";
import project7 from "../../images/content/projects/project7/project7P768px@4x.webp";
import project9 from "../../images/content/projects/project9/project9P768px@4x.webp";
import project10 from "../../images/content/projects/project10/project10P768px@4x.webp";
import project11 from "../../images/content/projects/project11/project11P768px@4x.webp";
import project12 from "../../images/content/projects/project12/project12P768px@4x.webp";
import project13 from "../../images/content/projects/project13/project13P768px@4x.webp";
import project14 from "../../images/content/projects/project14/project14P768px@4x.webp";
import project15 from "../../images/content/projects/project15/project15P768px@4x.webp";
import project16 from "../../images/content/projects/project16/project16P768px@4x.webp";

import YouTube, { YouTubeProps } from "react-youtube";
import VideoIntro from "../../VideoIntro/VideoIntro";

import VideoIntroMobile from "../../VideoIntro/VideoIntroMobile";

import SwiperCore, {
	Mousewheel, Pagination
} from 'swiper';


import Fancybox from './Fancybox';
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import { Navigation} from 'swiper';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
// install Swiper modules
SwiperCore.use([Mousewheel, Pagination]);


interface IOpactity {
	setOpacityHeader: (num: any) => void;
}

const Intro = ({ setOpacityHeader }: IOpactity) => {
	const [videoContent, setVideoContent] = useState("UVZobZBuEO0");
	const [heightVideo, setHeigthVideo] = useState("100vh");

	let widthViewport = window.innerWidth;


	function toHeight() {
		setOpacityHeader(1)
		if (widthViewport < 768) {
			setHeigthVideo("30vh")
		} else {
			setHeigthVideo("80vh")
		}
		
	}

	window.onload = () => {
		setTimeout(toHeight, 2000)
	}
	
	const opts: YouTubeProps['opts'] = {
		width: '100%',
		height: '100%',
		playerVars: {
			autoplay: 1,
			controls: 0,
			rel: 0,
			showinfo: 0,
			mute: 1,
			loop: 1,
			fs: 0,
			listType:  videoContent,
			playlist: videoContent,
			// modestbranding: 1,
			// playsinline: 1,
			// autohide: 1,
		},
	};

	const opts2: YouTubeProps['opts'] = {
		width: 'inherit',
		height: 'inherit',
		playerVars: {
			autoplay: 0,
			controls: 1,
			rel: 0,
			showinfo: 0,
			mute: 1,
			loop: 0,
			fs: 0,
		},
	};

	return (
		<Box className="intro-section">
			{(widthViewport < 768) && <div style={{ height: heightVideo }}>
				<video autoPlay loop muted preload="auto" controls width='100%'
					height='100%' src={process.env.PUBLIC_URL + "/videos/introMobileVideo.webm"} style={{ height: heightVideo }}>

					<source src={process.env.PUBLIC_URL + "/videos/introMobileVideo.webm"} type="video/webm" />
					<source src={process.env.PUBLIC_URL + "/videos/introMobileVideo.mp4"} type="video/mp4" />
				</video>
			</div>
			}
			{(widthViewport >= 768) && <div style={{ height: heightVideo, cursor: 'none' }}>
				<YouTube videoId={videoContent} opts={opts} style={{ height: heightVideo, cursor: 'none' }} /> 
			</div>}
	
			<div className="container">
				<Swiper
					modules={[Navigation, Pagination]}
					navigation
					pagination={{ clickable: true }}
					className="intro-slider"
					style={{
						maxWidth: "100vw",
						height: "25vh",
						display: "flex",
						marginTop: "20px",
						justifyContent: "space-around",
					}}
					keyboard={{ enabled: true }}
					mousewheel={{
						invert: true,
					}}
					breakpoints={{
						320: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1440: {
							slidesPerView: 4,
							spaceBetween: 20,
						},
					}}
				>

					<Fancybox
						options={{
							Carousel: {
								infinite: true,
							},
						}}
					>
						<SwiperSlide>
							<a data-fancybox="gallery" href={project1}>
								<img src={project1} alt="project " />
							</a>
						</SwiperSlide>
						<SwiperSlide>
							<a data-fancybox="gallery" href='https://www.youtube.com/watch?v=UVZobZBuEO0&ab_channel=%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%92%D0%BE%D0%BB%D1%8F%D0%BD%D1%81%D0%BA%D0%B8%D0%B9'>
								<YouTube opts={opts2} videoId="lpTYyokjECk" style={{ cursor: 'none' }} />
							</a>
						</SwiperSlide>
						<SwiperSlide>
							<a data-fancybox="gallery" href={project2}>
								<img src={project2} alt="project " />
							</a>
						</SwiperSlide>
						<SwiperSlide>
							<a data-fancybox="gallery" href={project3}>
								<img src={project3} alt="project " />
							</a>
						</SwiperSlide>
						<SwiperSlide>
							<a data-fancybox="gallery" href={project4}>
								<img src={project4} alt="project " />
							</a>
						</SwiperSlide>
						<SwiperSlide>
							<a data-fancybox="gallery" href={project5}>
								<img src={project5} alt="project " />
							</a>
						</SwiperSlide>
						<SwiperSlide>
							<a data-fancybox="gallery" href={project6}>
								<img src={project6} alt="project " />
							</a>
						</SwiperSlide>
						<SwiperSlide>
							<a data-fancybox="gallery" href={project7}>
								<img src={project7} alt="project " />
							</a>
						</SwiperSlide>
						<SwiperSlide>
							<a data-fancybox="gallery" href={project9}>
								<img src={project9} alt="project " />
							</a>
						</SwiperSlide>
						<SwiperSlide>
							<a data-fancybox="gallery" href={project10}>
								<img src={project10} alt="project " />
							</a>
						</SwiperSlide>
						<SwiperSlide>
							<a data-fancybox="gallery" href={project11}>
								<img src={project11} alt="project " />
							</a>
						</SwiperSlide>
						<SwiperSlide>
							<a data-fancybox="gallery" href={project12}>
								<img src={project12} alt="project " />
							</a>
						</SwiperSlide>

						<SwiperSlide>
							<a data-fancybox="gallery" href={project13}>
								<img src={project13} alt="project " />
							</a>
						</SwiperSlide>

						<SwiperSlide>
							<a data-fancybox="gallery" href={project14}>
								<img src={project14} alt="project " />
							</a>
						</SwiperSlide>

						<SwiperSlide>
							<a data-fancybox="gallery" href={project15}>
								<img src={project15} alt="project " />
							</a>
						</SwiperSlide>
						<SwiperSlide>
							<a data-fancybox="gallery" href={project16}>
								<img src={project16} alt="project " />
							</a>
						</SwiperSlide>


						</Fancybox>


					
				</Swiper>
			</div>
		</Box>
	);
};

export default Intro;
