import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  Box,
  Image,
  Text,
  Center,
  HStack,
  Button,
  VStack,
  FavouriteIcon,
  useToast
} from "native-base";
import { getInventoryAction } from "../../../../actions";
import { Inventory } from "../../../../entities";

interface ProductInfo {
  id: string;
  uri?: string;
  nameProduct: string;
  costProduct: number;
  reactCount: number;
  typeProduct: string;
  onClick(): void; 
}

const MarketProduct = (props: ProductInfo) => {
  const [inventory, setInventory] = useState<Inventory>();
  const { user } = useSelector((state: any) => state);
  const inventoryAction = getInventoryAction();
  const toast = useToast();

  const handleGetInventory = async () => {
    const detail = await inventoryAction.getDetail(props.id);
    setInventory(detail);
  }

  const handleInteract = async () => {
    const inventory = await inventoryAction.interact({ inventoryId: props.id });
    await handleGetInventory();
    toast.show({
      placement: "bottom",
      render: () => {
        return <Box bg="primary.100" px="2" py="1" rounded="sm" mb={5} >
          <Text>
            {inventory.interactions.indexOf(user?._id?.toString()) >= 0 
              ? "Followed this product"
              : "UnFollowed this product"}
          </Text>
        </Box>;
      }
    })
  }

  useEffect(() => {
    handleGetInventory();
  }, []);

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
        <Button 
          // onPress={props.onClick}
          position="absolute" 
          right="-110" top="-190"
          bg="#808080:alpha.40" h="45px" w="100"
          borderWidth="1" borderColor="#ffff" borderRadius="50"
          onPress={handleInteract}
        >
          <HStack space={2} justifyContent="center" my="2">
            <FavouriteIcon size="5" mt="1" color="rose.600" />
            <Text color="#FFFF" fontSize="lg">
              {inventory?.interactions?.length}
            </Text>
          </HStack>
        </Button>
        <Button
          onPress={props.onClick}
          position="absolute" px="3" py="2"
          bg="#808080:alpha.40" h="90" w="220"
          borderWidth="1" borderColor="#ffff" borderRadius="15">
          <VStack space={2}>
            <Text color="#fff" fontSize="xl" fontWeight="600">
              {inventory?.title}
            </Text>
            <HStack space={16}>
              <Text color="#fff" fontSize="md">
                Cost
              </Text>
              <Text color="#fff" fontSize="md">
                {inventory?.price} ETH
              </Text>
            </HStack>
          </VStack>
        </Button>
      </Center>
    </Center>
  )
}

export default MarketProduct;

