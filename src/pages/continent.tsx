import { Flex } from "@chakra-ui/react";
import { ContentGrid } from "../components/ContentGrid";
import { ContinentDetails } from "../components/ContinentDetails";
import { Header } from "../components/Header";
import { SessionCyties } from "../components/SessionCyties";

export default function Continent(){
  return(
    <Flex direction="column">
      <Header />
      <ContinentDetails />

      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <ContentGrid />
        <SessionCyties />
      </Flex>  

    </Flex>
  );
}