import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Image } from "@chakra-ui/react";
interface Props {
	src: string[];
	withNavigation?: boolean;
}
export default function SlideShow({ src, withNavigation }: Props) {
	return (
		<>
			{!withNavigation ? (<Swiper
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
			</Swiper>) :
				(<Swiper
					spaceBetween={30}
					centeredSlides={true}
					modules={[Navigation, Pagination]}
					style={{
						width: "100%",
					  height: "100%",
            '--swiper-navigation-color': '#00000',
						'--swiper-pagination-color': '#fff',   
					}}
					loop={true}
					navigation={true}
					pagination={true}
				>
					<SwiperSlide>
						<Image src={src[0]} alt='slide1' />
					</SwiperSlide>
					<SwiperSlide>
						<Image src={src[1]} alt='slide2' />
					</SwiperSlide>
				</Swiper>)
			}
		</>
	);
}

