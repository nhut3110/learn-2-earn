import React from "react";
import {
  ChevronLeftIcon,
  Button,
  Pressable,
  Modal,
  FormControl,
  Input,
  Center,
  NativeBaseProvider,
  Box,
  Image,
  Text,
  HStack,
  VStack,
  InfoOutlineIcon,
  CheckIcon,
  Flex,
  useToast
} from "native-base";
import { useState } from "react";

const InventoryItemScreen = (props: any) => {
  return <Box>
    <Pressable my="30px" ml="3" w="150px" bg="transparent" color="transparent" onPress={() => props?.navigation?.goBack()}>
      <HStack space={1} ml="-2" mt="1">
        <ChevronLeftIcon size="6" color="#FFFFFF" />
        <Text color="#FFFFFF" fontSize="2xl" fontWeight="600" mt="-1.5" >
          Inventory
        </Text>
      </HStack>
    </Pressable>
    <Center>
      <Image
        source={{
          uri:
            "https://sc04.alicdn.com/kf/U0c6c7fa9609d4ecda336bfd114d6a3f0o.jpeg"
        }}
        alt="Alternate Text" size="350px" borderRadius="20" />
    </Center>

    <VStack mt="5" alignItems="center">
      <Flex direction='row' alignItems="center" w="250px" justifyContent="space-between">
        <Text fontSize='3xl' fontWeight="bold" color='#ffffff'>Pepsi</Text>
        <Text fontSize='2xl' color='#ffffff'> x2</Text>
      </Flex>

      <Flex direction='row' alignItems="center" w="250px">
        <Text fontSize='lg' fontWeight="600" color='#ffffff'>Date of purchase:</Text>
        <Text fontSize='md' color='#ffffff'>{"  "}21/02/2012</Text>
      </Flex>
    </VStack>
  </Box>;
};

const UseForm = () => {
  const toast = useToast();
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  return (<Center mt="5">
    <Button onPress={() => setShowModal(true)} bg="#10b981" w="100px" h="50px">Use</Button>
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header> Consume </Modal.Header>
        <Modal.Body>
          <HStack space={2} justifyContent="center">
            <InfoOutlineIcon size="5" />
            <Text>
              Use this item ?
            </Text>
          </HStack>
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
                        Used successfully
                      </Text>
                    </HStack>
                  </Box>;
                }
              });
            }}>
              Use
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
        <Modal.Header>Use Item</Modal.Header>
        <Modal.CloseButton />
        <Modal.Body>
          <Image source={{
            uri:
              "https://assets.jibecdn.com/prod/pepsico/0.22.164/assets/wechat-qrcode.jpg"
          }}
            alt="QR"
            size="2xl"
            borderRadius="5"
            alignSelf="center"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button bg="#10b981" flex="1" onPress={() => {
            setShowModal2(false)
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
    </Modal>
  </Center>
  );
}

export default
  (props: any) => {
    return (
      <NativeBaseProvider>
        <Box bg="#171930" h="100%" w="100%">
          <InventoryItemScreen navigation={props.navigation} />
          <UseForm />
        </Box>
      </NativeBaseProvider>
    );
  };