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
        ScrollView,
        InfoOutlineIcon,
        ChevronRightIcon, 
        Icon
      } from "native-base";

import { Feather } from "@expo/vector-icons";

const FinalScreen = () => {
    return <Box backgroundColor="#171930" w="100%" h="100%" >
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image source={{
          uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
        }} alt="image" />
        </AspectRatio>
        <Center _text={{
        color: "warmGray.50",
        fontWeight: "700",
        fontSize: "2xl"
        }} position="absolute" bottom="0" px="3" py="1.5">
          Hello Guys
        </Center>
      </Box>
      

      <Box bgColor="#1e203b" m="5" mt={5} w={334} h="280">
        {
        /* using theme colors to set text color */
      }
        <VStack space={0.5} alignItems="center">
          <Button variant="ghost" size="lg" fontWeight="bold">
              <HStack justifyContent="center" space={38}>
                <HStack space={3} mx="3">
                <Icon size={7} as={<Feather name="info"/>} mt="1"/>
                  <Text fontSize="lg" color="info.700" mt="1" ml="5" mr="2" >
                    Update Information
                  </Text>
                </HStack>
                <ChevronRightIcon size="7" />
              </HStack>
          </Button>
        </VStack>

        <VStack space={0.5} alignItems="center">
          <Button variant="ghost" size="lg" fontWeight="bold">
              <HStack justifyContent="center" space={38}>
                <HStack space={3} mx="3">
                  <Icon size={7} as={<Feather name="lock"/>}/>
                  <Text fontSize="lg" color="info.700" mt="1" ml="7" mr="2">
                    Change Password
                  </Text>
                </HStack>
                <ChevronRightIcon size="7" />
              </HStack>
          </Button>
        </VStack>

        <VStack space={0.5} alignItems="center">
          <Button variant="ghost" size="lg" fontWeight="bold">
              <HStack justifyContent="center" space={28} >
                <HStack space={1} mr="4" ml="10">
                  <Icon size={7} as={<Feather name="clock"/>} ml="3" mr="10"/>
                  <Text fontSize="lg" color="info.700" mt="1" mx={5} >
                  Settings
                  </Text>
                </HStack>
                <ChevronRightIcon size="7" mx="10"/>
              </HStack>
          </Button>
        </VStack>

        <VStack space={0.5} alignItems="center">
          <Button variant="ghost" size="lg" fontWeight="bold">
              <HStack justifyContent="center" space={38}>
                <HStack space={3} mx="3">
                  <Icon size={7} as={<Feather name="bell"/>}/>
                  <Text fontSize="lg" color="info.700" mt="1" ml="10" mr="10" >
                  Notification
                  </Text>
                </HStack>
                <ChevronRightIcon size="7" ml="1"/>
              </HStack>
          </Button>
        </VStack>

        <VStack space={0.5} alignItems="center">
          <Button variant="ghost" size="lg" fontWeight="bold">
              <HStack justifyContent="center" space={38}>
                <HStack space={3} mx="3">
                  <Icon size={7} as={<Feather name="help-circle"/>}/>
                  <Text fontSize="lg" color="info.700" mt="1" ml="5" mr="2" >
                  Help And Support
                  </Text>
                </HStack>
                <ChevronRightIcon size="7" ml="2" />
              </HStack>
          </Button>
        </VStack>
      </Box>
      
      <Box bgColor="#1e203b" m="5" mt="0.2" w="334" h="161">
          <VStack space={0.5} alignItems="center">
            <Button variant="ghost" size="lg" fontWeight="bold">
                <HStack justifyContent="center" space={38}>
                  <HStack space={3} mx="3">
                    <Icon size={7} as={<Feather name="users"/>}mr="1"/>
                    <Text fontSize="lg" color="info.700" mt="1" ml="12" mr="10" >
                    About Us
                    </Text>
                  </HStack>
                  <ChevronRightIcon size="7" ml="3" />
                </HStack>
            </Button>
          </VStack>

          <VStack space={0.5} alignItems="center">
          <Button variant="ghost" size="lg" fontWeight="bold" mr={2}>
              <HStack justifyContent="center" space={38} ml="4">
                <HStack space={3} mx="1">
                <Icon size={7} as={<Feather name="info"/>} mt="1"/>
                  <Text fontSize="lg" color="info.700" mt="1" ml="5" >
                    Terms and Conditions
                  </Text>
                </HStack>
                <ChevronRightIcon size="7" />
              </HStack>
          </Button>
        </VStack>

          <VStack space={0.5} alignItems="center">
            <Button variant="ghost" size="lg" fontWeight="bold">
                <HStack justifyContent="center" space={38} mr="1" ml={4}>
                  <HStack space={3} mx="3">
                    <Icon size={7} as={<Feather name="log-out"/>} mr="5" />
                    <Text fontSize="lg" color="#e11d48" mt="1" ml="10" mr="10" >
                    Log Out
                    </Text>
                  </HStack>
                  <ChevronRightIcon size="7"  ml="4" mr="3"/>
                </HStack>
            </Button>
          </VStack>

        {/* <VStack space={0.5} alignItems="center">
            <Button variant="ghost" size="lg" mt={1.5} fontWeight="bold">About Us</Button>
            <Button variant="ghost" size="lg" mt={1.5} fontWeight="bold">Terms and Conditions</Button>
            <Button variant="ghost" size="lg" mt={1.5} fontWeight="bold">Log Out</Button>
        </VStack> */}
      </Box>
    </Box> 

    

}

export default ()=> {
    return(
        <NativeBaseProvider>
            <FinalScreen/>
        </NativeBaseProvider>
    )
}