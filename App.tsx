import React  from "react";
import { StyleSheet, Text, View } from "react-native";
import { CountScreen } from "./screens/CountScreen";

export const App = ()=>{
    return(
        <View  style={{flex:1}}>
            <CountScreen/>
        </View>
    )
}



export  default App