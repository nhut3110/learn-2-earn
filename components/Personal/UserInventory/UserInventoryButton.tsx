import React from "react";
import { useState } from 'react';
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
    }

const UserInventoryButton = (props: UserItems) => {
    const toast = useToast();
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    return(
        <Box alignItems="center" justifyContent="center">
            <Button
                    // onPress={() => setShowModal(true)}
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
            
            {/* <Modal 
            isOpen={showModal} 
            onClose={() => setShowModal(false)}>
            <Modal.Content bg="#FFFFFF" 
                w="350px" h="450px">
                <Modal.Header>Item</Modal.Header>
                <Modal.CloseButton />
                <Modal.Body>
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
                        <Flex direction='row' alignItems="center" w="250px" justifyContent="space-between">
                            <Text fontSize='3xl' fontWeight="bold" color='#000000'>{props.nameItem}</Text>
                            <Text fontSize='2xl' color="#000000"> x{props.stockItem}</Text>
                        </Flex>
                        
                        <Flex direction='row' alignItems="center" w="250px">
                            <Text fontSize='lg' fontWeight="600" color='#000000'>Date of purchase:</Text>
                            <Text fontSize='md'  color='#000000'>{"  "}{props.datePurchased}</Text>
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
                                    <CheckIcon size="5" color="emerald.500"/> 
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
                    <Modal.CloseButton/>
                    <Modal.Body>
                        <Image source={{
                            uri:
                                props.useItemQR == ""
                                ? ""
                                : props.useItemQR,
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
            </Modal> */}
        </Box> 
    )
}

export default UserInventoryButton;