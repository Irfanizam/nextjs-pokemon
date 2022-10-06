import routes from "./app.routing";
import theme from "../styles/theme";
import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";

const location = new ReactLocation()
const queryClient = new QueryClient();


function App() {
  return <QueryClientProvider client={queryClient} >
    {""}
    <ChakraProvider theme={theme}>
        <Router 
        location={location}
        routes={routes}
        >
          <Outlet />
        </Router>
    </ChakraProvider>
  </QueryClientProvider>
}

export default App;