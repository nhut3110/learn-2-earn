import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
    Image, 
    Text, 
    Button, 
    Modal,
    Flex,
    HStack,
    VStack,
    CheckIcon,
    Box,
    useToast
    } from "native-base";

    interface UserItems {
    uri?: string;
    nameItem: string;
    stockItem: number;
    datePurchased: string;
    useItemQR: string;
    onClick(): void; 
    }

const UserInventoryButton = (props: UserItems) => {
    const toast = useToast();
    return(
        <Box alignItems="center" justifyContent="center">
            <Button
                //onPress={() => navigation.navigate('InventoryItem')}
                // onPress={() => setShowModal(true)}
                onPress={props.onClick}
                variant="ghost"
                size='sm'
                bg="#1E203B"
                borderRadius="10" 
                shadow={3}
                w="99%"
                mb="10px"
                >
                <Flex direction="row" alignItems="center" justifyContent="space-between" w="350px">
                    <Image source={{
                        uri:
                            props.uri == ""
                            ? ""
                            : props.uri,
                    }} 
                    alt="Alternate Text" 
                    size="sm"  
                    borderRadius="5" 
                    />
                    <Text fontSize="lg"
                    color="#FFFFFF"
                    fontWeight="500" >
                    {props.nameItem}
                    </Text>
                    <Text fontSize="sm"
                    color="#FFFFFF"
                    fontWeight="500"
                    ml="5" >
                    x{props.stockItem}
                    </Text>
                </Flex>
            </Button>
        </Box> 
    )
}


export default UserInventoryButton;