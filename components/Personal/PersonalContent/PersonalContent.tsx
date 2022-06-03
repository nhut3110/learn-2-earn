import React from "react";
import { 
        Box, 
        Heading, 
        AspectRatio, 
        Image, 
        Text, 
        Center, 
        HStack, 
        Stack, 
        NativeBaseProvider, 
        Button, 
        VStack, 
        ScrollView ,
        Flex
      } from "native-base";

import UserInfo from './UserInfo';
import UserInventoryButton from '../UserInventory/UserInventoryButton';

// interface addressWallet {
//     senderId: string, 
// }

export default function PersonalContent() {
    return (
        <NativeBaseProvider>
            {/* mt="-135px" */}
            <Box backgroundColor="#171930" w="100%" mt="-135px" px={3}> 
                <Stack space={3}>
                    <Text fontSize="md" _light={{
                        color: "muted.400"
                    }} _dark={{
                        color: "muted.400"
                    }} fontWeight="500" mt="10px" >
                        0x77bb...b8E3
                        {/* {props.senderId} */}
                    </Text>

                    <HStack justifyContent="space-between" h="50px">
                        <Button w="200px" bg="transparent" borderRadius="50" borderWidth="1" borderColor="coolGray.200">
                            <Text fontSize="md" _light={{
                                color: "coolGray.50"
                            }} _dark={{
                                color: "muted.400"
                            }} fontWeight="700">
                            Check your grade
                            </Text>
                        </Button>
                        <Button bg="transparent" justifyContent="center">
                            <Text fontSize="3xl" _light={{
                                color: "muted.400"
                            }} _dark={{
                                color: "muted.400"
                            }} fontWeight="500" mt="-15px">
                            ...
                            </Text>
                        </Button>
                    </HStack>

                    <Text fontWeight="400"
                        _light={{
                            color: "muted.200"
                        }} _dark={{
                            color: "muted.300"
                        }}>
                        A studious and team player Computer Science and Engineering sophomore at
                        VNUK Institute for Research and Executed Education. and more
                    </Text>
                </Stack>
                <UserInfo
                    creditsAmount= '172'
                    gpaUser='3.7'
                    userClass='20CSE'
                />

                <Flex direction="column">
                <Heading
                  py="2"
                  size={"lg"}
                  fontWeight="600"
                  color="#FFFFFF"
                  _dark={{
                    color: "#FFFFFF"
                  }}>Inventory</Heading>
                        <VStack space={2}>
                            <ScrollView
                            maxW="100%"
                            h="100px"
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
                        </VStack>
                </Flex>
            </Box>
        </NativeBaseProvider>
    )
}