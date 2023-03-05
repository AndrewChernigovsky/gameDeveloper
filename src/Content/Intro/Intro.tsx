import { Box } from "@chakra-ui/react";
import { useState } from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderItem from "./SliderItem";

const Intro = () => {
  const [videoContent, setVideoContent] = useState("UVZobZBuEO0");

  return (
    <Box className="intro-section">
      <div
        className="video-block"
        style={{
          height: "100vh",
          width: "100%",
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
    </Box>
  );
};

export default Intro;
