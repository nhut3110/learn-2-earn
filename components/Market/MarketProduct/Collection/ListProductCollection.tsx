import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  Box,
  Image,
  Text,
  HStack,
  Button,
  FavouriteIcon,
  Flex,
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

const ProductCollection = (props: ProductInfo) => {
  const toast = useToast();
  const [inventory, setInventory] = useState<Inventory>();
  const { user } = useSelector((state: any) => state);
  const inventoryAction = getInventoryAction();

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
    <Box>
      <Button
        onPress={props.onClick}
        h="120px" borderRadius="15"
        bg="#808080:alpha.40" borderWidth="1"
        borderColor="#ffff"
        justifyContent="flex-start"
        mb="10px"
        ml="10px">
        <Flex direction="row" alignItems="center" justifyContent="space-between">
          <Flex direction="row" alignItems="flex-start" justifyContent="space-between" w="80%">
            <Image
              source={{
                uri:
                  props.uri == ""
                    ? ""
                    : props.uri,
              }} alt="Alternate Text"
              size="xl"
              borderRadius="10"
              h="95px"
              w="95px"
              mr="20px"
            />
            <Flex direction="column" alignItems="flex-start" w="80%">
              <Text color="#FFFFFF"
                fontSize="lg"
                fontWeight="700" mb="2">
                {props.nameProduct}
              </Text>
              <Text color="#FFFFFF"
                fontSize="md"
                fontWeight="500" mb="2">
                Type: {props.typeProduct}
              </Text>
              <Text color="#FFFFFF"
                fontSize="sm"
                fontWeight="400" mb="2">
                Cost: {inventory?.price} ETH
              </Text>
            </Flex>
          </Flex>
          <Button bg="#808080:alpha.40"
            h="30px" w="60px"
            borderWidth="1"
            borderColor="#ffff"
            borderRadius="50" mt="16"
            onPress={handleInteract}>
            <HStack space={1} justifyContent="center">
              <FavouriteIcon size="3" color="rose.600" />
              <Text color="#FFFF" fontSize="sm" mt="-1">
                {inventory?.interactions?.length}
              </Text>
            </HStack>
          </Button>
        </Flex>
      </Button>
    </Box>
  )
}

export default ProductCollection;