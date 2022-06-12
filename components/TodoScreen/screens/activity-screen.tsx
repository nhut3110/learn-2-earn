// import React from "react";
// import {
//   ScrollView,
//   Box,
//   Text,
//   VStack,
//   Icon,
//   Image,
//   useColorModeValue,
//   FlatList,
//   Center,
// } from "native-base";
// import { Feather } from "@expo/vector-icons";
// import AnimatedColorBox from "../todo-components/animated-color-box";
// import Navbar from "../navbar";
// import Masthead from "../masthead";
// import ActivityBox from "../activity-components/activity-box";

// interface activityItem {
//   activityName: string;
//   owner: string;
//   uri?: string;
//   description?: string;
//   time: string;
// }
// const ActivityScreen = () => {
//   const numCol = 2;
//   const dataActivity = [
//     {
//       uri: "https://images.wallpaperscraft.com/image/single/ocean_beach_aerial_view_134429_2560x1440.jpg",
//       activityName: "Kill 10 gays",
//       point: "LGBT",
//       owner: "Dr Nicole",
//       description: "You have to kill 10 gay boys to claim the reward hehe",
//       time: "2:37 31/5/2022",
//     },

//     {
//       uri: "",
//       activityName: "Kill 10 gays",
//       point: "",
//       owner: "Dr Nicole",
//       description: "You have to kill 10 gay boys to claim the reward hehe",
//       time: "2:37 31/5/2022",
//     },

//     {
//       uri: "",
//       activityName: "Kill 10 gays",
//       point: "CSVN",
//       owner: "Dr Nicole",
//       description: "You have to kill 10 gay boys to claim the reward hehe",
//       time: "2:37 31/5/2022",
//     },

//     {
//       uri: "",
//       activityName: "Kill 10 gays",
//       point: "",
//       owner: "Dr Nicole",
//       description: "You have to kill 10 gay boys to claim the reward hehe",
//       time: "2:37 31/5/2022",
//     },

//     {
//       uri: "",
//       activityName: "Kill 10 gays",
//       tag: "",
//       owner: "Dr Nicole",
//       description: "You have to kill 10 gay boys to claim the reward hehe",
//       time: "2:37 31/5/2022",
//     },
//   ];
//   const styles = {
//     wrapper: {
//       justifyContent: "flex-start",
//       alignItems: "center",
//       pb: "50px",
//     },
//   };
//   return (
//     <AnimatedColorBox
//       flex={1}
//       bg={useColorModeValue("warmGray.50", "warmGray.900")}
//       w="full"
//     >
//       <Box h="0" w="full" bg="white">
//         <Navbar title="Activity Board" />
//       </Box>
//       <Masthead
//         title="Time to earn some!!"
//         image={require("../assets/about-masthead.png")}
//       >
//         <></>
//       </Masthead>
//       <FlatList
//         borderTopLeftRadius="20px"
//         borderTopRightRadius="20px"
//         bg={useColorModeValue("warmGray.50", "primary.900")}
//         mt="-20px"
//         pt="30px"
//         p={4}
//         contentContainerStyle={styles.wrapper as any}
//         data={dataActivity}
//         renderItem={({ item }) => (
//           <ActivityBox
//             uri={item.uri}
//             activityName={item.activityName}
//             owner={item.owner}
//             description={item.description}
//             time={item.time}
//             point={item.point}
//           />
//         )}
//         numColumns={numCol}
//       ></FlatList>
//     </AnimatedColorBox>
//   );
// };

// export default ActivityScreen;
