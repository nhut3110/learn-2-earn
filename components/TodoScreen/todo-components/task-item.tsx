import React, { useCallback } from "react";
import { PanGestureHandlerProps } from "react-native-gesture-handler";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import {
  Pressable,
  Box,
  HStack,
  useColorModeValue,
  Icon,
  Input,
  useToken,
} from "native-base";
import AnimatedCheckbox from "react-native-checkbox-reanimated";
import AnimatedTaskLabel from "./animated-task-label";
import SwipableView from "./swipable-view";
import { Feather } from "@expo/vector-icons";

interface Props extends Pick<PanGestureHandlerProps, "simultaneousHandlers"> {
  isEditing: boolean;
  isDone: boolean;
  onToggleCheckbox?: () => void;
  onPressLabel?: () => void;
  onRemove?: () => void;
  onChangeSubject?: (subject: string) => void;
  onFinishEditing?: () => void;
  subject: string;
}

const TaskItem = (props: Props) => {
  const {
    isEditing,
    isDone,
    onToggleCheckbox,
    subject,
    onPressLabel,
    onRemove,
    onChangeSubject,
    onFinishEditing,
    simultaneousHandlers,
  } = props;

  const highlightColor = useToken(
    "colors",
    useColorModeValue("purple.300", "green.500")
  );
  const boxStroke = useToken(
    "colors",
    useColorModeValue("muted.500", "muted.300")
  );

  const checkmarkColor = useToken(
    "colors",
    useColorModeValue("white", "white")
  );

  const activeTextColor = useToken(
    "colors",
    useColorModeValue("lightText", "darkText")
  );
  const doneTextColor = useToken(
    "colors",
    useColorModeValue("muted.400", "muted.600")
  );

  const handleChangeSubject = useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      onChangeSubject && onChangeSubject(e.nativeEvent.text);
    },
    [onChangeSubject]
  );

  return (
    <SwipableView
      simultaneousHandlers={simultaneousHandlers}
      onSwipeLeft={onRemove}
      backView={
        <Box
          w="full"
          h="full"
          bg={useColorModeValue("#171930", "primary.900")}
          alignItems="flex-end"
          justifyContent="center"
          pr={4}
        >
          <Icon
            color={useColorModeValue("red.500", "warmGray.50")}
            as={<Feather name="trash-2" />}
            size="sm"
          />
        </Box>
      }
    >
      <HStack
        alignItems="center"
        w="full"
        px={4}
        py={2}
        bg={useColorModeValue("#171930", "primary.900")}
      >
        <Box width={30} height={30} mr={2}>
          <Pressable onPress={onToggleCheckbox}>
            <AnimatedCheckbox
              highlightColor={highlightColor}
              checkmarkColor={checkmarkColor}
              boxOutlineColor={boxStroke}
              checked={isDone}
            />
          </Pressable>
        </Box>
        {isEditing ? (
          <Input
            placeholder="Empty Task"
            value={subject}
            variant="unstyled"
            fontSize={19}
            px={1}
            py={0}
            autoFocus
            blurOnSubmit
            onChange={handleChangeSubject}
            onBlur={onFinishEditing}
            color={"white"}
          />
        ) : (
          <AnimatedTaskLabel
            textColor={activeTextColor}
            inactiveTextColor={doneTextColor}
            strikethrough={isDone}
            onPress={onPressLabel}
          >
            {subject}
          </AnimatedTaskLabel>
        )}
      </HStack>
    </SwipableView>
  );
};

export default TaskItem;
