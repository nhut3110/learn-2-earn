import React from "react";
import {
  Box,
  NativeBaseProvider,
  Flex,
  HStack,
  ScrollView,
  Text,
} from "native-base";
import NavBar from "../components/NavBar/NavBar";
import MarketHeader from "../components/Market/MarketHeader/MarketHeader";
import MarketNav from "../components/Market/MarketNavigation/MarketNav";
import ListProductCollection from "../components/Market/MarketProduct/Collection/ListProductCollection";
import MarketProduct from "../components/Market/MarketProduct/ListProduct/MarketProduct";

export default function MarketScreen() {
  return (
    <NativeBaseProvider>
      <Box bg="#171930" h="100%" w="100%">
        <MarketHeader />
        <MarketNav />
        <Flex direction="column">
          <Box mx="10px">
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <HStack space={4} mb="100px">
                <MarketProduct
                  uri="https://sc04.alicdn.com/kf/U0c6c7fa9609d4ecda336bfd114d6a3f0o.jpeg"
                  nameProduct="Pepsi"
                  costProduct={4}
                  reactCount={54}
                  typeProduct="Drink"
                />
                <MarketProduct
                  uri="https://i.pinimg.com/564x/e9/d4/97/e9d49723d00cbb642dd0817db861af84.jpg"
                  nameProduct="1 hour use MetalShop"
                  costProduct={3}
                  reactCount={123}
                  typeProduct="Ticket"
                />
                <MarketProduct
                  uri="https://i.pinimg.com/564x/e9/d4/97/e9d49723d00cbb642dd0817db861af84.jpg"
                  nameProduct="1 hour use Maker"
                  costProduct={2}
                  reactCount={123}
                  typeProduct="Ticket"
                />
              </HStack>
            </ScrollView>
          </Box>
          <Box px="5" position="absolute" bottom="40px">
            <Text color="#FFFFFF" fontSize="4xl" fontWeight="700" mb="2">
              Lastest Collection
            </Text>
            <ScrollView h="140px" showsVerticalScrollIndicator={false}>
              <ListProductCollection
                uri="https://i.pinimg.com/564x/e9/d4/97/e9d49723d00cbb642dd0817db861af84.jpg"
                nameProduct="1 hour use MetalShop"
                costProduct={10}
                reactCount={16}
                typeProduct="Ticket"
              />
              <ListProductCollection
                uri="https://sc04.alicdn.com/kf/U0c6c7fa9609d4ecda336bfd114d6a3f0o.jpeg"
                nameProduct="Pepsi"
                costProduct={3}
                reactCount={54}
                typeProduct="Drink"
              />
            </ScrollView>
          </Box>
        </Flex>
      </Box>
    </NativeBaseProvider>
  );
}
