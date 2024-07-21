import { useQuery } from "@tanstack/react-query";
import React, { useMemo } from 'react';
import { getPopular, getComingSoon, getNowPlaying, IGetMoviesResult, IMoive } from "../api";
import Loading from "../components/Loading";
import CardList from "../components/Card";
import { AllWrap, CardWrap } from "../style/commonStyled";
import styled from "styled-components";

import { Outlet, useParams } from 'react-router-dom';

const SearchWrap = styled.div`

	margin-top: 50px;
	padding: 60px 0;
	h3 {
		
		font-size: 30px;
		color:${(props) => props.theme.textColor};
		text-align: center;
		strong {
			font-weight: bold;
			color:red;
		}
	}
`

const NoResult = styled.div`
	padding: 50px;
	min-height: 50vh;
	font-size: 30px;
	color:${(props) => props.theme.textColor};
`


export default function Search() {

	const {keyword} = useParams();

	const {data : popularData, isLoading : popularLoading} = useQuery<IGetMoviesResult>({ queryKey: ['popular'], queryFn: getPopular });
	const {data : comingData, isLoading: comingLoading} = useQuery<IGetMoviesResult>({ queryKey: ['coming'], queryFn: getComingSoon })
	const {data : nowData, isLoading : nowLoading} = useQuery<IGetMoviesResult>({ queryKey: ['now'], queryFn: getNowPlaying })

	const isLoading = popularLoading || comingLoading || nowLoading;

	const mergedData = useMemo(() => {
		if (popularData && comingData && nowData) {
			const allData = [...popularData.results, ...comingData.results, ...nowData.results];
			const uniqueData = Array.from(new Map(allData.map(item => [item.id, item])).values());
			return uniqueData;
		  }
		  return [];
	}, [popularData, comingData, nowData])


	const filteredData = mergedData.filter(movie => 
		movie.title && keyword &&  movie.title.toLowerCase().includes(keyword.toLowerCase())
	);
	
  return (
	<>
		{isLoading ? <Loading/> : 

			<AllWrap>
				<SearchWrap>
					<h3>
						<strong>"{keyword}"</strong> results for content.
					</h3>
				</SearchWrap>

				{filteredData.length > 0 ?
					<>
					<CardWrap>
						{filteredData.map((p:IMoive) => (
							<CardList id={p.id} title={p.title} poster_path={p.poster_path} layout="menuSearch"/>
						)) }
					</CardWrap>
					</>
				 : <NoResult>No results were found for your search.</NoResult>}

				 <Outlet/>

			</AllWrap>
		}
	</>
  )
}
