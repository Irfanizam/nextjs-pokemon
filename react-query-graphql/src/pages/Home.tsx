import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Spacer,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import request from "graphql-request";
import { useQuery } from "react-query";
import { PokemonQuery } from "../components/PokemonNames";
import PokemonNames from "../components/PokemonNames";
import GET_POKEMONS from "../graphQL/GET_POKEMONS";
import { Link } from "@tanstack/react-location";

export default function Home() {
  const [page, setPage] = useState(0);

  const endpoint = "https://graphql-pokeapi.graphcdn.app/";
  const gqlVariables = {
    limit: 10, 
    offset: page * 10, 
  };
  const fetchData = async (page: any) =>
    await request(endpoint, GET_POKEMONS, gqlVariables);

  const { data, isFetching, error, isPreviousData } = useQuery<PokemonQuery>(
    ["pokemons", page], () => fetchData(page), { keepPreviousData: true}
  );

  console.log(data)
  return (
    <>
      <Box >

        <Stack >
          <Heading padding={2 }>
            <Image src="../public/image/poke_logo.png" alt="../public/image/poke_logo.png"  boxSize='100px'
            />
            Pokemons
          </Heading>
          <Box padding={2}>Page {page + 1}</Box>

        </Stack>
        <Stack textAlign={"center"}>
        <Link to="/scroll">
          <Button bg={"orange"} type="button" top={-50}>Go to Scroll</Button>
        </Link>
        </Stack>
          <Button
            left={1250}
            top={-100}
            colorScheme={"orange"}
            disabled={!page}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Previous
          </Button>
          <Button
            left={1300}
            top={-100}
            colorScheme={"orange"}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </Button>
        <>{error && <h1>ERROR</h1>}</>
        {isFetching ? (
          <Spinner />
        ) : (
          <PokemonNames pokemons={data!.pokemons.results} />
        )}
      </Box>
    </>
  );
}