import React from "react";
import { 
        Box,
        NativeBaseProvider, 
      } from "native-base";
import NavBar from "../NavBar/NavBar";
import MarketHeader from "./MarketHeader/MarketHeader";

export default function MarketScreen() {
    return (
        <NativeBaseProvider>
            <Box bg="#171930" h="100%" w="100%">
                <MarketHeader/>
                <NavBar/>
            </Box>
        </NativeBaseProvider>
    )
}