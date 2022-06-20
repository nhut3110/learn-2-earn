import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  Text,
  HStack,
  useDisclose,
} from "native-base";
import SearchItems from "./SearchItems";

const MarketHeader = () => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();
  return (
    <Box mt="20px">
      <HStack justifyContent="space-between" alignItems="center" mt="10">
        <Text fontSize="4xl" color="#FFFFFF" fontWeight="700" ml="5">
          Find your items
        </Text>
        <Box mr="10px">
          <SearchItems />
        </Box>
      </HStack>
    </Box>
  )
}

export default MarketHeader;