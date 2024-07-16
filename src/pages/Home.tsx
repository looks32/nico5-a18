import { useQuery } from "@tanstack/react-query";
import { getPopular, IGetMoviesResult, makeBgPath } from "../api";
import styled from "styled-components";
import BannerSlide from "../components/BannerSlide";




function Home(){

	const {data, isLoading} = useQuery<IGetMoviesResult>({ queryKey: ['popular'], queryFn: getPopular })

	// 작업 다 하면 삭제
	console.log(data);

	return (
		<>	
			{/* 로딩 추가해야함 */}
			{
				isLoading ? <div>loading</div> :
				<>
					<BannerSlide popular={data?.results || []}/>
				</>
			}
		</>

	)
}

export default Home;