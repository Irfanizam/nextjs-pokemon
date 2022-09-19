import { useState } from "react";
import Navbar from "./Navbar";
import { Container, Flex } from "@chakra-ui/react";
import GetAbilities from "../graphql/GetAbilities";
import GetAllPokemons from "./GetAllPokemons";

function App() {
  const [page, setPage] = useState([]);

  return (
    <Flex bg="orange.100">
      <Container maxW={"3xl"}>
        <Navbar setPage={setPage} />
        <GetAllPokemons />
        {/* <GetAbilities /> */}
        {/* {page === "pokemons" ? <Pokemons /> : <Bulbasaur />} */}
      </Container>
    </Flex>
  );
}

export default App;