import React from "react";
import {
  ScrollView,
  Box,
  Text,
  VStack,
  Icon,
  Image,
  useColorModeValue,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import AnimatedColorBox from "../todo-components/animated-color-box";
import Navbar from "../navbar";
import Masthead from "../masthead";
import LinkButton from "../todo-components/link-button";
import ActivityBox from "../activity-components/activity-box";

const ActivityScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue("warmGray.50", "warmGray.900")}
      w="full"
    >
      <Masthead
        title="Time to earn some!!"
        image={require("../assets/about-masthead.png")}
      >
        <Navbar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue("warmGray.50", "primary.900")}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            {/* <Image
              source={require("../assets/profile-image.jpg")}
              borderRadius="full"
              resizeMode="cover"
              w={120}
              h={120}
              alt="hehe"
            /> */}
            <ActivityBox
              activityName="Kill 10 gays"
              owner="Dr Nicole"
              description="You have to kill 10 gay boys to claim the reward hehe"
              time="2:37 31/5/2022"
            />
          </Box>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  );
};

export default ActivityScreen;
