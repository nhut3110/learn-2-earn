import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  Heading,
  Image,
  Text,
  Center,
  HStack,
  NativeBaseProvider,
  Button,
  VStack,
  ScrollView,
  SearchIcon,
  Input,
  Icon,
  useDisclose,
  Actionsheet,
  FavouriteIcon,
  Flex
} from "native-base";


const SearchItems = () => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();
  return (
    <Center>
      <Button onPress={onOpen} bg="transparent">
        <SearchIcon size="6" color="#FFFF" />
      </Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content bg="#171930">
          <Box w="100%" h={700} px={4} justifyContent="center">
            <VStack w="100%" h="100%" space={5}>
              <Heading fontSize="3xl" color="#FFF" fontWeight="500" >
                Search
              </Heading>
              <Input placeholder="Search" variant="filled" width="100%" h="10" borderRadius="10" py="1" px="2" borderWidth="1" bg="darkBlue.800" fontSize="lg" color="#ffff"
                InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
              <Box >
                <ScrollView h="500">
                  <VStack space={4} justifyContent="center" alignItems="center" mt="5">
                    <Button w="95%" h="100%" justifyContent="flex-start" bg="#1E203B" borderRadius="15" shadow={3}>
                      <Flex direction="row" alignItems="center">
                        <Image
                          source={{ uri: "https://sc04.alicdn.com/kf/U0c6c7fa9609d4ecda336bfd114d6a3f0o.jpeg" }}
                          alt="Alternate Text"
                          size="xs"
                          borderRadius="5" />
                        <Text
                          fontSize="2xl"
                          fontWeight="400"
                          ml="5"
                          color="#FFFFFF">
                          Pepsi
                        </Text>
                      </Flex>
                    </Button>
                  </VStack>
                </ScrollView>
              </Box>
            </VStack>
          </Box>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  )
}

export default SearchItems;