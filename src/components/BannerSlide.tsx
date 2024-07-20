import styled from "styled-components";
import { makeBgPath, IMoive } from "../api";
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef } from 'react';


import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const BannerWrap = styled.div`
	/* padding-top: 40px; */
	
`

const Banner = styled.div`
	color: #fff;
`

const BannerInner = styled.div`
	position: relative;

	> div {
		position: absolute;
		left: 20px;
		bottom: 100px;
	}

	h2 {
		font-size: 40px;
	}

	p {
		max-width: 600px;
		margin-top: 20px;
		font-size: 20px;
	}

	img {
		width: 100%;
		height: 90vh;
		object-fit: cover;
	}
`
interface ISlidePopular {
	popular: IMoive[];
}

export default function BannerSlide({popular}:ISlidePopular){
	const progressCircle = useRef<any | undefined>(null);
	const progressContent = useRef<any | undefined>(null);
	const onAutoplayTimeLeft = (s:string, time:number, progress:number) => {
		progressCircle.current.style.setProperty('--progress', `${1 - progress}`);
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	};

	return(
		<BannerWrap>
			<Swiper 
				pagination={{ clickable: true }}
				modules={[Pagination, Autoplay]}
				onAutoplayTimeLeft={onAutoplayTimeLeft}
				loop={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
			>
				{popular.slice(0,5).map((p:IMoive) => (
					<SwiperSlide key={p.id} >
						<Banner>
							<BannerInner>
								<div >
									<h2>{p.title}</h2>
									<p>{p.overview ? (p.overview.length < 150 ? p.overview : `${p.overview.slice(0, 150)}...`) : ''}</p>
								</div>
								<img src={makeBgPath(p.backdrop_path)} alt={p.title} />
							</BannerInner>
						</Banner>
					</SwiperSlide>
				)) }
				<div className="autoplay-progress" slot="container-end">
					<svg viewBox="0 0 48 48" ref={progressCircle}>
						<circle cx="24" cy="24" r="20"></circle>
					</svg>
					<span ref={progressContent}></span>
				</div>
			</Swiper>
		</BannerWrap>
		
	)
}
