import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Image, useBreakpointValue } from "@chakra-ui/react";
import SlidesCard from "./SlidesCard";
import axios from "axios";
interface Props {
	src: string[];
	withNavigation?: boolean;
}
export default function SlideShow({ src, withNavigation }: Props) {
	const url = "https://swanky-elated-magnosaurus.glitch.me/kitchen";
	const [product, setProduct] = useState([]);
  
	React.useEffect(() => {
		axios.get(url).then((res) => {
			setProduct(res.data);
		});
	}, []);

	const preview = useBreakpointValue({ base: 1, md: 2, lg: 3, '2xl': 5});
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
				(
					<Swiper
						slidesPerView={preview}
						spaceBetween={30}
						loop={true}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Pagination, Navigation]}
						className="mySwiper"
						style={{
							width: "100%",
							height: "100%",
							"--swiper-navigation-color": "#00000",
							"--swiper-pagination-color": "#fff",
						}}
					>
						{product.slice(0,20).map((item) => {
							const { title, price, image: [{ src }] } = item;
							return <SwiperSlide>
								<SlidesCard
									title={title}
									price={price}
									src={src}
								/>
							</SwiperSlide>
						})}

					</Swiper>
				)
			}
		</>
	);
}

