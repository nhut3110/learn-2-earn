import React, { useState } from 'react';
import Svg, { Circle } from 'react-native-svg';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Flex, Icon, Text, Spacer } from 'native-base';
import CircularProgress from 'react-native-circular-progress-indicator';
import {
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const CircularProgressBar = () => {
  const val: number = 120;
  const color: string = (val < 100) ? "#2a9d8f"
    : (val < 200) ? "#e9c46a"
      : (val < 300) ? "#f4a261"
        : (val < 400) ? "#e76f51"
          : (val < 500) ? "#84A98C"
            : "#264653";

  const BGColor: string = (val < 100) ? "#54566E"
    : (val < 200) ? "#2a9d8f"
      : (val < 300) ? "#e9c46a"
        : (val < 400) ? "#f4a261"
          : (val < 500) ? "#e76f51"
            : "#2a9d8f";
  return (
    <View style={styles.container}>
      <CircularProgress
        value={val}
        strokeLinecap={'round'}
        clockwise={true}
        radius={130}
        duration={1500}
        progressValueColor={'#ecf0f1'}
        maxValue={1000}
        progressValueFontSize={55}
        titleFontSize={25}
        activeStrokeWidth={25}
        inActiveStrokeWidth={25}
        inActiveStrokeColor={BGColor}
        activeStrokeColor={color}
        title={'ETH'}
        titleColor={'white'}
        subtitle={'0x77bbffdsa...b8E3'}
        subtitleColor={'#54566E'}
        subtitleFontSize={13}
        titleStyle={{ fontWeight: 'bold' }} />

      <Flex direction="row" alignSelf="center" width="70%" mt='5'>
        <Icon mb="1" as={<MaterialCommunityIcons name={"moon-full"} />} color={color} size="5" />
        <Text color="white">Balance</Text>
        <Spacer />
        <Icon mb="1" as={<MaterialCommunityIcons name={"moon-full"} />} color={BGColor} size="5" />
        <Text color="white">Spent</Text>
      </Flex>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: '#171930',
    marginBottom: 20,
  },
});

export default CircularProgressBar;