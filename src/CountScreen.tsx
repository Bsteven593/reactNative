import React, { useState } from 'react'
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

export const CountScreen = () => {
    //hooks

    const [count, setCount] = useState(10)
    const [pressed,setPressed] = useState(false)
    return (
        <View style={styles.container} >
            <Text style={styles.title}>
                {count}
            </Text>
        <Pressable
        onPress={()=> {setCount(count+1)
            setPressed(true)
        } }
        onLongPress={()=> {setCount(0)
            setPressed(false)
        }}

        onPressOut={() =>setPressed(false)}
        style = {({pressed})=>[
            styles.button,
            pressed && styles.buttonPress
        ]}
        >
            <Text style={{color:"black"}}>Incrementar</Text>
        </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 60,
        color: 'black',
        fontWeight: '500'

    },
    button:{
        backgroundColor: '#5856D6',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius: 10,
        color:'white'
    },
    buttonPress:{
        backgroundColor:'#5786D6'
    }
})

export default  CountScreen