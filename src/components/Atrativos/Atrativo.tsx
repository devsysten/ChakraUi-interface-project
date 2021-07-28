/* eslint-disable jsx-a11y/alt-text */
import { Image } from "@chakra-ui/image";
import { Text, Flex } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

interface AtrativoProps{
  icon: string;
  text: string;
}

export function Atrativo({ icon, text }:AtrativoProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  });
  return (
    <Flex  direction={['row', 'column']} justify="center" align="center">
     {isMobile 
       ? <Image src={`/icons/${icon}.svg`} w="85px" h="85px" mb="6"/> 
       : <Text color="gray.006" fontSize="4xl" mr="2">.</Text> 
     }
      <Text fontWeight="600" color="gray.004" fontSize={["md", "xl", "2xl"]}>{text}</Text>
    </Flex>
  )
}

