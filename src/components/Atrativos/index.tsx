import { Grid, GridItem } from "@chakra-ui/react"
import { Atrativo } from "./Atrativo";

export function Atrativos() {
  return (
    <Grid
      templateColumns= {[ '1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={['10', '32']}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
      flexWrap="wrap"
    >
      <GridItem>
        <Atrativo icon="cocktail" text="Vida noturna"/>
      </GridItem>

      <GridItem>
        <Atrativo icon="praia" text="praia"/>
      </GridItem>

      <GridItem>
        <Atrativo icon="moderno" text="moderno"/>
      </GridItem>

      <GridItem>
        <Atrativo icon="classico" text="classico"/>
      </GridItem>

      <GridItem colSpan={[2, 2, 2, 1]}>
        <Atrativo icon="Globo" text="e mais..."/>
      </GridItem>
    </Grid>
  );
}