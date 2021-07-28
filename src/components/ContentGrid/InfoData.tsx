import { Flex, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import { RiInformationLine } from 'react-icons/ri';

export function InfoData() {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="gray.006" fontWeight="600">
          50
        </Heading>
        <Text fontWeight="600" fontSize={["md", "xl"]} color="gray.004">
          países
        </Text>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="gray.006" fontWeight="600">
          60
        </Heading>
        <Text fontWeight="600" fontSize={["md", "xl"]} color="gray.004">
          lingua
        </Text>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="gray.006" fontWeight="600">
          27
        </Heading>
        <Text fontWeight="600" fontSize={["md", "xl"]} color="gray.004">
          cidades +100
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon cursor="pointer" as={RiInformationLine} ml="1" color="gray.400" w={["10px", "16px"]} h={["10px", "16px"]} />
              </span>
            </PopoverTrigger>
            <PopoverContent bg="gray.004" color="gray.006">
              <PopoverArrow bg="gray.004"/>
              <PopoverCloseButton mt="-4px" mr="-5px"/>
              <PopoverBody fontWeight="400" fontSize="lg">
                China, Rusia, Brasil, Chile, Mexico
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>

    </Flex>
  );
}