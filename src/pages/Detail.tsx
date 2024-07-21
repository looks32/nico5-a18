import React, { useEffect } from 'react';
import { useLocation, useNavigate , useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getMovie, IMoive, makeImagePath } from '../api';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';

const Overlay = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 100;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.5);
	color:#fff;
`

const Box = styled(motion.div)`
	width:500px;
	height:600px;
	background-color: #000;
	border-radius: 20px;
	strong {
		display: inline-block;
		position: relative;
		padding-left: 20px;
		top: -18px;
		font-size: 30px
	}
	p {
		padding: 0 30px;
		~ p {
			margin-top: 10px;
		}
	}
`
const ImgBox = styled.div`
	min-height: 281px;
	img {
		filter: brightness(0.7);
		border-radius: 20px 20px 0 0;
	}
`

const ScrollBox = styled.div`
	height: calc(600px - 400px);
	overflow: auto;
	&::-webkit-scrollbar {
		display: block;
		width:5px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #fff;
	}
`

export default function Detail() {
	const {movieId} = useParams<string>();
	const {data, isLoading} = useQuery<IMoive>({ queryKey: ['movie', movieId ],  queryFn: () => getMovie(movieId) });

	// 팝업 고정
	useEffect(() => {
		setTimeout(function(){
			document.body.style.cssText = `
			position: fixed; 
			top: -${window.scrollY}px;
			overflow-y: scroll;
			width: 100%;`;
		}, 500);

		return () => {
		setTimeout(function(){
		  const scrollY = document.body.style.top;
		  document.body.style.cssText = "";
		  window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
		}, 500);
		};
	  }, []);

	// 뒤로가기
	const navigate = useNavigate();
	const overlayClick = () => navigate(-1);

	const location = useLocation();
	const type = new URLSearchParams(location.search).get('type');

	const decimal = (num:number | undefined) => {
		if (num === undefined) {
			return 0; 
		}
			return Math.floor(num * 10) / 10;
	}

  return (
	<>
		<Overlay onClick={overlayClick}  layoutId={`${movieId}${type}`}>
			<Box key={movieId}>
				<ImgBox>
					<img src={makeImagePath(data?.backdrop_path)} alt={data?.title} />
				</ImgBox>
				<strong>{data?.title}</strong>
				<ScrollBox>
					<p>{data?.overview}</p>
					<p>runtime : {data?.runtime}m</p>
					<p>rating : {decimal(data?.vote_average)}</p>
				</ScrollBox>
			</Box>
		</Overlay>
	</>
  )
}
