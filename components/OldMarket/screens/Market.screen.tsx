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
        } from "native-base";

const MarketScreen = () => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();
  return <Box backgroundColor="#171930" w="100%" h="100%" >
           <ScrollView showsVerticalScrollIndicator={false}>
            <HStack justifyContent="space-between" alignItems ="center" mt="10">
            <Text fontSize="4xl" _light={{
              color: "blueGray.50"
            }} _dark={{
              color: "blueGray.50"
            }} fontWeight="700" ml="5">
                Find your items
            </Text>
            <Box>
              <HStack space={5} mr="5" mt="-2">
                 <Center>
                  <Button onPress={onOpen} bg="transparent">
                    <SearchIcon size="6" color="#FFFF"/>
                  </Button>
                  <Actionsheet isOpen={isOpen} onClose={onClose}>
                    <Actionsheet.Content bg="#171930" _dragIndicatorWrapperOffSet={{
                  }}>
                      <Box w="100%" h={700} px={4} justifyContent="center">
                        <VStack w="100%" h="100%" space={5}>
                          <Heading fontSize="3xl" color="#FFF" fontWeight="500" >
                            Search
                          </Heading>
                          <Input placeholder="Search" variant="filled" width="100%" h="10" borderRadius="10" py="1" px="2" borderWidth="1" bg="darkBlue.800" fontSize="lg" color="#ffff"
                          InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search"/>} />} />
                            <Box mt="5">
                              <ScrollView h="500">
                                <VStack space={4} justifyContent="center" alignItems="center" mt="5">
                                  <Box w="95%" h="20" justifyContent="center" bg="#1E203B" borderRadius="15" shadow={3}>
                                    
                                      <Text fontSize="2xl" position="absolute" left="0"  _light={{
                                        color: "blueGray.50"
                                      }} _dark={{
                                        color: "blueGray.50"
                                      }} fontWeight="400" ml="5">
                                          Pepsi
                                      </Text>
                                  </Box>
                                  <Box w="95%" h="20" justifyContent="center" bg="#1E203B" borderRadius="15" shadow={3}>
                                    
                                      <Text fontSize="2xl" position="absolute" left="0"  _light={{
                                        color: "blueGray.50"
                                      }} _dark={{
                                        color: "blueGray.50"
                                      }} fontWeight="400" ml="5">
                                          Cocacola
                                      </Text>
                                  </Box>
                                  <Box w="95%" h="20" justifyContent="center" bg="#1E203B" borderRadius="15" shadow={3}>
                                    
                                      <Text fontSize="2xl" position="absolute" left="0"  _light={{
                                        color: "blueGray.50"
                                      }} _dark={{
                                        color: "blueGray.50"
                                      }} fontWeight="400" ml="5">
                                          Parking Ticket
                                      </Text>
                                  </Box>
                                  <Box w="95%" h="20" justifyContent="center" bg="#1E203B" borderRadius="15" shadow={3}>
                                    
                                      <Text fontSize="2xl" position="absolute" left="0"  _light={{
                                        color: "blueGray.50"
                                      }} _dark={{
                                        color: "blueGray.50"
                                      }} fontWeight="400" ml="5">
                                         Hire Metal Shop for 1 hour
                                      </Text>
                                  </Box>
                                </VStack>
                              </ScrollView>
                            </Box>
                      </VStack>
                      </Box>
                    </Actionsheet.Content>
                  </Actionsheet>
                </Center>
              </HStack>
            </Box>
          </HStack>
          <Box mx="5" my="5">
            <HStack justifyContent="space-between" >
              <Button mt="-1" ml="-1" w="30%" bg="transparent"  borderRadius="50" borderWidth="1" borderColor="coolGray.200">
                <Text fontSize="lg" _light={{
                  color: "coolGray.50"
                }} _dark={{
                  color: "muted.400"
                }} fontWeight="700">
                Trending
              </Text>
              </Button>
                <Button mt="-1" ml="-1" w="30%" bg="transparent" borderRadius="50" borderWidth="0" borderColor="coolGray.200">
                <Text fontSize="lg" _light={{
                  color: "coolGray.50"
                }} _dark={{
                  color: "muted.400"
                }} fontWeight="700">
                Popular
              </Text>
              </Button>
                <Button mt="-1" ml="-1" w="30%" bg="transparent" borderRadius="50" borderWidth="0" borderColor="coolGray.200">
                <Text fontSize="lg" _light={{
                  color: "coolGray.50"
                }} _dark={{
                  color: "muted.400"
                }} fontWeight="700">
                Following
              </Text>
              </Button>
          </HStack>
          </Box>
          
          <Center my="5">
          <ScrollView 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}>
            <HStack space={5} justifyContent="center" px="2">
              <Center shadow={3}>
                <Image source={{ uri: "https://sc04.alicdn.com/kf/U0c6c7fa9609d4ecda336bfd114d6a3f0o.jpeg"}} 
                alt="Alternate Text" size="2xl" borderRadius="32"/>
                  <Center position="absolute" bottom="16" ml="-80px">                    
                    <Button position="absolute" right="-110" top="-180"
                    bg="#808080:alpha.40" h="45px" w="100" 
                    borderWidth="1" borderColor="#ffff" borderRadius="50">
                      <HStack space={2} justifyContent="center" my="2">
                        <FavouriteIcon size="5" mt="1" color="rose.600"/>
                        <Text color="#FFFF" fontSize="lg">
                          245
                        </Text>
                      </HStack>
                    </Button>
                    <Button
                    position="absolute" px="3" py="2"
                    bg="#808080:alpha.40" h="90" w="220" 
                    borderWidth="1" borderColor="#ffff" borderRadius="15">
                      <VStack space={2}>
                        <Text color="#fff" fontSize="xl" fontWeight="600">
                          Pepsi
                        </Text>
                        <HStack space={16}>
                            <Text color="#fff" fontSize="md">
                              Cost
                            </Text>
                            <Text color="#fff" fontSize="md">
                              0.44 ETH
                            </Text>
                        </HStack>
                      </VStack>
                    </Button>
                  </Center>
              </Center>
              <Center shadow={3}>
                <Image source={{ uri: "https://sc04.alicdn.com/kf/U0c6c7fa9609d4ecda336bfd114d6a3f0o.jpeg"}} 
                alt="Alternate Text" size="2xl" borderRadius="32"/>
                  <Center position="absolute" bottom="16" ml="-80px">                    
                    <Button position="absolute" right="-110" top="-180"
                    bg="#808080:alpha.40" h="45px" w="100" 
                    borderWidth="1" borderColor="#ffff" borderRadius="50">
                      <HStack space={2} justifyContent="center" my="2">
                        <FavouriteIcon size="5" mt="1" color="rose.600"/>
                        <Text color="#FFFF" fontSize="lg">
                          245
                        </Text>
                      </HStack>
                    </Button>
                    <Button
                    position="absolute" px="3" py="2"
                    bg="#808080:alpha.40" h="90" w="220" 
                    borderWidth="1" borderColor="#ffff" borderRadius="15">
                      <VStack space={2}>
                        <Text color="#fff" fontSize="xl" fontWeight="600">
                          Pepsi
                        </Text>
                        <HStack space={16}>
                            <Text color="#fff" fontSize="md">
                              Cost
                            </Text>
                            <Text color="#fff" fontSize="md">
                              0.44 ETH
                            </Text>
                        </HStack>
                      </VStack>
                    </Button>
                  </Center>
              </Center>
              <Center shadow={3}>
                <Image source={{ uri: "https://sc04.alicdn.com/kf/U0c6c7fa9609d4ecda336bfd114d6a3f0o.jpeg"}} 
                alt="Alternate Text" size="2xl" borderRadius="32"/>
                  <Center position="absolute" bottom="16" ml="-80px">                    
                    <Button position="absolute" right="-110" top="-180"
                    bg="#808080:alpha.40" h="45px" w="100" 
                    borderWidth="1" borderColor="#ffff" borderRadius="50">
                      <HStack space={2} justifyContent="center" my="2">
                        <FavouriteIcon size="5" mt="1" color="rose.600"/>
                        <Text color="#FFFF" fontSize="lg">
                          245
                        </Text>
                      </HStack>
                    </Button>
                    <Button
                    position="absolute" px="3" py="2"
                    bg="#808080:alpha.40" h="90" w="220" 
                    borderWidth="1" borderColor="#ffff" borderRadius="15">
                      <VStack space={2}>
                        <Text color="#fff" fontSize="xl" fontWeight="600">
                          Pepsi
                        </Text>
                        <HStack space={16}>
                            <Text color="#fff" fontSize="md">
                              Cost
                            </Text>
                            <Text color="#fff" fontSize="md">
                              0.44 ETH
                            </Text>
                        </HStack>
                      </VStack>
                    </Button>
                  </Center>
              </Center>
              <Center shadow={3}>
                <Image source={{ uri: "https://sc04.alicdn.com/kf/U0c6c7fa9609d4ecda336bfd114d6a3f0o.jpeg"}} 
                alt="Alternate Text" size="2xl" borderRadius="32"/>
                  <Center position="absolute" bottom="16" ml="-80px">                    
                    <Button position="absolute" right="-110" top="-180"
                    bg="#808080:alpha.40" h="45px" w="100" 
                    borderWidth="1" borderColor="#ffff" borderRadius="50">
                      <HStack space={2} justifyContent="center" my="2">
                        <FavouriteIcon size="5" mt="1" color="rose.600"/>
                        <Text color="#FFFF" fontSize="lg">
                          245
                        </Text>
                      </HStack>
                    </Button>
                    <Button
                    position="absolute" px="3" py="2"
                    bg="#808080:alpha.40" h="90" w="220" 
                    borderWidth="1" borderColor="#ffff" borderRadius="15">
                      <VStack space={2}>
                        <Text color="#fff" fontSize="xl" fontWeight="600">
                          Pepsi
                        </Text>
                        <HStack space={16}>
                            <Text color="#fff" fontSize="md">
                              Cost
                            </Text>
                            <Text color="#fff" fontSize="md">
                              0.44 ETH
                            </Text>
                        </HStack>
                      </VStack>
                    </Button>
                  </Center>
              </Center>
            </HStack>
          </ScrollView>
          </Center>
        {
          /*
            Lastest collection
           */
        }
          <Box px="5">
            <Text color="#FFFFFF"
                  fontSize="4xl"
                  fontWeight="700" mb="2">
              Lastest Collection
            </Text>
                <VStack space={5}>
                  <Button h="120px" borderRadius="15" bg="#808080:alpha.40" borderWidth="1" borderColor="#ffff">
                    <HStack space={5}>
                      <Image source={{
                        uri: "https://wallpaperaccess.com/full/317501.jpg"
                        }} alt="Alternate Text" size="xl" borderRadius="10" h="95px" w="95px" />

                      <VStack pr="5">
                        <Text color="#FFFFFF"
                              fontSize="lg"
                              fontWeight="700" mb="2">
                          Parking ticket
                        </Text> 
                        <Text color="#FFFFFF"
                              fontSize="md"
                              fontWeight="500" mb="2">
                          Ticket
                        </Text>
                        <Text color="#FFFFFF"
                              fontSize="sm"
                              fontWeight="400" mb="2">
                          0.02 ETH
                        </Text>
                        </VStack>
                      <Button bg="#808080:alpha.40" h="30px" w="60px" 
                          borderWidth="1" borderColor="#ffff" borderRadius="50" mt="16">
                            <HStack space={1} justifyContent="center">
                              <FavouriteIcon size="3"color="rose.600"/>
                              <Text color="#FFFF" fontSize="sm" mt="-1">
                                143
                              </Text>
                            </HStack>
                          </Button>
                    </HStack>
                  </Button>
                  <Button h="120px" borderRadius="15" bg="#808080:alpha.40" borderWidth="1" borderColor="#ffff">
                    <HStack space={5}>
                      <Image source={{
                        uri: "https://wallpaperaccess.com/full/317501.jpg"
                        }} alt="Alternate Text" size="xl" borderRadius="10" h="95px" w="95px" />

                      <VStack pr="5">
                        <Text color="#FFFFFF"
                              fontSize="lg"
                              fontWeight="700" mb="2">
                          Parking ticket
                        </Text> 
                        <Text color="#FFFFFF"
                              fontSize="md"
                              fontWeight="500" mb="2">
                          Ticket
                        </Text>
                        <Text color="#FFFFFF"
                              fontSize="sm"
                              fontWeight="400" mb="2">
                          0.02 ETH
                        </Text>
                        </VStack>
                      <Button bg="#808080:alpha.40" h="30px" w="60px" 
                          borderWidth="1" borderColor="#ffff" borderRadius="50" mt="16">
                            <HStack space={1} justifyContent="center">
                              <FavouriteIcon size="3"color="rose.600"/>
                              <Text color="#FFFF" fontSize="sm" mt="-1">
                                143
                              </Text>
                            </HStack>
                          </Button>
                    </HStack>
                  </Button>
                  <Button h="120px" borderRadius="15" bg="#808080:alpha.40" borderWidth="1" borderColor="#ffff">
                    <HStack space={5}>
                      <Image source={{
                        uri: "https://wallpaperaccess.com/full/317501.jpg"
                        }} alt="Alternate Text" size="xl" borderRadius="10" h="95px" w="95px" />

                      <VStack pr="5">
                        <Text color="#FFFFFF"
                              fontSize="lg"
                              fontWeight="700" mb="2">
                          Parking ticket
                        </Text> 
                        <Text color="#FFFFFF"
                              fontSize="md"
                              fontWeight="500" mb="2">
                          Ticket
                        </Text>
                        <Text color="#FFFFFF"
                              fontSize="sm"
                              fontWeight="400" mb="2">
                          0.02 ETH
                        </Text>
                        </VStack>
                      <Button bg="#808080:alpha.40" h="30px" w="60px" 
                          borderWidth="1" borderColor="#ffff" borderRadius="50" mt="16">
                            <HStack space={1} justifyContent="center">
                              <FavouriteIcon size="3"color="rose.600"/>
                              <Text color="#FFFF" fontSize="sm" mt="-1">
                                143
                              </Text>
                            </HStack>
                          </Button>
                    </HStack>
                  </Button>
                  <Button h="120px" borderRadius="15" bg="#808080:alpha.40" borderWidth="1" borderColor="#ffff">
                    <HStack space={5}>
                      <Image source={{
                        uri: "https://wallpaperaccess.com/full/317501.jpg"
                        }} alt="Alternate Text" size="xl" borderRadius="10" h="95px" w="95px" />

                      <VStack pr="5">
                        <Text color="#FFFFFF"
                              fontSize="lg"
                              fontWeight="700" mb="2">
                          Parking ticket
                        </Text> 
                        <Text color="#FFFFFF"
                              fontSize="md"
                              fontWeight="500" mb="2">
                          Ticket
                        </Text>
                        <Text color="#FFFFFF"
                              fontSize="sm"
                              fontWeight="400" mb="2">
                          0.02 ETH
                        </Text>
                        </VStack>
                      <Button bg="#808080:alpha.40" h="30px" w="60px" 
                          borderWidth="1" borderColor="#ffff" borderRadius="50" mt="16">
                            <HStack space={1} justifyContent="center">
                              <FavouriteIcon size="3"color="rose.600"/>
                              <Text color="#FFFF" fontSize="sm" mt="-1">
                                143
                              </Text>
                            </HStack>
                          </Button>
                    </HStack>
                  </Button>
                  <Button h="120px" borderRadius="15" bg="#808080:alpha.40" borderWidth="1" borderColor="#ffff">
                    <HStack space={5}>
                      <Image source={{
                        uri: "https://wallpaperaccess.com/full/317501.jpg"
                        }} alt="Alternate Text" size="xl" borderRadius="10" h="95px" w="95px" />

                      <VStack pr="5">
                        <Text color="#FFFFFF"
                              fontSize="lg"
                              fontWeight="700" mb="2">
                          Parking ticket
                        </Text> 
                        <Text color="#FFFFFF"
                              fontSize="md"
                              fontWeight="500" mb="2">
                          Ticket
                        </Text>
                        <Text color="#FFFFFF"
                              fontSize="sm"
                              fontWeight="400" mb="2">
                          0.02 ETH
                        </Text>
                        </VStack>
                      <Button bg="#808080:alpha.40" h="30px" w="60px" 
                          borderWidth="1" borderColor="#ffff" borderRadius="50" mt="16">
                            <HStack space={1} justifyContent="center">
                              <FavouriteIcon size="3"color="rose.600"/>
                              <Text color="#FFFF" fontSize="sm" mt="-1">
                                143
                              </Text>
                            </HStack>
                          </Button>
                    </HStack>
                  </Button>
                </VStack>
          </Box>
          </ScrollView>
        </Box>
};

    export default () => {
        return (
          <NativeBaseProvider>
                <MarketScreen/>
          </NativeBaseProvider>
        );
    };
    