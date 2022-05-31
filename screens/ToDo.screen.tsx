import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { 
        Box,
        Heading, 
        AspectRatio, 
        Image, 
        Text, 
        Center, 
        HStack, 
        Stack, 
        NativeBaseProvider, 
        Button, 
        VStack, 
        ScrollView, 
        SearchIcon,
        AddIcon,
        CheckCircleIcon,
        InfoIcon,
        Circle,
        Input,
        Icon,
        useDisclose,
        Actionsheet
        } from "native-base";

const ToDoScreen = () => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();
  return<Box backgroundColor="#171930" w="100%" h="100%" >
          <HStack justifyContent="space-between" alignItems ="center" mt="20">
            <Text fontSize="4xl" _light={{
              color: "blueGray.50"
            }} _dark={{
              color: "blueGray.50"
            }} fontWeight="700" ml="5">
                ToDo
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
                          <Input placeholder="Search" variant="filled" width="100%" h="10" borderRadius="10" py="1" px="2" borderWidth="1" fontSize="lg" bg="darkBlue.800" color="#ffff"
                          InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
                            <Box mt="5">
                              <ScrollView h="500">
                                <VStack space={4} justifyContent="center" alignItems="center" mt="5">
                                  <Box w="95%" h="20" justifyContent="center" bg="#1E203B" borderRadius="15" shadow={3}>
                                    
                                      <Text fontSize="2xl" position="absolute" left="0"  _light={{
                                        color: "blueGray.50"
                                      }} _dark={{
                                        color: "blueGray.50"
                                      }} fontWeight="400" ml="5">
                                          Daily Meeting with the team
                                      </Text>
                                  </Box>
                                  <Box w="95%" h="20" justifyContent="center" bg="#1E203B" borderRadius="15" shadow={3}>
                                    
                                      <Text fontSize="2xl" position="absolute" left="0"  _light={{
                                        color: "blueGray.50"
                                      }} _dark={{
                                        color: "blueGray.50"
                                      }} fontWeight="400" ml="5">
                                          Completing the prototype
                                      </Text>
                                  </Box>
                                  <Box w="95%" h="20" justifyContent="center" bg="#1E203B" borderRadius="15" shadow={3}>
                                    
                                      <Text fontSize="2xl" position="absolute" left="0"  _light={{
                                        color: "blueGray.50"
                                      }} _dark={{
                                        color: "blueGray.50"
                                      }} fontWeight="400" ml="5">
                                          Hang out with girlfriend and eat her
                                      </Text>
                                  </Box>
                                  <Box w="95%" h="20" justifyContent="center" bg="#1E203B" borderRadius="15" shadow={3}>
                                    
                                      <Text fontSize="2xl" position="absolute" left="0"  _light={{
                                        color: "blueGray.50"
                                      }} _dark={{
                                        color: "blueGray.50"
                                      }} fontWeight="400" ml="5">
                                          Figma iz da best
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

                <Button onPress={onOpen} bg="transparent">
                    <AddIcon size="6" color="#FFFF"/>
                  </Button>

              </HStack>
            </Box>
          </HStack>
          <Box ml="5" mt="5" mb="5">
            <ScrollView  
              horizontal={true} 
              showsHorizontalScrollIndicator={false}>
              <HStack space={3} justifyContent="center">
                <Center h="40" w="250" bg="indigo.500" rounded="md" shadow={3}>
                  <VStack>
                    <HStack justifyContent="space-between" alignItems ="center">
                      <Box w="150" borderColor="indigo.900" borderLeftWidth="5" pl="2">
                        <Text fontSize="xl"  _light={{
                          color: "light.50"
                        }} _dark={{
                          color: "light.50"
                        }} fontWeight="500"  >
                            Networking and Concurrency
                        </Text>
                      </Box>
                      <Text fontSize="5xl"  _light={{
                        color: "light.50"
                      }} _dark={{
                        color: "light.50"
                      }} fontWeight="700" mt="-81" ml="6" opacity="0.5">
                          ...
                      </Text>
                    </HStack>
                    <Box borderColor="light.200" borderTopWidth="1" w="200" mt="2">
                      <HStack space={2} alignItems ="center" mt="2">
                          <InfoIcon size="4" color="#FFFF"/>
                          <Text fontSize="md"  _light={{
                            color: "light.50"
                          }} _dark={{
                            color: "light.50"
                          }} fontWeight="500" opacity="0.5">
                              22.01 (10 p.m)
                          </Text>
                      </HStack>
                      <HStack space={2} alignItems ="center">
                          <CheckCircleIcon size="4" color="#FFFF"/>
                          <Text fontSize="md"  _light={{
                            color: "light.50"
                          }} _dark={{
                            color: "light.50"
                          }} fontWeight="500" opacity="0.5">
                              5 Tasks
                          </Text>
                      </HStack>
                    </Box>
                  </VStack>
                </Center>
                <Center h="40" w="250" bg="indigo.500" rounded="md" shadow={3}>
                  <VStack>
                    <HStack justifyContent="space-between" alignItems ="center">
                      <Box w="150" borderColor="indigo.900" borderLeftWidth="5" pl="2">
                        <Text fontSize="xl"  _light={{
                          color: "light.50"
                        }} _dark={{
                          color: "light.50"
                        }} fontWeight="500"  >
                            Basic Design Website
                        </Text>
                      </Box>
                      <Text fontSize="5xl"  _light={{
                        color: "light.50"
                      }} _dark={{
                        color: "light.50"
                      }} fontWeight="700" mt="-81" ml="6" opacity="0.5">
                          ...
                      </Text>
                    </HStack>
                    <Box borderColor="light.200" borderTopWidth="1" w="200" mt="2">
                      <HStack space={2} alignItems ="center" mt="2">
                          <InfoIcon size="4" color="#FFFF"/>
                          <Text fontSize="md"  _light={{
                            color: "light.50"
                          }} _dark={{
                            color: "light.50"
                          }} fontWeight="500" opacity="0.5">
                              24.01 (8 a.m)
                          </Text>
                      </HStack>
                      <HStack space={2} alignItems ="center">
                          <CheckCircleIcon size="4" color="#FFFF"/>
                          <Text fontSize="md"  _light={{
                            color: "light.50"
                          }} _dark={{
                            color: "light.50"
                          }} fontWeight="500" opacity="0.5">
                              3 Tasks
                          </Text>
                      </HStack>
                    </Box>
                  </VStack>
                </Center>
                <Center h="40" w="250" bg="indigo.500" rounded="md" shadow={3}>
                  <VStack>
                    <HStack justifyContent="space-between" alignItems ="center">
                      <Box w="150" borderColor="indigo.900" borderLeftWidth="5" pl="2">
                        <Text fontSize="xl"  _light={{
                          color: "light.50"
                        }} _dark={{
                          color: "light.50"
                        }} fontWeight="500"  >
                            Mobile Programming
                        </Text>
                      </Box>
                      <Text fontSize="5xl"  _light={{
                        color: "light.50"
                      }} _dark={{
                        color: "light.50"
                      }} fontWeight="700" mt="-81" ml="6" opacity="0.5">
                          ...
                      </Text>
                    </HStack>
                    <Box borderColor="light.200" borderTopWidth="1" w="200" mt="2">
                      <HStack space={2} alignItems ="center" mt="2">
                          <InfoIcon size="4" color="#FFFF"/>
                          <Text fontSize="md"  _light={{
                            color: "light.50"
                          }} _dark={{
                            color: "light.50"
                          }} fontWeight="500" opacity="0.5">
                              25.01 (8 a.m)
                          </Text>
                      </HStack>
                      <HStack space={2} alignItems ="center">
                          <CheckCircleIcon size="4" color="#FFFF"/>
                          <Text fontSize="md"  _light={{
                            color: "light.50"
                          }} _dark={{
                            color: "light.50"
                          }} fontWeight="500" opacity="0.5">
                              7 Tasks
                          </Text>
                      </HStack>
                    </Box>
                  </VStack>
                </Center>
                <Center h="40" w="250" bg="indigo.500" rounded="md" shadow={3}>
                  <VStack>
                    <HStack justifyContent="space-between" alignItems ="center">
                      <Box w="150" borderColor="indigo.900" borderLeftWidth="5" pl="2">
                        <Text fontSize="xl"  _light={{
                          color: "light.50"
                        }} _dark={{
                          color: "light.50"
                        }} fontWeight="500"  >
                            Data structure and Algorithms
                        </Text>
                      </Box>
                      <Text fontSize="5xl"  _light={{
                        color: "light.50"
                      }} _dark={{
                        color: "light.50"
                      }} fontWeight="700" mt="-81" ml="6" opacity="0.5">
                          ...
                      </Text>
                    </HStack>
                    <Box borderColor="light.200" borderTopWidth="1" w="200" mt="2">
                      <HStack space={2} alignItems ="center" mt="2">
                          <InfoIcon size="4" color="#FFFF"/>
                          <Text fontSize="md"  _light={{
                            color: "light.50"
                          }} _dark={{
                            color: "light.50"
                          }} fontWeight="500" opacity="0.5">
                              27.01 (2 p.m)
                          </Text>
                      </HStack>
                      <HStack space={2} alignItems ="center">
                          <CheckCircleIcon size="4" color="#FFFF"/>
                          <Text fontSize="md"  _light={{
                            color: "light.50"
                          }} _dark={{
                            color: "light.50"
                          }} fontWeight="500" opacity="0.5">
                              1 Tasks
                          </Text>
                      </HStack>
                    </Box>
                  </VStack>
                </Center>
              </HStack>
            </ScrollView>
          </Box>
          <ScrollView showsVerticalScrollIndicator={false}>
          <Box mt="5">
            <Text fontSize="2xl" _light={{
              color: "blueGray.50"
            }} _dark={{
              color: "blueGray.50"
            }} fontWeight="700" ml="5">
                Today
            </Text>
            <VStack space={4} justifyContent="center" alignItems="center" mt="5">
              <Center w="95%" h="20" bg="#1E203B" borderRadius="15" shadow={3}>
                <HStack alignItems="center" position="absolute" left="0" ml="10">
                  <Circle size="20px" bg="transparent" borderWidth="2" borderColor="#F18C27">
                  </Circle> 
                  <Text fontSize="2xl" _light={{
                    color: "blueGray.50"
                  }} _dark={{
                    color: "blueGray.50"
                  }} fontWeight="400" ml="5">
                      Daily Meeting with the team
                  </Text>
                </HStack>
              </Center>
              <Center w="95%" h="20" bg="#1E203B" borderRadius="15" shadow={3}>
                <HStack alignItems="center" position="absolute" left="0" ml="10">
                  <Circle size="20px" bg="transparent" borderWidth="2" borderColor="#F18C27">
                  </Circle> 
                  <Text fontSize="2xl" _light={{
                    color: "blueGray.50"
                  }} _dark={{
                    color: "blueGray.50"
                  }} fontWeight="400" ml="5">
                      Completing the prototype
                  </Text>
                </HStack>
              </Center>
              <Center w="95%" h="20" bg="#1E203B" borderRadius="15" shadow={3}>
                <HStack alignItems="center" position="absolute" left="0" ml="10">
                  <Circle size="20px" bg="transparent" borderWidth="2" borderColor="#F18C27">
                  </Circle> 
                  <Text fontSize="2xl" _light={{
                    color: "blueGray.50"
                  }} _dark={{
                    color: "blueGray.50"
                  }} fontWeight="400" ml="5">
                      Hang out with girlfriend and eat her
                  </Text>
                </HStack>
              </Center>
              <Center w="95%" h="20" bg="#1E203B" borderRadius="15" shadow={3}>
                <HStack alignItems="center" position="absolute" left="0" ml="10">
                  <Circle size="20px" bg="transparent" borderWidth="2" borderColor="#F18C27">
                  </Circle> 
                  <Text fontSize="2xl" _light={{
                    color: "blueGray.50"
                  }} _dark={{
                    color: "blueGray.50"
                  }} fontWeight="400" ml="5">
                      Figma iz da best
                  </Text>
                </HStack>
              </Center>
              <Center w="95%" h="20" bg="#1E203B" borderRadius="15" shadow={3}>
                <HStack alignItems="center" position="absolute" left="0" ml="10">
                  <Circle size="20px" bg="transparent" borderWidth="2" borderColor="#F18C27">
                  </Circle> 
                  <Text fontSize="2xl" _light={{
                    color: "blueGray.50"
                  }} _dark={{
                    color: "blueGray.50"
                  }} fontWeight="400" ml="5">
                      Design the Website on Figma based on sample from BA
                  </Text>
                </HStack>
              </Center>
            </VStack>
          </Box>
          <Box mt="5">
            <Text fontSize="2xl" _light={{
              color: "blueGray.50"
            }} _dark={{
              color: "blueGray.50"
            }} fontWeight="700" ml="5">
                Tomorrow
            </Text>
            <VStack space={4} justifyContent="center" alignItems="center" mt="5">
              <Center w="95%" h="20" bg="#1E203B" borderRadius="15" shadow={3}>
                <HStack alignItems="center" position="absolute" left="0" ml="10">
                  <Circle size="20px" bg="transparent" borderWidth="2" borderColor="#4886E8">
                  </Circle> 
                  <Text fontSize="2xl" _light={{
                    color: "blueGray.50"
                  }} _dark={{
                    color: "blueGray.50"
                  }} fontWeight="400" ml="5">
                      Completing the prototype
                  </Text>
                </HStack>
              </Center>
              <Center w="95%" h="20" bg="#1E203B" borderRadius="15" shadow={3}>
                <HStack alignItems="center" position="absolute" left="0" ml="10">
                  <Circle size="20px" bg="transparent" borderWidth="2" borderColor="#4886E8">
                  </Circle> 
                  <Text fontSize="2xl" _light={{
                    color: "blueGray.50"
                  }} _dark={{
                    color: "blueGray.50"
                  }} fontWeight="400" ml="5">
                      Daily Meeting with the team
                  </Text>
                </HStack>
              </Center>
              <Center w="95%" h="20" bg="#1E203B" borderRadius="15" shadow={3}>
                <HStack alignItems="center" position="absolute" left="0" ml="10">
                  <Circle size="20px" bg="transparent" borderWidth="2" borderColor="#4886E8">
                  </Circle> 
                  <Text fontSize="2xl" _light={{
                    color: "blueGray.50"
                  }} _dark={{
                    color: "blueGray.50"
                  }} fontWeight="400" ml="5">
                      Daily Meeting with the team
                  </Text>
                </HStack>
              </Center>
            </VStack>
          </Box>
          </ScrollView>
        </Box>;
};

    export default () => {
        return (
          <NativeBaseProvider>
                <ToDoScreen/>
          </NativeBaseProvider>
        );
    };