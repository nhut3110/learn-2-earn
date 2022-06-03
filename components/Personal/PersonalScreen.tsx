import React from "react";
import { 
        Box, 
        Heading, 
        AspectRatio, 
        Image, 
        Text, 
        Center, 
        HStack, 
        Stack, 
        NativeBaseProvider, 
        Button, 
        VStack, 
        ScrollView ,
        Flex
      } from "native-base";
import PersonalHeader from './PersonalHeader'
import PersonalContent from './PersonalContent/PersonalContent'


    interface Grade {
    creditsAmount: number;
    gpaScore: number;
    majorClass: string;

}

export default function PeronalScreen() {
    return (
        <NativeBaseProvider>
            <PersonalHeader/>
            <PersonalContent/>
        </NativeBaseProvider>
    )
}