import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export const DetalleClienteScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
        <Text style={{
          fontSize:30,
          textAlign:'center',
          marginTop:'20%'
        }}>
            Cliente
        </Text>
        <TouchableOpacity 
        onPress={ () => navigation.navigate('VentasCliente')}
        style={{
          backgroundColor:'skyblue',
          padding:10,
          marginTop:'20%',
          width:'50%',
          alignSelf:'center',
          borderRadius:10,
        }}
        >
          <Text
          style={{
            fontSize:20,
            textAlign: 'center',
            color:'white'
          }}
          >
Mira las ventas
          </Text>
           </TouchableOpacity>
    </View>
  )
}
