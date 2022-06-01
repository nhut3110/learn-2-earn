import { useState } from 'react';
import {View} from 'react-native';

import {
    Button, 
    Flex,
    Spacer,
    Text,
    Box,
    Icon,
    VStack,
    Modal,
    HStack,
} from 'native-base';

import { 
    Entypo,
    AntDesign,
} from "@expo/vector-icons";

interface TransactionHistory {
    tsType: string, 
    tsDate: string, 
    senderId: string, 
    creditsAmount: number, 
    timeStamp: string,
}

const LinearGradient = require("expo-linear-gradient").LinearGradient;

const HistoryButton = (props: TransactionHistory) => {
    const [showModal, setShowModal] = useState(false);
    return(
        <VStack flex="1" space={3} mb="3" alignItems="center">
            <View>
                <Button
                    onPress={() => setShowModal(true)}
                    variant="ghost"
                    size='sm'
                    w="100%" 
                    h="100%"
                    leftIcon={<Icon as={<Entypo name="credit"/>} color="white" size = "10"/>}
                    rightIcon={<Icon as={<Entypo name="chevron-thin-right"/>} color="white" size = "10"/>}>
                    <Flex direction="row" w="100%" justifyContent="flex-start">
                        <Box mr="10">
                        <Text color='#fff' fontWeight="700">{props.tsType}</Text>
                        <Text color="#54566E">{props.tsDate} | From: {props.senderId}</Text>
                        </Box>
                        <Box>
                        <Text color='#fff' fontWeight="600">{props.creditsAmount} ETH</Text>
                        <Text color="#54566E">{props.timeStamp}</Text>
                        </Box>
                    </Flex>
                </Button>
            </View>
            <Modal 
                isOpen={showModal} 
                onClose={() => setShowModal(false)}>
                <Modal.Content bg={{
                        linearGradient: {
                        colors: ["rgba(234,175,200,.85)", "rgba(101,78,163,.85)"],
                        start: [0, 1],
                        end: [0, 0]
                        }
                    }} 
                    w="350">
                    <Modal.Body>
                        <VStack space={5}>
                            <HStack alignItems="center">
                                <Icon as={<AntDesign name="downcircle"/>} color={"white"} size = "20"/>
                                <Flex ml='2' direction='column' justify='center' size='20' w="100%">
                                    <Flex direction='row' w="100%" alignItems="center">
                                        <Text fontSize='xl' fontWeight="bold" color='#fff' mr='1'>Sub Total</Text>
                                        <Icon as={<AntDesign name="checkcircle"/>} color={"#266ED7"} size="4"/>
                                    </Flex>
                                    <Text fontSize='xl' color="rgba(255,255,255,1)">+{props.creditsAmount} ETH</Text>
                                    <Text fontSize='xl' color="rgba(255,255,255,.7)">ID: {props.senderId}</Text>
                                </Flex>
                            </HStack>
                            <HStack alignItems="center" justifyContent="space-between">
                                <Text fontSize='md' fontWeight="bold" color='#fff'>Transaction Date</Text>
                                <Text fontSize='md' color="rgba(255,255,255,.7)">{props.tsDate} | {props.timeStamp}</Text>
                            </HStack>
                            <HStack alignItems="center" justifyContent="space-between">
                                <Text fontSize='md' fontWeight="bold" color='#fff'>Transaction Source</Text>
                                <Text fontSize='md' color="rgba(255,255,255,.7)">{props.senderId}</Text>
                            </HStack>
                        </VStack>
                    </Modal.Body>
                </Modal.Content>
                <Modal.Content mt="2" bg={{
                        linearGradient: {
                        colors: ["rgba(234,175,200,.85)", "rgba(101,78,163,.85)"],
                        start: [0, 1],
                        end: [0, 0]
                        }
                    }} w='350'>
                    <Modal.Body>
                        <HStack alignItems="center" justifyContent="space-between">
                            <Text fontSize='md' fontWeight="bold" color="#fff">Sub Total</Text>
                            <Text fontSize='md' color="rgba(255,255,255,.7)">$298.77</Text>
                        </HStack>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
        </VStack> 
    )
};

const config = {
    dependencies: {
      "linear-gradient": LinearGradient
    }
};

export default HistoryButton;