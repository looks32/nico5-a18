import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ErrorComponent from "./components/ErrorComponent";
import NotFound from "./components/NotFound";
import Root from "./Root";
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


