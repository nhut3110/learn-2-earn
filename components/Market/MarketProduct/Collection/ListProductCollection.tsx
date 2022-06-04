import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
        Box,
        Heading,  
        Image, 
        Text, 
        Center, 
        HStack, 
        NativeBaseProvider, 
        Button, 
        VStack, 
        ScrollView, 
        SearchIcon,
        Input,
        Icon,
        useDisclose,
        Actionsheet,
        FavouriteIcon,
        Flex
        } from "native-base";


interface ProductInfo{
    uri?: string;
    nameProduct: string;
    costProduct: number;
    reactCount: number;
    typeProduct: string;
}

const ProductCollection = (props: ProductInfo) => {
    return(
        <Button h="120px" borderRadius="15" bg="#808080:alpha.40" borderWidth="1" borderColor="#ffff" justifyContent="flex-start" mb="10px">
            <Flex direction="row" alignItems="center" justifyContent="space-between">
                <Flex direction="row" alignItems="center" justifyContent="space-between" w="80%">
                    <Image 
                    source={{
                    uri:
                    props.uri == ""
                    ? ""
                    : props.uri,
                    }} alt="Alternate Text" 
                    size="xl" 
                    borderRadius="10" 
                    h="95px" 
                    w="95px" 
                    mr="20px"
                    />
                    <VStack pr="5">
                        <Text color="#FFFFFF"
                                fontSize="lg"
                                fontWeight="700" mb="2">
                            {props.nameProduct}
                        </Text> 
                        <Text color="#FFFFFF"
                                fontSize="md"
                                fontWeight="500" mb="2">
                            {props.typeProduct}
                        </Text>
                        <Text color="#FFFFFF"
                                fontSize="sm"
                                fontWeight="400" mb="2">
                            {props.costProduct} ETH
                        </Text>
                    </VStack>
                </Flex>
                <Button bg="#808080:alpha.40" h="30px" w="60px" 
                    borderWidth="1" borderColor="#ffff" borderRadius="50" mt="16">
                    <HStack space={1} justifyContent="center">
                        <FavouriteIcon size="3"color="rose.600"/>
                        <Text color="#FFFF" fontSize="sm" mt="-1">
                        {props.reactCount}
                        </Text>
                    </HStack>
                </Button>
            </Flex>
        </Button>
    )
}

export default ProductCollection;