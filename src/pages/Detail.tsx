import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getMovie, IMoive } from '../api';
import { useQuery } from '@tanstack/react-query';


const Overlay = styled.div`
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

	// 나중에 삭제
	console.log(data)

  return (
	<>
		{/* 로딩 수정예정 */}
		{isLoading ? <div>loading...</div> : 
			<Overlay>
				Detail {movieId}
				<div>{data?.title}</div>
				<div>{data?.overview}</div>
				<div>{data?.runtime}</div>
				<div>{data?.vote_average}</div>
				<div>{data?.backdrop_path}</div>
			</Overlay>
		}
	</>
  )
}
