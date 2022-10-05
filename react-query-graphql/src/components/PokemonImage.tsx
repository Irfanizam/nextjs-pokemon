import { Circle, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

export interface Img {
    name: string;
    id: number;
}

interface Props {
  props: Img;
}

function PokemonImage({ props }: Props) {
  console.log(props);
  return (
    <Flex >
      <Stack align={"center"}>
        <Heading >{props.id}</Heading>
        <Text >
          {props.name}
        </Text>
        <Circle bg={"orange"} border="4px">
          <Image
            w={{ base: "100px", sm: "150px", lg: "200px" }}
            h={{ base: "100px", sm: "150px", lg: "200px" }}
            objectFit={"fill"}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
            alt="pokemon-image"
          />
        </Circle>
      </Stack>
    </Flex>
  );
}

export default PokemonImage;