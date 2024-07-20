import { useQuery } from "@tanstack/react-query";
import React, { useMemo } from 'react';
import { getPopular, getComingSoon, getNowPlaying, IGetMoviesResult, IMoive, makeBgPath } from "../api";
import Loading from "../components/Loading";
import CardList from "../components/Card";
import { AllWrap, CardWrap } from "../style/commonStyled";
import styled from "styled-components";

import { useNavigate , useParams } from 'react-router-dom';


const SearchWrap = styled.div`

	margin-top: 50px;
	padding: 60px 0;
	h3 {
		
		font-size: 30px;
		color:#fff;
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
	color: #fff;
`


export default function Search() {

	const {keyword} = useParams();

	console.log('keyword',keyword);

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

	// 나중에 삭제
	console.log('last',mergedData)

	const filteredData = mergedData.filter(movie => 
		movie.title && keyword &&  movie.title.toLowerCase().includes(keyword.toLowerCase())
	);
	console.log(filteredData.length)

	
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
							<CardList id={p.id} title={p.title} poster_path={p.poster_path}/>
						)) }
					</CardWrap>
					</>
				 : <NoResult>No results were found for your search.</NoResult>}

			</AllWrap>
		}
	</>
  )
}
