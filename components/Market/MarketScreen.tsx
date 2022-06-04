import React from "react";
import { 
        Box,
        NativeBaseProvider,
        Flex
      } from "native-base";
import NavBar from "../NavBar/NavBar";
import MarketHeader from "./MarketHeader/MarketHeader";
import MarketNav from "./MarketNavigation/MarketNav";
import ListProduct from "./MarketProduct/ListProduct/ListProduct";
import CollectionProducts from "./MarketProduct/Collection/CollectionProducts";

export default function MarketScreen() {
    return (
        <NativeBaseProvider>
            <Box bg="#171930" h="100%" w="100%">
                <MarketHeader/>
                <MarketNav/>
                <Box h="70%" w="100%">
                    <ListProduct/>
                    <CollectionProducts/>
                </Box>
                <NavBar/>
            </Box>
        </NativeBaseProvider>
    )
}