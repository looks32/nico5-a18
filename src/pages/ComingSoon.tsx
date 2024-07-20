import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getComingSoon, IGetMoviesResult, IMoive } from "../api";
import CardList from "../components/Card";
import { Outlet, useMatch } from "react-router-dom";
import { AllWrap, CardWrap, SubInner } from "../style/commonStyled";
import Loading from "../components/Loading";
import Tit from "../components/Tit";

export default function ComingSoon() {

  const {data, isLoading} = useQuery<IGetMoviesResult>({ queryKey: ['coming'], queryFn: getComingSoon })
  const bigMovieMatch = useMatch("/comingsoon/detail/:movieId");
  return (

    <AllWrap>
		<SubInner>
			{
				isLoading ? <Loading/> :
				<>
					<Tit cont="Coming Soon"/>
					<CardWrap>
						{data?.results.map((p:IMoive) => (
							<CardList id={p.id} title={p.title} poster_path={p.poster_path} layout="menuComing"/>
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
