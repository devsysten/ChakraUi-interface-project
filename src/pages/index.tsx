import { Flex } from "@chakra-ui/react";
import { Atrativos } from "../components/Atrativos";

import { Banner } from "../components/Banner";
import { ContinentSlider } from "../components/ContinentSlider";
import { Divisor } from "../components/Divisor";
import { Header } from "../components/Header";
import { TextComponents } from "../components/TextComponents";

export default function Home(){
  return(
    <Flex direction={['column']}>
      <Header />
      <Banner />
      <Atrativos />
      <Divisor />
      <TextComponents />
      <ContinentSlider />
    </Flex>
  )
}