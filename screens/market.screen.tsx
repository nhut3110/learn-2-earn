import { useEffect, useState } from "react";
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
import ItemInfoScreen from "../components/Market/MarketProduct/MarketProInfo";
import { getInventoryAction } from "../actions";
import { Inventory } from "../entities";

export const MarketScreen = (props: any) => {
  const [inventories, setInventories] = useState<Inventory[]>([]);
  const inventoryAction = getInventoryAction();

  useEffect(() => {
    (async () => {
      const inventories = await inventoryAction.getInventories();
      setInventories(inventories);
      console.log("inventoties response", inventories);
    })();
  }, []);

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
                {inventories.map((item, index) => (
                  <MarketProduct
                    key={`market-product-${index}`}
                    id={item._id}
                    uri={item.image}
                    nameProduct={item.title}
                    costProduct={item.price}
                    reactCount={item.interactions.length}
                    typeProduct="Drink"
                    onClick={() => {
                      console.log("onclick item");
                      props?.navigation?.navigate("ItemInfoScreen", { id: item._id })
                    }}
                  />
                ))}
              </HStack>
            </ScrollView>
          </Box>
          <Box px="5" position="absolute" bottom="40px">
            <Text color="#FFFFFF" fontSize="4xl" fontWeight="700" mb="2">
              Lastest Collection
            </Text>
            <ScrollView
              h="160px"
              mb="-25px"
              showsVerticalScrollIndicator={false}>
              {inventories.map((item, index) => (
                <ListProductCollection
                  key={`list-product-${index}`}
                  id={item._id}
                  uri={item.image}
                  nameProduct={item.title}
                  costProduct={item.price}
                  reactCount={item.interactions.length}
                  typeProduct="Drink"
                  onClick={() => {
                    console.log("onclick item");
                    props?.navigation?.navigate("ItemInfoScreen", { id: item._id })
                  }}
                />
              ))}
            </ScrollView>
          </Box>
        </Flex>
      </Box>
    </NativeBaseProvider>
  );
}

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Market" component={MarketScreen} />
      <Stack.Screen name="ItemInfoScreen" component={ItemInfoScreen} />
    </Stack.Navigator>
  );
}