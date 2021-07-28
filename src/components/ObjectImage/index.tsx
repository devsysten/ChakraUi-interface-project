import { Flex, Image } from '@chakra-ui/react';

interface ImageProps {
  showImageProfile?: boolean;
}

export function ImageVeiw({ showImageProfile = true }: ImageProps) {
  return (
    <Flex>
      { showImageProfile && (
        <Image
          width={["300px", "300ppx", "300px", "430px"]}
          src="/Airplane.svg"
          alt="avião, de cor amarela voando sobre algumas nuvens"
          transform="translateY(48px)"
          ml="8"
        />)
      }
    </Flex>
  )
}