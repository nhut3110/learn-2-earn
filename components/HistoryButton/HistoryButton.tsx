import { useState } from 'react';
import {View} from 'react-native';

import {
    Button, 
    Flex,
    Text,
    Box,
    Icon,
    VStack,
    Modal,
} from 'native-base';

import { 
    AntDesign,
    MaterialCommunityIcons,
    Entypo,
} from "@expo/vector-icons";

interface TransactionHistory {
    tsType: string, 
    tsDate: string, 
    senderId: string, 
    creditsAmount: number, 
    timeStamp: string,
}

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

            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content>
                <Modal.CloseButton/>
                <Modal.Header>Among Us</Modal.Header>
                <Modal.Body>
                    <Text>SussyBaka</Text>
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
        </VStack> 
    )
}

export default HistoryButton;