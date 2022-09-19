import { Box, Button, VStack, Image } from "@chakra-ui/react";
import { Link } from "@tanstack/react-location";
import React from "react";

const POKEMON_NAME = `
query pokemons {
  pokemons {
    count
    results {
      name
      url
      image
    }
  }
}
`;

export default function GetAllPokemons() {
  const poke = usePoke();

  return (
    <VStack >
    <div>
      {poke.map((name: { name: string }, i: number) => (
      <Box key={i} className="cardPoke">
         <Image
                  w={{ base: "80px", sm: "90px", lg: "150px" }}
                  h={{ base: "80px", sm: "90px", lg: "150px" }}
                  objectFit={"contain"}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    i + 2
                  }.png`}
                  alt="pokemon_image"
                />
        <Link key={i} to = {`/Details?name=${name.name}`} >
        <Button className="button1" >
          {name.name}
        </Button>
        </Link>
      </Box>
      ))}
    </div>
    </VStack>
  );
}

function usePoke() {
  const [poke, setPoke] = React.useState([]);
  React.useEffect(() => {
    fetch("https://graphql-pokeapi.graphcdn.app/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: POKEMON_NAME }),
    })
      .then((res) => res.json())
      .then((data) => setPoke(data.data.pokemons.results));
  }, []);
  return poke;
}