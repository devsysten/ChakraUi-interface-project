import { Flex, Heading, Text, useBreakpointValue, } from "@chakra-ui/react";

import { ImageVeiw } from "../ObjectImage";

export function Banner() {
  const isVerssionMobile = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      width="100%"
      h={["163px", "250px", "250px", "335px"]}
      backgroundImage="url('/Banner.jpg')"
      backgroundPosition={["100% 20%", "100% 20%", "100% 30%"]}
      backgroundRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        pt="10"
        justifyContent={['center', 'space-between']}
        align="center"
        width="100%"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
      >
        <div>
          <Heading
            color="gray.002"
            fontSize={["xl", "2l", "2xl", "2xl", "4xl"]}
            fontWeight="500"
          >
            5 Continentes,<br />infinitas possibilidades.
          </Heading>
          <Text
            color="gray.000"
            mt="5"
            fontSize={["0.8rem", "xl"]}
            maxW={["100%", "100%", "100%", "550px"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </div>
        <ImageVeiw showImageProfile={isVerssionMobile} />
      </Flex>
    </Flex>
  );
}