import { useEffect, useState } from "react";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
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
  WarningIcon,
  Flex,
  useToast
} from "native-base";
import { Inventory } from "../../../../entities";
import { getInventoryAction } from "../../../../actions";
import { AxiosError } from "axios"


const ItemInfoScreen = (props: any) => {
  const [inventory, setInventory] = useState<Inventory>();
  const inventoryAction = getInventoryAction();

  const handleGetInventory = async () => {
    const detail = await inventoryAction.getDetail(props.params.id);
    setInventory(detail);
  }

  useEffect(() => {
    handleGetInventory();
  }, []);

  return (
    <Box>
      <Pressable my="30px" ml="3" w="150px" bg="transparent" color="transparent" onPress={() => props?.navigation?.goBack()}>
        <HStack space={1} ml="-2" mt="1">
          <ChevronLeftIcon size="6" color="#FFFFFF" />
          <Text color="#FFFFFF" fontSize="2xl" fontWeight="600" mt="-1.5" >
            Back to market
          </Text>
        </HStack>
      </Pressable>
      <VStack space={2} alignItems="center">
        <Image
          source={{
            uri:
              "https://sc04.alicdn.com/kf/U0c6c7fa9609d4ecda336bfd114d6a3f0o.jpeg"
          }}
          alt="Alternate Text" size="350px" borderRadius="20" />
        <Flex direction='column' alignItems="self-start" w="80%">
          <Text fontSize='3xl' fontWeight="bold" color='#FFFFFF'>{inventory?.title}</Text>
          <Flex direction='row' alignItems="self-start">
            <Text fontSize='2xl' fontWeight="500" color='#FFFFFF'>Type:</Text>
            <Text fontSize='2xl' fontWeight="300" color='#FFFFFF'>{"  "} Drink </Text>
          </Flex>
        </Flex>

        <Flex direction='row' alignItems="center" w="80%">
          <Text fontSize='lg' fontWeight="600" color='#FFFFFF'>Cost:</Text>
          <Text fontSize='lg' color='#FFFFFF'>{"  "}{inventory?.price} ETH</Text>
        </Flex>
      </VStack>
    </Box>
  );
};

const BuyForm = (props: any) => {
  const toast = useToast();
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const { user } = useSelector((state: any) => state);
  const inventoryAction = getInventoryAction();

  const handleBuyInventory = async () => {
    let result: boolean;
    let errorMessage = '';
    try {
      await inventoryAction.buyInventory({
        inventoryId: props?.params?.id,
        userId: user?._id,
      })
      result = true;
    } catch (e: any) {
      errorMessage = e?.response?.data?.message; 
      result = false;
    }

    if (result) {
      setShowModal2(true);
      setShowModal(false);
    }
    toast.show({
      render: () => {
        return <Box bg="primary.100" px="2" py="1" rounded="sm" mb={5}>
          <HStack space={2}>
            { result ? <CheckIcon size="5" color="emerald.500" /> : <WarningIcon size="5" color="emerald.500" /> }
            <Text>
              {result ? 'Successfully purchase' : errorMessage}
            </Text>
          </HStack>
        </Box>
      }
    });
  };

  return (
    <Center mt="5">
      <Button onPress={() => setShowModal(true)} bg="#10b981" w="100px" h="50px">Buy</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header> Item </Modal.Header>
          <Modal.Body>
            <HStack space={2} justifyContent="center">
              <InfoOutlineIcon size="5" />
              <Text>
                Purchase this item ?
              </Text>
            </HStack>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button bg="#10b981" w="100px" onPress={handleBuyInventory}>
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
      </Modal>
    </Center>
  );
}

export default
  (props: any) => {
    return (
      <NativeBaseProvider>
        <Box bg="#171930" h="100%" w="100%">
          <ItemInfoScreen navigation={props.navigation} params={props?.route?.params} />
          <BuyForm params={props?.route?.params} />
        </Box>
      </NativeBaseProvider>
    );
  };