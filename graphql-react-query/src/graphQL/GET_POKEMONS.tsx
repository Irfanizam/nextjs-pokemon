import gql from "graphql-tag";


const GET_POKEMONS = gql `
query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    
    results {
      id
      url
      name
      image
    }
  }
}
`;

export default GET_POKEMONS;
  
 