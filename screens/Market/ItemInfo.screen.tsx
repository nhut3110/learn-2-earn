import React from "react";
import { ChevronLeftIcon, Button, Pressable, Modal, FormControl, Input, Center, NativeBaseProvider, Box, Image, Text, HStack } from "native-base";
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
  const [showModal, setShowModal] = useState(false);
  return <Center>
      <Button onPress={() => setShowModal(true)}>Button</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setShowModal(false);
            }}>
                Cancel
              </Button>
              <Button onPress={() => {
              setShowModal(false);
            }}>
                Save
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
              <ItemInfo/>
              <Example/>
            </Box>
          </NativeBaseProvider>
        );
    };
    