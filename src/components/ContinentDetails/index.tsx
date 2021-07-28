import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export function ContinentDetails(){
  return(
    <Flex 
      w="100%"
      h={["150px","300px","500px"]}
      px={["0","0","36"]}
      pt={["0","0","72"]}
      backgroundImage="url('/bannereuropa.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={["center","center", "flex-start"]}
    >
     <Heading 
      textAlign={["center","left"]}
      fontSize={["1.75rem","48px"]}
      color="gray.100"
      fontWeight="600"
      mb="-18px"
     >
       Europa
     </Heading>
    </Flex>
  );
}