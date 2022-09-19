import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./components/Home";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../styles/theme";
import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import routes from "./app.routing";

const client = new QueryClient();
const location = new ReactLocation()

function App() {
  return (
      <QueryClientProvider client={client}>
        <Router 
        location={location}
        routes={routes}
        >
          <Outlet />
        </Router>
      </QueryClientProvider>
  );
}

export default App;