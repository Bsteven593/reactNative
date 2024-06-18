import React  from "react";
import { StyleSheet, Text, View } from "react-native";
import { CountScreen } from "./src/CountScreen";
import { NavigationContainer } from "@react-navigation/native";
import NavScreen from "./src/navigation/NavigateScreen";

export const App = ()=>{
    return(
        <View  style={{flex:1}}>
        <NavScreen/>
        </View>
    )
}

export  default App