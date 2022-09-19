import { Box, Button, Heading, Image, Stack } from "@chakra-ui/react";
import React, { useState } from "react";

const POKEMON_DETAIL = `
query pokemon( $name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

const gqlVariables = {
  name: "bulbasaur",
};

export default function PokemonDetail() {
  const pokemons = useDetail();
  //   const [page, setPage] = useState('');

  return (
    <div>
      <ul>
        {pokemons.map((item: { move: { name: string } }, i: number) => (
          <p key={i}>{item.move.name}</p>
        ))}
      </ul>
      {/* <Box>
        {pokemons.map((item: { image: string }, i: number) => (
          <li key={i}>{item.image}</li>
        ))}
      </Box> */}
    </div>
  );
}

function useDetail() {
  const [poke, setPoke] = React.useState([]);
  //   const [pokemonName, setPokemonName] = React.useState('');
  React.useEffect(() => {
    fetch("https://graphql-pokeapi.graphcdn.app/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: POKEMON_DETAIL, variables: gqlVariables }),
    })
      .then((res) => res.json())
      .then((data) => setPoke(data.data.pokemon.moves));
  }, []);
  return poke;
}