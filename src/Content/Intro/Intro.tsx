import { Box } from "@chakra-ui/react";
import { useState } from "react";
// import videoWebm from './../../videos/intro-video';
// import videoMp4 from "./../../videos/intro-video";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderItem from "./SliderItem";

const sliderItemHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();

  const button: HTMLButtonElement = event.currentTarget;
  // setClickedButton(button.name);
};

const Intro = () => {

  const [videoContent, setVideoContent] = useState('hello')

const changeBackground = () => {
  setVideoContent('')
}

  return (
    <Box className="intro-section" mt="100px">
      {/* <video muted autoPlay loop preload="auto">
				 <source src={videoWebm} type="video/webm" />

				<source src={videoMp4} type="video/mp4" />

				<source src="../assets/intro-video.ogv" type="video/ogv" />
				
			<track kind=”captions” src=”sampleCaption_he.vtt” scrlang=”he”/>
				<p>Если вы видите эту надпись, значит ваш браузер не поддерживает видео HTML5. Sorry, your browser doesn't support videos. </p>
			</video> */}

      <div
        className="video-block"
        style={{
          height: "50vh",
          width: "80%",
          border: "1px solid black",
          background: "rgba(0, 0, 0, 0.8)",
          marginBottom: "50px",
        }}
      >
		{videoContent}
      </div>

      <Swiper
        className="intro-slider"
        style={{ width: "auto", height: "80vh", display: "flex" }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <SliderItem changeBackground={changeBackground} text="1" />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem changeBackground={changeBackground} text="2" />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem changeBackground={changeBackground} text="3" />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem changeBackground={changeBackground} text="4" />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem changeBackground={changeBackground} text="5" />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem changeBackground={changeBackground} text="6" />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem changeBackground={changeBackground} text="7" />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem changeBackground={changeBackground} text="8" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Intro;
