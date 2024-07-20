import styled from "styled-components";
import { makeBgPath, IMoive } from "../api";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { motion } from "framer-motion";


const MiniSlideWrap = styled.div`
	padding: 40px 0;
`

const Inner = styled(motion.div)`
	position: relative;

	a {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.5);
		opacity: 0;
		transition: 0.3s opacity;
		&:hover {
			opacity: 1;
		}
	}
	
	h2 {
		font-size: 20px;
		color: #fff;
	}
	
`
interface ISlidePopular {
	popular: IMoive[];
	layout: string;
}

export default function MiniSlide({popular,layout}:ISlidePopular){
	
	return(
		<MiniSlideWrap>
			<Swiper 
				modules={[Navigation, Pagination]}
				pagination={{ clickable: true }}
				loop={true}
				slidesPerView={5}
				slidesPerGroup={5}
				spaceBetween={15}
				navigation={true}
				className="miniSwiper"
			>
				{popular.map((p:IMoive) => (
					<SwiperSlide key={p.id} >
						<Inner layoutId={`${p.id}${layout}`}>
							<Link to={`/detail/${p.id}?type=${layout}`}>
								<h2>{p.title}</h2>
							</Link>
							<img src={makeBgPath(p.backdrop_path)} alt={p.title}/>
						</Inner>
					</SwiperSlide>
				))}
			</Swiper>
		</MiniSlideWrap>
		
	)
}
