import React from 'react';
import { useLocation, useNavigate , useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { getMovie, IMoive } from '../api';
import { useQuery } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';
import Loading from '../components/Loading';



const Overlay = styled(motion.div)`
	position: fixed;
	left: 0;
	top: 0;
	z-index: 100;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.5);

	color:#fff;
`

export default function Detail() {
	const {movieId} = useParams<string>();
	const {data, isLoading} = useQuery<IMoive>({ queryKey: ['movie', movieId ],  queryFn: () => getMovie(movieId) })

	// 뒤로가기
	const navigate = useNavigate();
	const overlayClick = () => navigate(-1);

	const location = useLocation();
	const type = new URLSearchParams(location.search).get('type');

  return (
	<>
		<Overlay onClick={overlayClick}>
			<motion.div key={movieId} layoutId={`${movieId}${type}`}>
				Detail {movieId}
				<div>{data?.title}{`${movieId}${type}`}</div>
				<div>{data?.overview}</div>
				<div>{data?.runtime}</div>
				<div>{data?.vote_average}</div>
				<div>{data?.backdrop_path}</div>
			</motion.div>
		</Overlay>
	</>
  )
}
