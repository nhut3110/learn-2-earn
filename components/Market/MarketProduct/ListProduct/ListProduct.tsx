import React from "react";
import { Flex, HStack, NativeBaseProvider, ScrollView} from "native-base";
import MarketProduct from "./MarketProduct";


export default function ListProduct(){
    return(
        <NativeBaseProvider>
            <ScrollView
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
            >
                <HStack space={4}  px="2">
                    <MarketProduct
                    uri='https://i.pinimg.com/564x/e9/d4/97/e9d49723d00cbb642dd0817db861af84.jpg'
                    nameProduct='1 hour use MetalShop'
                    costProduct= '4'
                    reactCount='123'
                    />
                    <MarketProduct
                    uri='https://sc04.alicdn.com/kf/U0c6c7fa9609d4ecda336bfd114d6a3f0o.jpeg'
                    nameProduct='Pepsi'
                    costProduct= '4'
                    reactCount='69'
                    />
                    <MarketProduct
                    uri='https://i.pinimg.com/564x/e9/d4/97/e9d49723d00cbb642dd0817db861af84.jpg'
                    nameProduct='Pepsi'
                    costProduct= '4'
                    reactCount='54'
                    />
                </HStack>
            </ScrollView>
        </NativeBaseProvider>
    )
}