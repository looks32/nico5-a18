import styled from "styled-components";
import { makeBgPath, IMoive } from "../api";
import { Link } from "react-router-dom";


import { Swiper, SwiperSlide } from 'swiper/react';

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
		display: block;
		height: 100%;
	}
	
	h2 {
		font-size: 20px;
		color: #fff;
	}
	
`
interface ISlidePopular {
	popular: IMoive[];
}

export default function MiniSlide({popular}:ISlidePopular){
	
	return(
		<MiniSlideWrap>
			<Swiper 
				pagination={{ clickable: true }}
				loop={true}
				slidesPerView={6}
				spaceBetween={30}
				className="miniSwiper"
			>
				{popular.map((p:IMoive) => (
					<SwiperSlide key={p.id} >
						<Inner layoutId={p.id+""}>
							<Link to={`/detail/${p.id}`}>
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
