import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getNowPlaying, IGetMoviesResult, IMoive } from "../api";
import CardList from "../components/Card";
import { Outlet, useMatch } from "react-router-dom";
import { AllWrap, CardWrap, SubInner } from "../style/commonStyled";
import Loading from "../components/Loading";
import Tit from "../components/Tit";

export default function NowPlaying() {

  const {data, isLoading} = useQuery<IGetMoviesResult>({ queryKey: ['now'], queryFn: getNowPlaying })
  const bigMovieMatch = useMatch("/nowplaying/detail/:movieId");

  return (

    <AllWrap>
		<SubInner>	
		{
			isLoading ? <Loading/> :
			<>
				<Tit cont="Now Playing"/>
				<CardWrap>
					{data?.results.map((p:IMoive) => (
						<CardList id={p.id} title={p.title} poster_path={p.poster_path} layout="menuNow"/>
					)) }
				</CardWrap>
				{bigMovieMatch ? (
					<>
						<Outlet/>
					</>
				) : null}
			</>
		}
		</SubInner>
	</AllWrap>

  );
}
