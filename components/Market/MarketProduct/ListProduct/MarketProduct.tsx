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
        } from "native-base";


interface ProductInfo{
    uri?: string;
    nameProduct: string;
    costProduct: number;
    reactCount: number;
    typeProduct: string;
}

const MarketProduct = (props: ProductInfo) => {
    return(
        <Center shadow={3}>
                <Image source={{
                    uri:
                        props.uri == ""
                        ? ""
                        : props.uri,
                }}  
                alt="Alternate Text" 
                size="2xl" 
                borderRadius="32"/>
                <Center position="absolute" bottom="16" ml="-80px">                    
                    <Button position="absolute" right="-110" top="-180"
                    bg="#808080:alpha.40" h="45px" w="100" 
                    borderWidth="1" borderColor="#ffff" borderRadius="50">
                    <HStack space={2} justifyContent="center" my="2">
                        <FavouriteIcon size="5" mt="1" color="rose.600"/>
                        <Text color="#FFFF" fontSize="lg">
                          {props.reactCount}
                        </Text>
                      </HStack>
                    </Button>
                    <Button
                    position="absolute" px="3" py="2"
                    bg="#808080:alpha.40" h="90" w="220" 
                    borderWidth="1" borderColor="#ffff" borderRadius="15">
                      <VStack space={2}>
                        <Text color="#fff" fontSize="xl" fontWeight="600">
                          {props.nameProduct}
                        </Text>
                        <HStack space={16}>
                            <Text color="#fff" fontSize="md">
                              Cost
                            </Text>
                            <Text color="#fff" fontSize="md">
                              {props.costProduct} ETH
                            </Text>
                        </HStack>
                      </VStack>
                    </Button>
                  </Center>
              </Center>
    )
}

// const ProductCollection = (props: ProductInfo) => {
//   return(
//       <Button h="120px" borderRadius="15" bg="#808080:alpha.40" borderWidth="1" borderColor="#ffff">
//       <HStack space={5}>
//         <Image 
//         source={{
//           uri:
//           props.uri == ""
//           ? ""
//           : props.uri,
//         }} alt="Alternate Text" 
//         size="xl" 
//         borderRadius="10" 
//         h="95px" 
//         w="95px" />
//         <VStack pr="5">
//           <Text color="#FFFFFF"
//                 fontSize="lg"
//                 fontWeight="700" mb="2">
//             {props.nameProduct}
//           </Text> 
//           <Text color="#FFFFFF"
//                 fontSize="md"
//                 fontWeight="500" mb="2">
//             {props.typeProduct}
//           </Text>
//           <Text color="#FFFFFF"
//                 fontSize="sm"
//                 fontWeight="400" mb="2">
//             {props.costProduct} ETH
//           </Text>
//           </VStack>
//         <Button bg="#808080:alpha.40" h="30px" w="60px" 
//             borderWidth="1" borderColor="#ffff" borderRadius="50" mt="16">
//               <HStack space={1} justifyContent="center">
//                 <FavouriteIcon size="3"color="rose.600"/>
//                 <Text color="#FFFF" fontSize="sm" mt="-1">
//                   {props.reactCount}
//                 </Text>
//               </HStack>
//             </Button>
//       </HStack>
//     </Button>
//   )
// }

export default MarketProduct;

