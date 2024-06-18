import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ProfileScreen } from '../ProfileScreen';
import {ComprasScreen} from "../ComprasScreen"
import { SettingScreen } from '../SettingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { ClienteScreen } from '../ClienteScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DetalleClienteScreen } from '../DetalleClienteScreen';
import { VentasScreen } from '../VentasScreen';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { CountScreen } from '../CountScreen';

//botones
const Tab = createBottomTabNavigator();

//stack
const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Cliente' component={ClienteScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name='DetalleCliente' component={DetalleClienteScreen} />
            <Stack.Screen name='VentasCliente' component={VentasScreen} />
            <Stack.Screen name='Contador' component={CountScreen} />
        </Stack.Navigator>
    )
}

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                        if (route.name === 'Cliente')
                    {
                        iconName = focused
                            ? 'accessibility'
                            : 'accessibility-outline';
                    }else if(
                        route.name === 'Home'
                    ){
                        iconName = focused
                        ? 'home'
                        : 'home-outline';
                    }else if(
                        route.name ==='Profile'
                    ){
                        iconName = focused
                        ? 'folder'
                        : 'folder-outline';
                    }else if(
                        route.name === 'Settings'
                    ){
                        iconName = focused
                        ? 'cog'
                        : 'cog-outline';  
                    }
                    // S e puede devolver cual quier componente
                    return <Icon name={iconName} size={size} color={color}/>

                },
                tabBarActiveTintColor: '#130',
                tabBarInactiveTintColor: 'gray'
            })}
        >




            <Tab.Screen name='Cliente' component={MyStack} />
            <Tab.Screen name='Home' component={ComprasScreen} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
            <Tab.Screen name='Settings' component={SettingScreen}
                options={{
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}

export default function NavScreen() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}