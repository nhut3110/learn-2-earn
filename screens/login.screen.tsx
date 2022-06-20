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
        <Box mt="20" safeArea w="100%" maxW="335">
          <Heading size={"2xl"} fontWeight="600" color="#FFFFFF" _dark={{
            color: "#FFFFFF"
          }}>
            Wishing you
            joy and happiness
          </Heading>
          <Heading mt="1" mb="20" _dark={{
            color: "warmGray.200"
          }} color="coolGray.600" fontWeight="medium" size="xs">
            Please give us good mark!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Username</FormControl.Label>
              <Input height="52" backgroundColor="#242547" borderColor="#242547" py={4} placeholder="Enter Email" color="white" />
            </FormControl>
            <FormControl mb="30">
              <FormControl.Label>Password</FormControl.Label>
              <Input height="52" type="password" backgroundColor="#242547" borderColor="#242547" py={4} placeholder="Enter Password" color="white" />
            </FormControl>
            <Button mt="20" colorScheme="indigo">
              Sign in
            </Button>
            <HStack mt="4" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600" _dark={{
                color: "warmGray.200"
              }}>
                {" "}
              </Text>
              <Link _text={{
                color: "coolGray.600",
                fontWeight: "medium",
                fontSize: "sm"
              }} href="#">
                Forgot password?
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
}
