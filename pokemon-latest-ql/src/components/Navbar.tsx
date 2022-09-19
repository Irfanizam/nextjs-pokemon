import { Box, Button, ButtonGroup, Heading, Stack } from "@chakra-ui/react";

interface Props {
  setPage: any;
}

export default function Navbar({ setPage }: Props) {
  return (
    <>
      <Stack as={Box} textAlign={"center"} align={"center"}>
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          marginTop={2}
        >
          Pokemon App
        </Heading>
        <Stack direction="row">
          <ButtonGroup size="sm">
            <Button colorScheme="orange" onClick={() => setPage("pokemons")}>
              Pokemon Names
            </Button>
            <Button colorScheme="orange" onClick={() => setPage("PokeInfo")}>
              Pokemon Info
            </Button>
          </ButtonGroup>
        </Stack>
      </Stack>
    </>
  );
}