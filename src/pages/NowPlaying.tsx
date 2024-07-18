import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getNowPlaying, IGetMoviesResult, IMoive, makeBgPath } from "../api";
import styled from "styled-components";
import BannerSlide from "../components/BannerSlide";
import { motion, useAnimation, useScroll, useMotionValueEvent } from "framer-motion";
import CardList from "../components/Card";
import { Outlet } from "react-router-dom";
import { AllWrap, CardWrap } from "../style/commonStyled";
import Loading from "../components/Loading";
import Tit from "../components/Tit";

export default function NowPlaying() {

  const {data, isLoading} = useQuery<IGetMoviesResult>({ queryKey: ['now'], queryFn: getNowPlaying })

  return (

    <AllWrap>	
			{
				isLoading ? <Loading/> :
				<>
					<Tit cont="Now Playing"/>
					<CardWrap>
						{data?.results.map((p:IMoive) => (
							<CardList id={p.id} title={p.title} poster_path={p.poster_path}/>
						)) }
					</CardWrap>
					<Outlet/>
			</>
			}
		</AllWrap>

  );
}
