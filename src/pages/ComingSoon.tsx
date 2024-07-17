import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getComingSoon, IGetMoviesResult, IMoive, makeBgPath } from "../api";
import styled from "styled-components";
import BannerSlide from "../components/BannerSlide";
import { motion, useAnimation, useScroll, useMotionValueEvent } from "framer-motion";
import CardList from "../components/Card";
import { Outlet } from "react-router-dom";
import { AllWrap, CardWrap } from "../style/commonStyled";

export default function ComingSoon() {

  const {data, isLoading} = useQuery<IGetMoviesResult>({ queryKey: ['coming'], queryFn: getComingSoon })

  return (

    <AllWrap>	
			{/* 로딩 추가해야함 */}
			{
				isLoading ? <div>loading</div> :
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
