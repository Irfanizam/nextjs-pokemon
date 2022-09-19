import { Button } from '@chakra-ui/react'
import { Link } from '@tanstack/react-location'
import React from 'react'
import GetAllPokemons from '../graphql/GetAbilities'
import GetAbilities from '../graphql/GetAbilities'


interface Props {}

//function Details(props: Props) {
    //const {} = props
    //const queryParams = new URLSearchParams(window.location.search)
    
    //const name = queryParams.get("name")
    //console.log(queryParams.get('id'));
    // const [poke, setPoke] = useState([]);


function Home() {

    return (
        <div>
            <GetAbilities/>
        </div>
    )
}

export default Home