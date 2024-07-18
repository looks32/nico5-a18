import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPopular, IGetMoviesResult, IMoive, makeBgPath } from "../api";
import styled from "styled-components";
import BannerSlide from "../components/BannerSlide";
import { motion, useAnimation, useScroll, useMotionValueEvent } from "framer-motion";
import CardList from "../components/Card";
import { Outlet } from "react-router-dom";
import { AllWrap, CardWrap } from "../style/commonStyled";
import Loading from "../components/Loading";

export default function Popular() {

	const {data, isLoading} = useQuery<IGetMoviesResult>({ queryKey: ['popular'], queryFn: getPopular });

  return (

    <AllWrap>	
			{
				isLoading ? <Loading/> :
				<>
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
