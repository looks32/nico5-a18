import { createBrowserRouter } from "react-router-dom";
import ErrorComponent from "./components/errorComponent";
import NotFound from "./components/notFound";
import Root from "./Root";
import Home from "./pages/Home";
import NowPlaying from "./pages/NowPlaying";
import ComingSoon from "./pages/ComingSoon";
import Detail from "./pages/Detail";
import Popular from "./pages/Popular";


const router = createBrowserRouter([
	{
		path:"",
		element:<Root/>,
		children:[
			{
				path:"",
				element:<Home/>,
				errorElement:<ErrorComponent/>,
				children:[
					{
						path:"/detail/:movieId",
						element:<Detail/>,
						errorElement:<ErrorComponent/>,
					},
				],
			},
			{
				path:"popular",
				element:<Popular/>,
				errorElement:<ErrorComponent/>,
				children:[
					{
						path:"detail/:movieId",
						element:<Detail/>,
						errorElement:<ErrorComponent/>,
					},
				],
			},
			{
				path:"comingSoon",
				element:<ComingSoon/>,
				errorElement:<ErrorComponent/>,
				children:[
					{
						path:"detail/:movieId",
						element:<Detail/>,
						errorElement:<ErrorComponent/>,
					},
				],
			},
			{
				path:"nowPlaying",
				element:<NowPlaying/>,
				errorElement:<ErrorComponent/>,
				children:[
					{
						path:"detail/:movieId",
						element:<Detail/>,
						errorElement:<ErrorComponent/>,
					},
				],
			}
		],
		errorElement: <NotFound/>
	}
])


export default router;


