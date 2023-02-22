import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { Image } from "@chakra-ui/react";

interface Props {
	src: string[];
}
export default function SlideShow({src}: Props) {
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
				style={{ width: "100%", height: "100%" }}
				loop={true}
				>
				<SwiperSlide>
          <Image src={src[0]} alt='slide1' />
        </SwiperSlide>
				<SwiperSlide>
          <Image src={src[1]} alt='slide2' />
        </SwiperSlide>
			</Swiper>
		</>
	);
}

