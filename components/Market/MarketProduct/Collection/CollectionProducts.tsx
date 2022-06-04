import React from "react";
import { Flex, HStack, NativeBaseProvider, ScrollView, Box, Text} from "native-base";
import ProductCollection from "./ListProductCollection";

export default function CollectionProducts(){
    return(
        <NativeBaseProvider>
                <Box px="5">
                    <Text color="#FFFFFF"
                        fontSize="4xl"
                        fontWeight="700" mb="2">
                        Lastest Collection
                    </Text>
                <ScrollView
                    h="150px"
                    showsVerticalScrollIndicator={false}
                >
                       
                    <ProductCollection
                    uri="https://i.pinimg.com/564x/e9/d4/97/e9d49723d00cbb642dd0817db861af84.jpg"
                    nameProduct='1 hour use MetalShop'
                    costProduct='4'
                    reactCount='16'
                    typeProduct='Ticket'
                    />

                    <ProductCollection
                    uri="https://i.pinimg.com/564x/e9/d4/97/e9d49723d00cbb642dd0817db861af84.jpg"
                    nameProduct='1 hour use MakerSpace'
                    costProduct='4'
                    reactCount='23'
                    typeProduct='Ticket'
                    />

                    <ProductCollection
                    uri="https://i.pinimg.com/564x/e9/d4/97/e9d49723d00cbb642dd0817db861af84.jpg"
                    nameProduct='Pepsi'
                    costProduct='4'
                    reactCount='1234'
                    typeProduct='Drink'
                    />
                </ScrollView> 
                </Box>
        </NativeBaseProvider>
    )
}