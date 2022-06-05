import React from "react";
import { 
        NativeBaseProvider,
        Flex,
        ScrollView,
        Box,
        Text
      } from "native-base";
import PersonalHeader from './PersonalHeader/PersonalHeader'
import PersonalContent from './PersonalContent/PersonalContent'
import UserInventoryButton from './UserInventory/UserInventoryButton'
import NavBar from '@/components/NavBar/NavBar'

export default function PeronalScreen() {
    return (
        <NativeBaseProvider>
            <Box bg="#171930" h="100%" w="100%">
                <PersonalHeader/>
                <PersonalContent/>
                <Box mt="100px">
                    <Flex direction="column">
                        <Text
                        py="2"
                        fontSize="2xl"
                        fontWeight="600"
                        color="#FFFFFF">
                        Inventory
                        </Text>
                        <Flex direction="column" >
                            <Box px="5">
                                <ScrollView
                                h="100px"
                               
                                showsVerticalScrollIndicator={false}
                                >
                                <UserInventoryButton
                                    uri='https://i.pinimg.com/564x/e9/d4/97/e9d49723d00cbb642dd0817db861af84.jpg'
                                    nameItem='Parking ticket'
                                    stockItem='4'
                                    datePurchased='25/05/2022'
                                    useItemQR='https://baergbryce.files.wordpress.com/2011/09/1.jpeg'
                                />
                                <UserInventoryButton
                                    uri='https://sc04.alicdn.com/kf/U0c6c7fa9609d4ecda336bfd114d6a3f0o.jpeg'
                                    nameItem='Pepsi'
                                    stockItem='2'
                                    datePurchased='22/05/2022'
                                    useItemQR='https://baergbryce.files.wordpress.com/2011/09/1.jpeg'
                                />
                                <UserInventoryButton
                                    uri='https://i.pinimg.com/564x/e9/d4/97/e9d49723d00cbb642dd0817db861af84.jpg'
                                    nameItem='1 hour use MetalShop'
                                    stockItem='4'
                                    datePurchased='16/05/2022'
                                    useItemQR='https://baergbryce.files.wordpress.com/2011/09/1.jpeg'
                                />
                                </ScrollView>
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
                
            </Box>
        </NativeBaseProvider>
    )
}