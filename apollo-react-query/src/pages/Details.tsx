
import { Button, Spinner, Stack } from '@chakra-ui/react'
import { Link } from '@tanstack/react-location'
import request, { RequestDocument } from 'graphql-request';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
import { useQuery } from 'react-query';
import PokemonDetails from '../components/PokemonDetails';
import POKEMON_DETAIL from '../graphQL/POKEMON_DETAIL';



export interface Pokemon {
    type: {name: string;}
};

interface PokemonQuery {
    pokemon: {types: Pokemon[]}
};

const endpoint = "https://graphql-pokeapi.graphcdn.app/";

function Details() {
    const queryParams = new URLSearchParams(window.location.search);
    const name = queryParams.get("name");
    const variables = {name: name};

    const pokesDetail = async () => request (
        endpoint,
        POKEMON_DETAIL,
        variables
    )

    const { data, isLoading, error } = useQuery<PokemonQuery>('pokemon', pokesDetail)

    if (error) return (<h1>Something went wrong!</h1>);

    console.log(data);

    return (
        <Stack bg={"green.100"}>
        
        <Link to="/">
          <Button colorScheme={"yellow"}>Go back to Home</Button>
        </Link>

        {!isLoading?         
        (<>
            <PokemonDetails data={data}/>
        </>) : (

        (<Spinner />)
        )}

        </Stack>
    )
}

export default Details