import React from "react";
import { pokemonQuery } from "../graphQL/pokemonQuery";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { Link } from "@tanstack/react-location";
 

export interface Pokemon {
  id: string;
  name: string;
  image: string;
  }
export interface PokemonQuery {
  pokemons: {results: Pokemon[]};
}
  

interface Props {
    pokemons: Pokemon[]
  }

  export default function PokemonNames({pokemons}: Props){

    return(
        <SimpleGrid >
        {pokemons.map((p: Pokemon, i: number) => {
            return <Link key={i} to={`/details?name=${p.name}`}>
         <Box  
         maxWidth={160}
         display={"inline-grid"}
         background={"orange"}
         border={"none"}
         borderRadius={5}
         color={"black"}
         padding={15}
         textAlign={"center"}
         margin={4}
        
         >
            <Box className="display"
              maxW={"300px"}
              height="180px"
              p={4}
              textTransform="capitalize"
              fontWeight={"bold"}
              
            >
            {p.id} {p.name}    

            <Image
              w={{ base: "80px", sm: "90px", lg: "150px" }}
              h={{ base: "80px", sm: "90px", lg: "150px" }}
              objectFit={"fill"}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                p.id
              }.png`}
              alt="pokemon_image"
            />      
            </Box>
          </Box>       
            </Link>
        })}
        </SimpleGrid>
    );
}
