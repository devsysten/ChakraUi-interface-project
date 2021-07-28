import { Box, Text } from "@chakra-ui/react";

export function TextComponents() {
  return (
    <Box mb={["5","14"]}>
      <Text fontSize={["lg", "3xl", "4xl"]} color="gray.004" textAlign="center" fontWeight="500" >
        Vamos nessa?<br />Então escolha seu continente
      </Text>
    </Box>
  );
}