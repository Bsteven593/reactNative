import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export const ClienteScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={{
        fontSize: 30,
        textAlign: 'center',
        marginTop: '20%'
      }}>
        Clientes
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('DetalleCliente')}
        style={{
          backgroundColor: 'brown',
          padding: 10,
          marginTop: '20%',
          width: '50%',
          alignSelf: 'center',
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            color: 'white'
          }}
        >
          Mira los clientes
        </Text>
      </TouchableOpacity>
    </View>
  )
}
export default ClienteScreen
