import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export const ProfileScreen = () => {
  const navigation = useNavigation();
  return (

    <View>
      <Text style={{
        color: 'black'
      }}>Contador
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Contador')}
      >

      </TouchableOpacity>
    </View>
  )
}
