import { Box, Stack, Text } from "@chakra-ui/react";
import PokemonNames from "../components/PokemonNames";
import GET_POKEMONS from "../graphQL/GET_POKEMONS";
import { pokemonQuery } from "../graphQL/pokemonQuery";

interface Props {}

export default function Home(props: Props) {
  const queryParams = new URLSearchParams(window.location.search);
  const name = queryParams.get("name");

  const { data, isLoading, error } = pokemonQuery ('pokemons', GET_POKEMONS);
    console.log(data);
  
      if (isLoading) return <div>Loading ...</div>;
      if (error) return <div>Something went wrong ...</div>
  

  return (
    <Box maxW={"full"} alignContent={"center"} bg="teal.100">

      <Stack >
        <Text className="h1" >
          Pokemons
        </Text>
        
      </Stack>

      {isLoading ? (<h1>LOADING...</h1>): (<PokemonNames pokemons={data!.pokemons.results} />)}
    </Box>
  );
}
