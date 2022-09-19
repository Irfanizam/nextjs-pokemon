import { Box, Button, VStack } from "@chakra-ui/react"
import { Link } from "@tanstack/react-location"
import { useEffect, useState } from "react"
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


interface Props {}

function Details(props: Props) {
    const {} = props
    const queryParams = new URLSearchParams(window.location.search)
    
    const name = queryParams.get("name")
    //console.log(queryParams.get('id'));
    const [poke, setPoke] = useState([]);


    useEffect(() => {
      fetch("https://graphql-pokeapi.graphcdn.app/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: POKEMON_DETAIL, variables: {name: name} }),
      })
        .then((res) => res.json())
        .then((data) => setPoke(data.data.pokemon.moves));
    }, []);

    return (
      <VStack>
        {poke.map((detail: {move: {name: string}}, i: number) => (
          <Box className="display">
            <li key = {i}>{detail.move.name}</li>
          </Box>
        ))}
        <div>
        <Link to="/">
            <Button className="button2">
            go to home
            </Button>
        </Link>
      </div> 
      </VStack>
      
    )
}

export default Details