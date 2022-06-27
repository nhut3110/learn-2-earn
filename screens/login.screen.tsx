import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { NavigationProp } from "@react-navigation/native";
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
import { useForm } from "react-hook-form";
import { AuthAction } from "../actions/auth.action";
import { UserAction } from "../actions/user.action";
import { SET_USER } from "../app-redux/constant/actions";

interface ScreenProps {
  navigation: NavigationProp<any, any>; 
}

const LoginScreen: React.FC<ScreenProps> = ({
  navigation
}) => {
  const dispatch = useDispatch(); 
  const {
    handleSubmit,
    watch,
    setValue, 
  } = useForm();

  const watchFields = watch(); 

  const authAction = new AuthAction();

  const userAction = new UserAction();

  const handleLogin = async (data: {
    username: string, 
    password: string, 
  }) =>  {
    const loginResponse = await authAction.login(data.username, data.password);
    if (loginResponse.accessToken) {
      const user = await userAction.getProfile();
      if (user) {
        console.log("user info", user);
        dispatch({ type: SET_USER, payload: user });
        navigation.navigate("Home");
      }
    }
  }

  useEffect(() => {
    (async () => {
      const user = await userAction.getProfile();
      if (user) {
        dispatch({ type: SET_USER, payload: user });
        navigation.navigate("Home");
      }
    })(); 
  }, []);

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
              <Input
                height="52"
                backgroundColor="#242547"
                borderColor="#242547"
                py={4}
                placeholder="Enter Username"
                color="white" 
                value={watchFields?.username}
                onChangeText={e => setValue("username", e)}/>
            </FormControl>
            <FormControl mb="30">
              <FormControl.Label>Password</FormControl.Label>
              <Input 
                height="52" 
                type="password" 
                backgroundColor="#242547" 
                borderColor="#242547" 
                py={4} 
                placeholder="Enter Password" 
                color="white"
                value={watchFields?.password}
                onChangeText={e => setValue("password", e)}/>
            </FormControl>
            <Button mt="20" colorScheme="indigo" onPress={ handleSubmit((data: any) => handleLogin(data))}>
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
};

export default LoginScreen; 
