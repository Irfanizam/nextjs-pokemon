import { Route } from "@tanstack/react-location"
import Details from "./pages/Details"
import Home from "./pages/Home"

const routes: Route[] = [
    { path: "/", element: <Home /> },
    { path: "/details", element: <Details /> },
]

export default routes