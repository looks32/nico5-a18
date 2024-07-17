import { useQuery } from "@tanstack/react-query";
import { getPopular, IGetMoviesResult, IMoive, makeBgPath } from "../api";
import styled from "styled-components";
import BannerSlide from "../components/BannerSlide";
import { motion, useAnimation, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import CardList from "../components/Card";
import { Outlet } from "react-router-dom";
import { AllWrap, CardWrap } from "../style/commonStyled";



function Home(){

	const {data, isLoading} = useQuery<IGetMoviesResult>({ queryKey: ['popular'], queryFn: getPopular })

	// const [max, setMax] = useState(10)

	// 작업 다 하면 삭제
	console.log(data);

	const { scrollYProgress } = useScroll();

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // console.log("Page scroll: ", latest)

		// console.log('max',max)
        // if(latest === 1){
        //     console.log('ababab',latest)
		// 	setMax((prev)=> prev +10);
			
        // } else {
        //     console.log('b',latest)
		// 	//setMax((prev)=> prev +10);
        // }
    })

	return (
		<AllWrap>	
			{/* 로딩 추가해야함 */}
			{
				isLoading ? <div>loading</div> :
				<>
					<BannerSlide popular={data?.results || []}/>

					<CardWrap>
						{data?.results.map((p:IMoive) => (
							<CardList id={p.id} title={p.title} poster_path={p.poster_path}/>
						)) }
					</CardWrap>
					<Outlet/>
			</>
			}
		</AllWrap>

	)
}

export default Home;