import { Box } from "@chakra-ui/react";
import { useState } from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderItem from "./SliderItem";

interface IOpactity {
	setOpacityHeader: (num: any) => void;
}


const Intro = ({setOpacityHeader}: IOpactity) => {
	const [videoContent, setVideoContent] = useState("UVZobZBuEO0");
	const [heigthVideo, setHeigthVideo] = useState("100vh");

	let heightTop = window.pageYOffset;

	window.addEventListener('scroll', () => {
		setHeigthVideo("80vh");
		setOpacityHeader("1");

		if (heightTop <= 10) {
			setHeigthVideo("100vh");
			setOpacityHeader("0.1");
		} else {
			
		}
	})
	

  return (
    <Box className="intro-section">
      <div
        className="video-block"
        style={{
			height: heigthVideo,
			transition: '0.3s',
			width: "100%",
			cursor: "none",
			objectFit: 'contain'
        }}
      >
        <iframe
          height="100%"
          width="100%"
          src={`https://www.youtube.com/embed/${videoContent}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoContent}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
		  <div className="container">
			  <Swiper
				  className="intro-slider"
				  style={{
					  maxWidth: "100vw",
					  height: "25vh",
					  display: "flex",
					  marginTop: "20px",
				  }}
				  breakpoints={{
					  320: {
						  slidesPerView: 1,
					  },
					  768: {
						  slidesPerView: 2,
					  },
					  1024: {
						  slidesPerView: 3,
					  },
					  1440: {
						  slidesPerView: 4,
					  },
				  }}
			  >
				  <SwiperSlide style={{ height: "25vh" }}>
					  <SliderItem
						  // videoPreview={videoPreview}
						  changeBackground={() => setVideoContent("oKFHPyn-Q84")}
					  />
				  </SwiperSlide>

				  <SwiperSlide style={{ height: "25vh" }}>
					  <SliderItem
						  // videoPreview={videoPreview}
						  changeBackground={() => setVideoContent("")}
					  />
				  </SwiperSlide>

				  <SwiperSlide style={{ height: "25vh" }}>
					  <SliderItem
						  // videoPreview={videoPreview}
						  changeBackground={() => setVideoContent("3")}
					  />
				  </SwiperSlide>

				  <SwiperSlide style={{ height: "25vh" }}>
					  <SliderItem
						  // videoPreview={videoPreview}
						  changeBackground={() => setVideoContent("4")}
					  />
				  </SwiperSlide>

				  <SwiperSlide style={{ height: "25vh" }}>
					  <SliderItem
						  // videoPreview={videoPreview}
						  changeBackground={() => setVideoContent("5")}
					  />
				  </SwiperSlide>

				  <SwiperSlide style={{ height: "25vh" }}>
					  <SliderItem
						  // videoPreview={videoPreview}
						  changeBackground={() => setVideoContent("6")}
					  />
				  </SwiperSlide>

				  <SwiperSlide style={{ height: "25vh" }}>
					  <SliderItem
						  // videoPreview={videoPreview}
						  changeBackground={() => setVideoContent("7")}
					  />
				  </SwiperSlide>

				  <SwiperSlide style={{ height: "25vh" }}>
					  <SliderItem
						  // videoPreview={videoPreview}
						  changeBackground={() => setVideoContent("8")}
					  />
				  </SwiperSlide>
			  </Swiper>
		</div>

    </Box>
  );
};

export default Intro;
