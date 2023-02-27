import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import video from "./intro-video.mp4";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderItem from "./SliderItem";

const Intro = () => {
  const [videoContent, setVideoContent] = useState(video);
  console.log("render videoooooo");

  useEffect(() => {
    console.log("state changed!");
    setVideoContent("путь до видео");
  }, [videoContent]);

  return (
    <Box className="intro-section" mt="100px">
      <div
        className="video-block"
        style={{
          height: "50vh",
          width: "80%",
          border: "1px solid black",
          background: "rgba(0, 0, 0, 0.8)",
          marginBottom: "50px",
          color: "white",
          fontSize: "32px",
          margin: '0 auto'
        }}
      >
        <video
          style={{ height: "100%", border: "3px solid red" }}
          autoPlay
          muted
          loop
        >
          <source src={videoContent} />
        </video>
      </div>

      <Swiper
        className="intro-slider"
        style={{ maxWidth: "100vw", height: "80vh", display: "flex" }}
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
        <SwiperSlide>
          <SliderItem
            changeBackground={() =>
              setVideoContent(
                "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              )
            }
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem changeBackground={() => setVideoContent("2")} />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem changeBackground={() => setVideoContent("3")} />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem changeBackground={() => setVideoContent("4")} />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem changeBackground={() => setVideoContent("5")} />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem changeBackground={() => setVideoContent("6")} />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem changeBackground={() => setVideoContent("7")} />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem changeBackground={() => setVideoContent("8")} />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Intro;
