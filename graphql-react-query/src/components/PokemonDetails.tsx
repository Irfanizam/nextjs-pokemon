import { Box, Flex, Heading, SimpleGrid, Spinner, Stack, Text } from '@chakra-ui/react';
import React from 'react'

interface Props {
  [x: string]: any;
}

export default function PokemonDetails(data: Props) {
 

  return (
    <>
    <Flex>
      <Heading className='h1'> Moves: </Heading>
      </Flex>
      <SimpleGrid>

      {data.data.pokemon.moves.map((p: { move: { name: string }}, i: number) => (
              <Box className='cardPoke'
                key={i}>
                {p.move.name}
              </Box>
            ))}

      
</SimpleGrid>
      </>
  )
}
