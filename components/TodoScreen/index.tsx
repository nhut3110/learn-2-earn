import { createDrawerNavigator } from "@react-navigation/drawer";
// import ActivityScreen from "./screens/todo-screen";
import Sidebar from "./todo-components/sidebar";
import { Ionicons } from "@expo/vector-icons";
import React, { useCallback, useState } from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import {
  Icon,
  VStack,
  useColorModeValue,
  Fab,
  Box,
  FlatList,
  Heading,
  Pressable,
  Input,
  useToast,
  Modal,
  FormControl,
  Button,
  TextArea,
  Text,
  Image,
  ScrollView,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import NavBar from "../../components/TodoScreen/navbar";
import AnimatedColorBox from "../../components/TodoScreen/todo-components/animated-color-box";
import TaskList from "../../components/TodoScreen/todo-components/task-list";
import Masthead from "../../components/TodoScreen/masthead";
import "react-native-get-random-values";
import { nanoid } from "nanoid";
import ActivityBox from "../../components/TodoScreen/activity-components/activity-box";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";
interface activityItem {
  activityName: string;
  owner: string;
  uri?: string;
  description?: string;
  time: string;
}

const initialData = [
  {
    id: nanoid(10),
    subject: "Eat my friend's chick next week",
    done: false,
  },
  {
    id: nanoid(10),
    subject: "Kill a gay on Monday",
    done: false,
  },
];

type RootStackParamList = {
  Detail: {
    activityName: string;
    owner: string;
    uri?: string;
    description?: string;
    time: string;
    point: string;
  };
};

type DetailScreenRouteProp = RouteProp<RootStackParamList, "Detail">;

type DetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Detail"
>;

type Props = {
  route: DetailScreenRouteProp;
  navigation: DetailScreenNavigationProp;
};

function MainScreen({ navigation }: { navigation: any }) {
  const toast = useToast();
  const [showModal, setShowModal] = useState(false);
  const [showSubmitForm, setSubmitForm] = useState(false);
  const dataActivity = [
    {
      uri: "https://images.wallpaperscraft.com/image/single/ocean_beach_aerial_view_134429_2560x1440.jpg",
      activityName: "Kill 10 gays at the same time",
      point: "100",
      owner: "Dr Nicole",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam quam quo enim iure eum fuga facere explicabo optio minus laudantium odit, nulla dicta consectetur ipsum accusamus sit maxime accusantium labore! Obcaecati ipsa numquam voluptates officia aut suscipit est dolor. Cupiditate at pariatur rerum reiciendis quisquam optio error nobis ad, assumenda, eaque deserunt perspiciatis esse praesentium tenetur in libero eos culpa, quas molestiae rem quos sed nam. Beatae necessitatibus, dignissimos nihil repellendus reiciendis incidunt veniam repudiandae neque ipsa et corrupti voluptatem numquam facilis fugiat ipsam. Possimus qui accusantium, corporis nisi tenetur consequatur quibusdam expedita, vero, quae pariatur recusandae voluptate nam.",
      time: "31/5/2022",
    },

    {
      uri: "",
      activityName: "Kill 10 gays at a row",
      point: "100",
      owner: "Dr Nicole",
      description: "You have to kill 10 gay boys to claim the reward hehe",
      time: "31/5/2022",
    },

    {
      uri: "",
      activityName: "Kill 10 gays",
      point: "200",
      owner: "Dr Nicole",
      description: "You have to kill 10 gay boys to claim the reward hehe",
      time: "31/5/2022",
    },

    {
      uri: "",
      activityName: "Kill 10 gays",
      point: "300",
      owner: "Dr Nicole",
      description: "You have to kill 10 gay boys to claim the reward hehe",
      time: "31/5/2022",
    },

    {
      uri: "",
      activityName: "Kill 10 gays",
      point: "1000",
      owner: "Dr Nicole",
      description: "You have to kill 10 gay boys to claim the reward hehe",
      time: "31/5/2022",
    },
  ];
  const styles = {
    wrapper: {
      justifyContent: "flex-start",
      alignItems: "center",
      pb: "50px",
    },
  };
  const [data, setData] = useState(initialData);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);

  const handleToggleTaskItem = useCallback((item) => {
    setData((prevData) => {
      const newData = [...prevData];
      const index = prevData.indexOf(item);
      newData[index] = {
        ...item,
        done: !item.done,
      };
      return newData;
    });
  }, []);
  const handleChangeTaskItemSubject = useCallback((item, newSubject) => {
    setData((prevData) => {
      const newData = [...prevData];
      const index = prevData.indexOf(item);
      newData[index] = {
        ...item,
        subject: newSubject,
      };
      return newData;
    });
  }, []);
  const handleFinishEditingTaskItem = useCallback((_item) => {
    setEditingItemId(null);
  }, []);
  const handlePressTaskItemLabel = useCallback((item) => {
    setEditingItemId(item.id);
  }, []);
  const handleRemoveItem = useCallback((item) => {
    setData((prevData) => {
      const newData = prevData.filter((i) => i !== item);
      return newData;
    });
  }, []);

  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue("#171930", "primary.900")}
      w="full"
    >
      {/* <Box bg="purple.500"></Box> */}
      {/* <Masthead title="What's up?"> */}
      <NavBar title="" />
      {/* </Masthead> */}
      {/* <NavBar title="Todo List"/> */}
      <Heading p={4} color={useColorModeValue("white", "black")} size={"xl"}>
        {" "}
        Activity Board
      </Heading>
      <Box h={200}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          borderTopLeftRadius="20px"
          borderTopRightRadius="20px"
          bg={useColorModeValue("#171930", "primary.900")}
          mt="-20px"
          pt="30px"
          p={4}
          contentContainerStyle={styles.wrapper as any}
          data={dataActivity}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                navigation.navigate("Detail", {
                  activityName: item.activityName,
                  owner: item.owner,
                  uri: item.uri,
                  description: item.description,
                  time: item.time,
                  point: item.point,
                })
              }
            >
              <ActivityBox
                uri={item.uri}
                activityName={item.activityName}
                owner={item.owner}
                description={item.description}
                time={item.time}
                point={item.point}
              />
            </Pressable>
          )}
          // numColumns={numCol}
        ></FlatList>
      </Box>
      <VStack flex={1} bg={useColorModeValue("#171930", "primary.900")}>
        <Heading p={4} color={useColorModeValue("white", "black")} size={"xl"}>
          Todo List
        </Heading>
        <TaskList
          data={data}
          onToggleItem={handleToggleTaskItem}
          onChangeSubject={handleChangeTaskItemSubject}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItemLabel}
          onRemoveItem={handleRemoveItem}
          editingItemId={editingItemId}
        />
      </VStack>
      <Fab
        position="absolute"
        renderInPortal={false}
        size="sm"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
        colorScheme={useColorModeValue("blue", "darkBlue")}
        bg={useColorModeValue("purple.600", "emerald.500")}
        onPress={() => {
          const id = nanoid(10);
          setData([
            {
              id,
              subject: "",
              done: false,
            },
            ...data,
          ]);
          setEditingItemId(id);
        }}
      />
    </AnimatedColorBox>
  );
}

function DetailScreen({ navigation, route }: Props) {
  const toast = useToast();
  const [submittedValue, setSubmitted] = useState("");
  const handleChange = (text: string) => setSubmitted(text);
  return (
    <>
      <Masthead
        image={
          route.params.uri == ""
            ? "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
            : route.params.uri
        }
      />

      <Box backgroundColor="#171930" w="full" h="full" p={4} pb={20}>
        <ScrollView showsVerticalScrollIndicator={false} mb={"20px"} h={"full"}>
          <FormControl>
            <FormControl.Label fontSize={35}>Activity Name</FormControl.Label>
            <Input variant="unstyled" fontSize={15} isReadOnly color="white">
              {route.params.activityName}
            </Input>
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Lecturer</FormControl.Label>
            <Input variant="unstyled" fontSize={15} isReadOnly color="white">
              {route.params.owner}
            </Input>
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Reward</FormControl.Label>
            <Input variant="unstyled" fontSize={15} isReadOnly color="white">
              {route.params.point} Points
            </Input>
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Requirement</FormControl.Label>
            <TextArea
              variant="unstyled"
              fontSize={15}
              isReadOnly
              color="white"
              h={"auto"}
            >
              {route.params.description}
            </TextArea>
          </FormControl>
          <FormControl>
            <FormControl.Label>Your Submission</FormControl.Label>
            <TextArea
              color="white"
              variant="unstyled"
              fontSize={15}
              placeholder="Enter your submission here..."
              value={submittedValue}
              onChangeText={handleChange}
              h={"auto"}
            ></TextArea>
          </FormControl>
          <Button
            mt={3}
            onPress={() => {
              if (submittedValue != "") {
                toast.show({
                  render: () => {
                    return (
                      <Box bg="purple.600" px="2" py="1" rounded="sm" mb={5}>
                        <Text color="white">Submitted</Text>
                      </Box>
                    );
                  },
                });
                navigation.goBack();
              } else {
                toast.show({
                  render: () => {
                    return (
                      <Box bg="purple.600" px="2" py="1" rounded="sm" mb={5}>
                        <Text color="white">Please input your submission</Text>
                      </Box>
                    );
                  },
                });
              }
            }}
            leftIcon={
              <Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
            }
          >
            Upload
          </Button>
        </ScrollView>
      </Box>
    </>
  );
}

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Todo List"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerStyle: {
            backgroundColor: "#171930",
          },
          headerTitleStyle: {
            color: "white",
            fontWeight: "bold",
            fontSize: 25,
          },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
};

export default App;