import React from "react";
import { useState } from 'react';
import { AntDesign, Octicons } from "@expo/vector-icons";
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
  CheckIcon,
  Flex,
  Modal,
  ScrollView,
  SearchIcon,
  Input,
  Icon,
  useDisclose,
  Actionsheet,
  FavouriteIcon,
  useToast
} from "native-base";



interface ProductInfo {
  uri?: string;
  nameProduct: string;
  costProduct: number;
  reactCount: number;
  typeProduct: string;
}

const MarketProduct = (props: ProductInfo) => {
  const toast = useToast();
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  return (
    <Center shadow={3}>
      <Image source={{
        uri:
          props.uri == ""
            ? ""
            : props.uri,
      }}
        alt="Alternate Text"
        size="2xl"
        borderRadius="32"
        mb="150px" />
      <Center position="absolute" bottom="16" mb="140px">
        <Button position="absolute" right="-110" top="-190"
          bg="#808080:alpha.40" h="45px" w="100"
          borderWidth="1" borderColor="#ffff" borderRadius="50"
          onPress={() => toast.show({
            placement: "bottom",
            render: () => {
              return <Box bg="primary.100" px="2" py="1" rounded="sm" mb={5} >
                <Text>
                  Followed this product
                </Text>
              </Box>;
            }
          })}
        >
          <HStack space={2} justifyContent="center" my="2">
            <FavouriteIcon size="5" mt="1" color="rose.600" />
            <Text color="#FFFF" fontSize="lg">
              {props.reactCount}
            </Text>
          </HStack>
        </Button>
        <Button
          onPress={() => setShowModal(true)}
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


      {/* <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}>
        <Modal.Content bg="#FFFFFF"
          w="350px" h="450px">
          <Modal.Header>Item</Modal.Header>
          <Modal.CloseButton />
          <Modal.Body my="10">
            <VStack space={2} alignItems="center">
              <Image source={{
                uri:
                  props.uri == ""
                    ? ""
                    : props.uri,
              }}
                alt="Alternate Text"
                size="2xl"
                borderRadius="5"
              />
              <Flex direction='column' alignItems="self-start" w="80%">
                <Text fontSize='3xl' fontWeight="bold" color='#000000'>{props.nameProduct}</Text>
                <Flex direction='row' alignItems="self-start">
                  <Text fontSize='2xl' fontWeight="500" color='#000000'>Type:</Text>
                  <Text fontSize='2xl' fontWeight="300" color='#000000'>{"  "}{props.typeProduct}</Text>
                </Flex>
              </Flex>

              <Flex direction='row' alignItems="center" w="80%">
                <Text fontSize='lg' fontWeight="600" color='#000000'>Cost:</Text>
                <Text fontSize='lg' color='#000000'>{"  "}{props.costProduct} ETH</Text>
              </Flex>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button bg="#10b981" w="80px" onPress={() => {
                setShowModal2(true);
                setShowModal(false);
                toast.show({
                  render: () => {
                    return <Box bg="primary.100" px="2" py="1" rounded="sm" mb={5}>
                      <HStack space={2}>
                        <CheckIcon size="5" color="emerald.500" />
                        <Text>
                          Successfully purchase
                        </Text>
                      </HStack>
                    </Box>;
                  }
                });
              }}>
                Buy
              </Button>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                setShowModal(false);
              }}>
                Cancel
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Modal isOpen={showModal2} onClose={() => setShowModal2(false)} size="lg">
        <Modal.Content bg="#FFFFFF"
          w="350px" h="450px">
          <Modal.Header>Purchase</Modal.Header>
          <Modal.CloseButton
            onPress={() => {
              setShowModal2(false);
              toast.show({
                render: () => {
                  return <Box bg="primary.100" px="2" py="1" rounded="sm" mb={5}>
                    <HStack space={1}>
                      <Octicons name="info" size={18} color="black" />
                      <Text>
                        Your item will move to inventory
                      </Text>
                    </HStack>
                  </Box>;
                }
              });
            }}
          />
          <Modal.Body my="10">
            <Center>
              <AntDesign name="checkcircleo" size={160} color="black" />
              <Text
                fontSize="2xl"
                fontWeight="600"
                mt="30px"
              >
                Buy successfully!
              </Text>
            </Center>
          </Modal.Body>
          <Modal.Footer>
            <Button bg="#10b981" flex="1" onPress={() => {
              setShowModal2(false);
              toast.show({
                render: () => {
                  return <Box bg="primary.100" px="2" py="1" rounded="sm" mb={5}>
                    <HStack space={1}>
                      <Octicons name="info" size={18} color="black" />
                      <Text>
                        Your item will move to inventory
                      </Text>
                    </HStack>
                  </Box>;
                }
              });
            }}>
              <Text
                color="white"
                fontWeight="700"
                fontSize="lg"
              >
                Comfirm !
              </Text>
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal> */}
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

