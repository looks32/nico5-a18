import { useQuery } from "@tanstack/react-query";
import { getPopular } from "../api";

function Home(){

	const {data, isLoading} = useQuery({ queryKey: ['popular'], queryFn: getPopular })
	console.log(data)
	return (
		<>	
			{/* 로딩 추가해야함 */}
			{isLoading ? <div>loading</div> : <div>Home</div>}
		</>

	)
}

export default Home;