import { Route } from "@tanstack/react-location"
import Details from "./pages/Details"
import Home from "./pages/Home"
import Scroll from "./pages/Scroll"

const routes: Route[] = [
    { path: "/", element: <Home /> },
    { path: "/details", element: <Details /> },
    { path: "/scroll", element: <Scroll /> },

]

export default routes