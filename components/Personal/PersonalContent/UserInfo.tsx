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
    Center
} from 'native-base';

interface UserInfomation{
    creditsAmount: number;
    gpaUser: number;
    userClass: string;
}

const UserInfo = (props: UserInfomation) => {
    return (
        <Box my="20px">
            <HStack justifyContent="center" space={1}>
                <Center h="20" w="120" bg="#1E203B" borderLeftRadius={10} shadow={3}>
                    <Text fontSize="sm" _light={{
                    color: "warmGray.50"
                    }} _dark={{
                    color: "muted.400"
                    }} fontWeight="500" ml="-0.5">
                        Credits
                    </Text>
                    <Text fontSize="sm" _light={{
                    color: "warmGray.50"
                    }} _dark={{
                    color: "muted.400"
                    }} fontWeight="500" ml="-0.5" >
                        {props.creditsAmount}
                    </Text>
                </Center>
                <Center h="20" w="120" bg="#1E203B" shadow={3}>
                    <Text fontSize="sm" _light={{
                    color: "warmGray.50"
                    }} _dark={{
                    color: "muted.400"
                    }} fontWeight="500" ml="-0.5">
                        GPA
                    </Text>
                    <Text fontSize="sm" _light={{
                    color: "warmGray.50"
                    }} _dark={{
                    color: "muted.400"
                    }} fontWeight="500" ml="-0.5" >
                    {props.gpaUser}
                    </Text>
                </Center>
                <Center h="20" w="120" bg="#1E203B" borderRightRadius={10} shadow={3}>
                    <Text fontSize="sm" _light={{
                    color: "warmGray.50"
                    }} _dark={{
                    color: "muted.400"
                    }} fontWeight="500" ml="-0.5">
                    Class
                    </Text>
                    <Text fontSize="sm" _light={{
                    color: "warmGray.50"
                    }} _dark={{
                    color: "muted.400"
                    }} fontWeight="500" ml="-0.5" >
                    {props.userClass}
                    </Text>
                </Center>
            </HStack>
        </Box>
    )
}

export default UserInfo;