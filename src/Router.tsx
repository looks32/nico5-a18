import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ErrorComponent from "./components/errorComponent";
import NotFound from "./components/notFound";
import Root from "./Root";
import NowPlaying from "./pages/NowPlaying";
import ComingSoon from "./pages/ComingSoon";


const router = createBrowserRouter([
	{
		path:"",
		element:<Root/>,
		children:[
			{
				path:"",
				element:<Home/>,
				errorElement:<ErrorComponent/>
			},
			{
				path:"comingSoon",
				element:<ComingSoon/>,
				errorElement:<ErrorComponent/>
			},
			{
				path:"nowPlaying",
				element:<NowPlaying/>,
				errorElement:<ErrorComponent/>
			}
		],
		errorElement: <NotFound/>
	}
])


export default router;


