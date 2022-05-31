import React from "react";
import { ChevronLeftIcon, Button, Pressable, Modal, FormControl, Input, Center, NativeBaseProvider, Box, Image, Text, HStack, InfoOutlineIcon, CheckIcon, useToast } from "native-base";
import { useState } from "react";

const ItemInfo = () => {
  return<Box>
    <Pressable my="30px" ml="3" w="150px" bg="transparent" color="transparent">
      <HStack space={1} ml="-2" mt="1">
        <ChevronLeftIcon size="6" color="#FFFFFF"/> 
        <Text color="#FFFFFF" fontSize="2xl" fontWeight="600" mt="-1" >
           Item Info
        </Text>
      </HStack>
    </Pressable>
    <Center>  
      <Image source={{ uri: "https://sc04.alicdn.com/kf/U0c6c7fa9609d4ecda336bfd114d6a3f0o.jpeg"}} 
                  alt="Alternate Text" size="350px" borderRadius="20"/>
    </Center>
  </Box>;
};

const Example = () => {
  const toast = useToast();
  const [showModal, setShowModal] = useState(false);
  return <Center mt="5">
      <Button onPress={() => setShowModal(true)}>BUY</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Buy</Modal.Header>
          <Modal.Body>
            <HStack space={2} justifyContent="center">
              <InfoOutlineIcon size="5" />
              <Text>
                Buy this item ?
              </Text>
            </HStack>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button onPress={() => {
              setShowModal(false);
              toast.show({
                render: () => {
                return <Box bg="primary.100" px="2" py="1" rounded="sm" mb={5}>
                  <HStack space={2}>
                    <CheckIcon size="5" color="emerald.500"/> 
                    <Text>  
                      Successfully purchase
                    </Text>
                  </HStack>
                </Box>;
                }
              });
            }}>
                Purchase
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
    </Center>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Box bg="#171930" h="100%" w="100%">
              <ItemInfo />
              <Example/>
            </Box>
          </NativeBaseProvider>
        );
    };
    