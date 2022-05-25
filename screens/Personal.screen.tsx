import React from "react";
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
        ScrollView 
      } from "native-base";

const PesonalScreen = () => {
  return<Box backgroundColor="#171930" w="100%" h="100%" >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
          }} alt="image" />
          </AspectRatio>
          <Center _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "7xl"
        }} position="absolute" bottom="0" px="3" py="1.5">
            Gay Lo
          </Center>
        </Box>
        <Stack p="4" space={3} >
          <Stack space={2}>
          <Text fontSize="xs" _light={{
            color: "muted.400"
          }} _dark={{
            color: "muted.400"
          }} fontWeight="500" ml="-1" mt="-2" mb="2" >
              0x77bb...b8E3
            </Text>
          <HStack justifyContent="space-between" >
            <Button mt="-1" ml="-1" w="50%" bg="transparent" borderRadius="50" borderWidth="1" borderColor="coolGray.200">
              <Text fontSize="xs" _light={{
                color: "coolGray.50"
              }} _dark={{
                color: "muted.400"
              }} fontWeight="500">
              Check your grade
            </Text>
            </Button>
             <Text fontSize="2xl" _light={{
                color: "muted.400"
              }} _dark={{
                color: "muted.400"
              }} fontWeight="500" mt="-5">
              ...
            </Text>
          </HStack>
            <Text fontWeight="400"
            _light={{
                color: "muted.200"
              }} _dark={{
                color: "muted.300"
              }} ml="-1">
              A studious and team player Computer Science and Engineering sophomore at
              VNUK Institute for Research and Executed Education. and more
            </Text>
            <HStack space={4} justifyContent="center">
              <Center h="20" w="120" bg="#1E203B" rounded="md" shadow={3}>
                <Text fontSize="sm" _light={{
                color: "warmGray.50"
                  }} _dark={{
                color: "muted.400"
                  }} fontWeight="500" ml="-0.5">
                  Credits
                </Text>
                <Text fontSize="sm" _light={{
                color: "warmGray.50"
                  }} _dark={{
                color: "muted.400"
                  }} fontWeight="500" ml="-0.5" >
                  172
                </Text>
              </Center>
              <Center h="20" w="120" bg="#1E203B" rounded="md" shadow={3}>
                <Text fontSize="sm" _light={{
                color: "warmGray.50"
                  }} _dark={{
                color: "muted.400"
                  }} fontWeight="500" ml="-0.5">
                  GPA
                </Text>
                <Text fontSize="sm" _light={{
                color: "warmGray.50"
                  }} _dark={{
                color: "muted.400"
                  }} fontWeight="500" ml="-0.5" >
                  3.7
                </Text>
              </Center>
              <Center h="20" w="120" bg="#1E203B" rounded="md" shadow={3}>
                <Text fontSize="sm" _light={{
                color: "warmGray.50"
                  }} _dark={{
                color: "muted.400"
                  }} fontWeight="500" ml="-0.5">
                  Class
                </Text>
                <Text fontSize="sm" _light={{
                color: "warmGray.50"
                  }} _dark={{
                color: "muted.400"
                  }} fontWeight="500" ml="-0.5" >
                  20CSE
                </Text>
              </Center>
            </HStack>

            <Heading size="md" ml="-1" color="warmGray.50">
              Inventory
            </Heading>
            <ScrollView maxW="100%" h="250" _contentContainerStyle={{
          px: "20px",
          mb: "4",
          minW: "72"
        }}>
            <VStack space={2} alignItems="center">
              <Center w="420" h="20" bg="#1E203B" borderRadius="10" shadow={3}>
                <HStack space={1} justifyContent="center" alignItems="center">
                <Box w="20">
                  <Image source={{
                    uri: "https://i.pinimg.com/564x/e9/d4/97/e9d49723d00cbb642dd0817db861af84.jpg"
                  }} alt="Alternate Text" size="sm"  borderRadius="5" ml="-2"/>
                </Box>
                <Box w="45%">
                  <Text fontSize="sm" _light={{
                    color: "warmGray.50"
                      }} _dark={{
                    color: "muted.400"
                      }} fontWeight="500" >
                    Parking tickets
                  </Text>
                </Box>
                <Box w="10">
                  <Text fontSize="sm" _light={{
                  color: "warmGray.50"
                    }} _dark={{
                  color: "muted.400"
                    }} fontWeight="500" ml="5" >
                    x1
                  </Text>
                </Box>
                </HStack>
              </Center>
              <Center w="420" h="20" bg="#1E203B" borderRadius="10" shadow={3}>
                <HStack space={1} justifyContent="center" alignItems="center">
                <Box w="20">
                  <Image source={{
                    uri: "https://i.pinimg.com/564x/e9/d4/97/e9d49723d00cbb642dd0817db861af84.jpg"
                  }} alt="Alternate Text" size="sm"  borderRadius="5" ml="-2"/>
                </Box>
                <Box w="45%">
                  <Text fontSize="sm" _light={{
                    color: "warmGray.50"
                      }} _dark={{
                    color: "muted.400"
                      }} fontWeight="500" >
                    Parking tickets
                  </Text>
                </Box>
                <Box w="10">
                  <Text fontSize="sm" _light={{
                  color: "warmGray.50"
                    }} _dark={{
                  color: "muted.400"
                    }} fontWeight="500" ml="5" >
                    x1
                  </Text>
                </Box>
                </HStack>
              </Center>
              <Center w="420" h="20" bg="#1E203B" borderRadius="10" shadow={3}>
                <HStack space={1} justifyContent="center" alignItems="center">
                <Box w="20">
                  <Image source={{
                    uri: "https://i.pinimg.com/564x/e9/d4/97/e9d49723d00cbb642dd0817db861af84.jpg"
                  }} alt="Alternate Text" size="sm"  borderRadius="5" ml="-2"/>
                </Box>
                <Box w="45%">
                  <Text fontSize="sm" _light={{
                    color: "warmGray.50"
                      }} _dark={{
                    color: "muted.400"
                      }} fontWeight="500" >
                    Parking tickets
                  </Text>
                </Box>
                <Box w="10">
                  <Text fontSize="sm" _light={{
                  color: "warmGray.50"
                    }} _dark={{
                  color: "muted.400"
                    }} fontWeight="500" ml="5" >
                    x1
                  </Text>
                </Box>
                </HStack>
              </Center>
              <Center w="420" h="20" bg="#1E203B" borderRadius="10" shadow={3}>
                <HStack space={1} justifyContent="center" alignItems="center">
                <Box w="20">
                  <Image source={{
                    uri: "https://i.pinimg.com/564x/e9/d4/97/e9d49723d00cbb642dd0817db861af84.jpg"
                  }} alt="Alternate Text" size="sm"  borderRadius="5" ml="-2"/>
                </Box>
                <Box w="45%">
                  <Text fontSize="sm" _light={{
                    color: "warmGray.50"
                      }} _dark={{
                    color: "muted.400"
                      }} fontWeight="500" >
                    Parking tickets
                  </Text>
                </Box>
                <Box w="10">
                  <Text fontSize="sm" _light={{
                  color: "warmGray.50"
                    }} _dark={{
                  color: "muted.400"
                    }} fontWeight="500" ml="5" >
                    x1
                  </Text>
                </Box>
                </HStack>
              </Center>
              <Center w="420" h="20" bg="#1E203B" borderRadius="10" shadow={3}>
                <HStack space={1} justifyContent="center" alignItems="center">
                <Box w="20">
                  <Image source={{
                    uri: "https://i.pinimg.com/564x/e9/d4/97/e9d49723d00cbb642dd0817db861af84.jpg"
                  }} alt="Alternate Text" size="sm"  borderRadius="5" ml="-2"/>
                </Box>
                <Box w="45%">
                  <Text fontSize="sm" _light={{
                    color: "warmGray.50"
                      }} _dark={{
                    color: "muted.400"
                      }} fontWeight="500" >
                    Parking tickets
                  </Text>
                </Box>
                <Box w="10">
                  <Text fontSize="sm" _light={{
                  color: "warmGray.50"
                    }} _dark={{
                  color: "muted.400"
                    }} fontWeight="500" ml="5" >
                    x1
                  </Text>
                </Box>
                </HStack>
              </Center>
              <Center w="420" h="20" bg="#1E203B" borderRadius="10" shadow={3}>
                <HStack space={1} justifyContent="center" alignItems="center">
                <Box w="20">
                  <Image source={{
                    uri: "https://i.pinimg.com/564x/e9/d4/97/e9d49723d00cbb642dd0817db861af84.jpg"
                  }} alt="Alternate Text" size="sm"  borderRadius="5" ml="-2"/>
                </Box>
                <Box w="45%">
                  <Text fontSize="sm" _light={{
                    color: "warmGray.50"
                      }} _dark={{
                    color: "muted.400"
                      }} fontWeight="500" >
                    Parking tickets
                  </Text>
                </Box>
                <Box w="10">
                  <Text fontSize="sm" _light={{
                  color: "warmGray.50"
                    }} _dark={{
                  color: "muted.400"
                    }} fontWeight="500" ml="5" >
                    x1
                  </Text>
                </Box>
                </HStack>
              </Center>
            </VStack>
          </ScrollView>
          </Stack> 
         </Stack>
        </Box>;
};
    export default () => {
        return (
          <NativeBaseProvider>
                <PesonalScreen/>
          </NativeBaseProvider>
        );
    };