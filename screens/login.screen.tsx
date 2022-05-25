import React from 'react';
import { 
  Box, 
  Text, 
  Heading, 
  VStack, 
  FormControl, 
  Input, 
  Link, 
  Button, 
  HStack, 
  Center, 
} from "native-base";

export default function LoginScreen() {
  return (
    <Box backgroundColor="#171930" w="100%" h="100%">
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading size={"2xl"} fontWeight="600" color="#FFFFFF" _dark={{
          color: "#FFFFFF"
        }}>
            Wishing you 
            joy and happiness
          </Heading>
          <Heading mt="1" _dark={{
          color: "warmGray.200"
        }} color="coolGray.600" fontWeight="medium" size="xs">
            Please give us good mark!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Username</FormControl.Label>
              <Input height="52" backgroundColor="#242547" borderColor="#242547" py={4} placeholder="Enter Email" color="white"/>
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input height="52" type="password" backgroundColor="#242547" borderColor="#242547" py={4} placeholder="Enter Password" color="white"/>
              <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "indigo.500"
            }} alignSelf="flex-end" mt="1">
                Forget Password?
              </Link>
            </FormControl>
            <Button mt="2" colorScheme="indigo">
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>
                I'm a new user.{" "}
              </Text>
              <Link _text={{
              color: "indigo.500",
              fontWeight: "medium",
              fontSize: "sm"
            }} href="#">
                Sign Up
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
}
