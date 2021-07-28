import { Flex, Heading, Link, Text } from "@chakra-ui/react";

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination]);

export function ContinentSlider() {
  return (
    <Flex
      width="100%"
      maxW="1240px"
      mx="auto"
      h={["250px", "450px"]}
      mb={["5","10"]}
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, }}
        style={{ width: "100%", flex: '1' }}
      >
        <SwiperSlide>
          <Flex
            backgroundImage="url('/ContinentImage.png')"
            direction="column"
            w="100%"
            h="100%"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
          >
            <Link href="/continent">
              <a>
                <Heading color="gray.005" fontSize={["3xl", "4xl", "5xl"]} fontWeight="bold">Europa</Heading>
                <Text mt={["2", "4"]} fontWeight="bold" color="gray.007" fontSize={["0.8rem", "1xl", "2xl"]}>o continente mais antigo.</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            backgroundImage="url('/ContinentImage.png')"
            direction="column"
            w="100%"
            h="100%"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
          >
            <Link href="/continent">
              <a>
                <Heading color="gray.005" fontSize={["3xl", "4xl", "5xl"]} fontWeight="bold">Europa</Heading>
                <Text mt={["2", "4"]} fontWeight="bold" color="gray.007" fontSize={["0.8rem", "1xl", "2xl"]}>o continente mais antigo.</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        
      </Swiper>
    </Flex>
  );
}