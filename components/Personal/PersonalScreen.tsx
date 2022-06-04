import React from "react";
import { 
        NativeBaseProvider, 
      } from "native-base";
import PersonalHeader from './PersonalHeader/PersonalHeader'
import PersonalContent from './PersonalContent/PersonalContent'

export default function PeronalScreen() {
    return (
        <NativeBaseProvider>
            <PersonalHeader/>
            <PersonalContent/>
        </NativeBaseProvider>
    )
}