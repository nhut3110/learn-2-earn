import React, { useCallback, useState } from "react";
import {
  Icon,
  VStack,
  useColorModeValue,
  Fab,
  Box,
  FlatList,
  Text,
  Heading,
  Pressable,
  Input,
  useToast,
  Modal,
  FormControl,
  Button,
  TextArea,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import NavBar from "../navbar";
import AnimatedColorBox from "../todo-components/animated-color-box";
import TaskList from "../todo-components/task-list";
import Masthead from "../masthead";
import "react-native-get-random-values";
import { nanoid } from "nanoid";
import ThemeToggle from "../theme-toggle";
import ActivityBox from "../activity-components/activity-box";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

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

export default function MainScreen() {
  const numCol = 2;
  const toast = useToast();
  const [showModal, setShowModal] = useState(false);
  const [showSubmitForm, setSubmitForm] = useState(false);
  const dataActivity = [
    {
      uri: "https://images.wallpaperscraft.com/image/single/ocean_beach_aerial_view_134429_2560x1440.jpg",
      activityName: "Kill 10 gays at the same time",
      point: "100",
      owner: "Dr Nicole",
      description: "You have to kill 10 gay boys to claim the reward hehe",
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
      bg={useColorModeValue("warmGray.50", "primary.900")}
      w="full"
    >
      {/* <Box bg="purple.500"></Box> */}
      <Masthead
        title="What's up?"
        image={require("../assets/about-masthead.png")}
      >
        <NavBar title="Activity Board" />
      </Masthead>
      {/* <NavBar title="Todo List"/> */}
      <Box h={200}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          borderTopLeftRadius="20px"
          borderTopRightRadius="20px"
          bg={useColorModeValue("warmGray.50", "primary.900")}
          mt="-20px"
          pt="30px"
          p={4}
          contentContainerStyle={styles.wrapper as any}
          data={dataActivity}
          renderItem={({ item }) => (
            <>
              <Pressable onPress={() => setShowModal(true)}>
                <ActivityBox
                  uri={item.uri}
                  activityName={item.activityName}
                  owner={item.owner}
                  description={item.description}
                  time={item.time}
                  point={item.point}
                />
              </Pressable>
              <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="600px">
                  <Modal.CloseButton />
                  <Modal.Header>Activity Detail</Modal.Header>
                  <Modal.Body>
                    <FormControl>
                      <FormControl.Label>Activity Name</FormControl.Label>
                      <Input variant="unstyled" fontSize={15} isReadOnly>
                        {item.activityName}
                      </Input>
                    </FormControl>
                    <FormControl mt="3">
                      <FormControl.Label>Lecturer</FormControl.Label>
                      <Input variant="unstyled" fontSize={15} isReadOnly>
                        {item.owner}
                      </Input>
                    </FormControl>
                    <FormControl mt="3">
                      <FormControl.Label>Reward</FormControl.Label>
                      <Input variant="unstyled" fontSize={15} isReadOnly>
                        {item.point} Points
                      </Input>
                    </FormControl>
                    <FormControl mt="3">
                      <FormControl.Label>Requirement</FormControl.Label>
                      <TextArea variant="unstyled" fontSize={15} isReadOnly>
                        {item.description}
                      </TextArea>
                    </FormControl>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button.Group space={2}>
                      <Button
                        variant="ghost"
                        colorScheme="blueGray"
                        onPress={() => {
                          setShowModal(false);
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        onPress={() => {
                          setSubmitForm(true);
                        }}
                      >
                        Continue
                      </Button>
                    </Button.Group>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>

              <Modal
                isOpen={showSubmitForm}
                onClose={() => setSubmitForm(false)}
              >
                <Modal.Content maxWidth="600px">
                  <Modal.CloseButton />
                  <Modal.Header>Activity Detail</Modal.Header>
                  <Modal.Body>
                    <FormControl>
                      <FormControl.Label>Your Submission</FormControl.Label>
                      <TextArea
                        variant="unstyled"
                        fontSize={15}
                        placeholder="Enter your submission here..."
                      ></TextArea>
                    </FormControl>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button.Group space={2}>
                      <Button
                        variant="ghost"
                        colorScheme="blueGray"
                        onPress={() => {
                          setSubmitForm(false);
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        onPress={() => {
                          setShowModal(false);
                          setSubmitForm(false);
                          toast.show({
                            render: () => {
                              return (
                                <Box
                                  _light={{
                                    color: "purple.500",
                                  }}
                                  _dark={{
                                    color: "emerald.400",
                                  }}
                                  px="2"
                                  py="1"
                                  rounded="sm"
                                  mb={5}
                                >
                                  Submitted
                                </Box>
                              );
                            },
                          });
                        }}
                      >
                        Submit
                      </Button>
                    </Button.Group>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
            </>
          )}
          // numColumns={numCol}
        ></FlatList>
      </Box>
      <VStack flex={1} bg={useColorModeValue("warmGray.50", "primary.900")}>
        <Heading p={4}>Todo List</Heading>
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
