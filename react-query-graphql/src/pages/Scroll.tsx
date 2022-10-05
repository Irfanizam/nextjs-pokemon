import request from "graphql-request";
import { useInfiniteQuery } from "react-query"
import GET_POKEMONS from "../graphQL/GET_POKEMONS";
import { PokemonQuery } from "../components/PokemonNames"
import { useEffect } from 'react';
import {useRef, useCallback} from 'react'
import { Link } from "@tanstack/react-location";
import { Box, Button, Img, Stack } from "@chakra-ui/react";


export default function Scroll() {
  const observerElem = useRef(null)
    const LIMIT = 10
    const endpoint = "https://graphql-pokeapi.graphcdn.app/";
    const fetchData = async (page: any) =>
    await request(endpoint, GET_POKEMONS);
    
    const {data, isSuccess, error, hasNextPage, fetchNextPage, isFetchingNextPage} = useInfiniteQuery<PokemonQuery>(
      'pokemons', 
      ({pageParam = 1}) => fetchData(pageParam),
      {
        getNextPageParam: (lastPage, allPages) => {
          const nextPage = allPages.length + 1
          return lastPage.pokemons.results.length !== 0 ? nextPage : undefined
        }
      }
    )
    const handleObserver = useCallback((entries: any) => {
      const [target] = entries
      if(target.isIntersecting && hasNextPage) {
        fetchNextPage()
      }
    }, [fetchNextPage, hasNextPage])
    
    useEffect(() => {
      const element = observerElem.current
      const option = { threshold: 0 }
    
      const observer = new IntersectionObserver(handleObserver, option);
      observer.observe(element!)
      return () => observer.unobserve(element!)
    }, [fetchNextPage, hasNextPage, handleObserver])
    useEffect(() => {
      let fetching = false;
      const handleScroll = async (e: any) => {
        const {scrollHeight, scrollTop, clientHeight} = e.target.scrollingElement;
        if(!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
          fetching = true
          if(hasNextPage) await fetchNextPage()
          fetching = false
        } 
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [fetchNextPage, hasNextPage])
    console.log(data)    

      return (
        <div>
          <Stack padding={4}>
          <Link to="/">
          <Button bg={"orange"}>Go back Home</Button>
          </Link>
          </Stack>
          
    {isSuccess && data.pages.map(page => 
    page.pokemons.results.map((pokemon) => (
      <div key={pokemon.id}>
        
        <Box className="display"
              maxW={"300px"}
              display={"inline-grid"}
              height="180px"
              p={4}
              border={"none"}
              borderRadius={5}
              color={"black"}
              padding={15}
              textAlign={"center"}
              margin={4}
              textTransform="capitalize"
              fontWeight={"bold"}
              background={"orange"}>
        <span>{pokemon.name}</span>
        <Img 
            w={{ base: "100px", sm: "150px", lg: "200px" }}
            h={{ base: "100px", sm: "150px", lg: "200px" }}
            objectFit={"fill"}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt="pokemon-image"
          />
          </Box>
      </div>
      
    ))
  )}
  <div ref={observerElem}>
    {isFetchingNextPage && hasNextPage ? 'Loading...' : 'No search left'}
  </div>
</div>

  )  
}