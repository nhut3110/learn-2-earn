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

export default function MarketNav() {
  return (
    <Box mx="5" my="5">
      <HStack justifyContent="space-between" >
        <Button w="30%" bg="transparent" borderRadius="50" borderWidth="1" borderColor="coolGray.200">
          <Text fontSize="lg"
            fontWeight="700"
            color="#FFFFFF"
          >
            Trending
          </Text>
        </Button>
        <Button w="30%" bg="transparent" borderRadius="50" borderWidth="0" borderColor="coolGray.200">
          <Text fontSize="lg"
            fontWeight="700"
            color="#FFFFFF"
          >
            Popular
          </Text>
        </Button>
        <Button w="30%" bg="transparent" borderRadius="50" borderWidth="0" borderColor="coolGray.200">
          <Text fontSize="lg"
            fontWeight="700"
            color="#FFFFFF"
          >
            Following
          </Text>
        </Button>
      </HStack>
    </Box>
  )
}