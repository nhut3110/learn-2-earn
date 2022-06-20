import React from "react";
import { Dimensions } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import { Box } from "native-base";
import { makeStyledComponent } from "../utils/styled";

const StyledView = makeStyledComponent(Animated.View);

interface Props extends Pick<PanGestureHandlerProps, "simultaneousHandlers"> {
  children: React.ReactNode;
  backView?: React.ReactNode;
  onSwipeLeft?: () => void;
}

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const SWIPE_THRESHOLD = -SCREEN_WIDTH * 0.2;

const SwipeView = (props: Props) => {
  const { children, backView, onSwipeLeft, simultaneousHandlers } = props;
  const translateX = useSharedValue(0);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (event) => {
      translateX.value = Math.max(-128, Math.min(0, event.translationX));
      console.log("swipe");
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < SWIPE_THRESHOLD;
      if (shouldBeDismissed) {
        console.log("swipe fail");
        translateX.value = withTiming(-SCREEN_WIDTH);
        onSwipeLeft && runOnJS(onSwipeLeft)();
      } else {
        translateX.value = withTiming(0);
        console.log("swipe end");
      }
    },
  });

  const facadeStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  return (
    <GestureHandlerRootView>
      <StyledView w="full">
        {backView && (
          <Box position="absolute" left={0} right={0} top={0} bottom={0}>
            {backView}
          </Box>
        )}
        <PanGestureHandler
          simultaneousHandlers={simultaneousHandlers}
          onGestureEvent={panGesture}
        >
          <StyledView style={facadeStyle}>{children}</StyledView>
        </PanGestureHandler>
      </StyledView>
    </GestureHandlerRootView>
  );
};

export default SwipeView;
