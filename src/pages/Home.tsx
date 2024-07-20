import { useQuery } from "@tanstack/react-query";
import { getPopular, getComingSoon, getNowPlaying, IGetMoviesResult, IMoive, makeBgPath } from "../api";
import styled from "styled-components";
import BannerSlide from "../components/BannerSlide";
import { motion, useAnimation, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import CardList from "../components/Card";
import { Link } from "react-router-dom";
import { AllWrap, CardWrap } from "../style/commonStyled";



import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import Tit from "../components/Tit";
import Loading from "../components/Loading";
import MiniSlide from "../components/MiniSlide";

const Cover = styled(motion.div)`
	position: relative;
	margin-top: 60px;

	a {
		display: block;
		width: 100%;
		height: 100%;

		&:hover p {
			 bottom: 30px;
		}

		&:hover img {
			filter: brightness(0.5);
		}

		div {
			position: relative;

			p {
				position: absolute;
				left:10px;
				bottom:10px;
				z-index: 10;
				color:#fff;
				transition: 0.3s bottom;
			}
		}
	}

	img {
		width: 100%;
		filter: brightness(1);
		transition: 0.3s filter;
	}
`

const Num = styled.p`
	position: absolute;
    left: -131px;
    top: 144px;
    z-index: 0;
    color: #000;
    font-size: 310px;
    text-shadow: -1px 0px red, 0px 1px red, 1px 0px red, 0px -1px red;
    letter-spacing: -57.1px;
`



function Home(){

	const {data : popularData, isLoading : popularLoading} = useQuery<IGetMoviesResult>({ queryKey: ['popular'], queryFn: getPopular });
	const {data : comingData, isLoading: comingLoading} = useQuery<IGetMoviesResult>({ queryKey: ['coming'], queryFn: getComingSoon })
	const {data : nowData, isLoading : nowLoading} = useQuery<IGetMoviesResult>({ queryKey: ['now'], queryFn: getNowPlaying })

	// 작업 다 하면 삭제
	console.log(popularData);

	const isLoading = popularLoading || comingLoading || nowLoading;

	return (
		<AllWrap>	
			{
				isLoading ? <Loading/> :
				<>
					<BannerSlide popular={popularData?.results || []}/>
					<Tit cont="Today's TOP 10"/>
					<Swiper
						effect={'coverflow'}
						grabCursor={true}
						centeredSlides={true}
						slidesPerView={'auto'}
						coverflowEffect={{
							rotate: 50,
							stretch: 0,
							depth: 100,
							modifier: 1,
							slideShadows: true,
						}}
						pagination={true}
						modules={[EffectCoverflow]}
						className="popularSwiper"
					>
						{popularData?.results.slice(0,10).map((p:IMoive, i:number) => (
							<SwiperSlide>
								<Cover key={p.id} layoutId={p.id+""}>
									<Link to={`/detail/${p.id}`}>
										<Num>{i+1}</Num>
										<div>
											<p>{p.title}</p>
											<img src={makeBgPath(p.poster_path)} alt={p.title} />
										</div>
									</Link>
								</Cover>
							</SwiperSlide>
							
						)) }
					</Swiper>

					<Tit cont="Popular"/>

					<MiniSlide popular={popularData?.results || []} layout="popular"/>

					<Tit cont="Coming Soon"/>

					<MiniSlide popular={comingData?.results || []} layout="coming"/>

					<Tit cont="Now Playing"/>

					<MiniSlide popular={nowData?.results || []} layout="now"/>
			</>
			}
		</AllWrap>

	)
}

export default Home;