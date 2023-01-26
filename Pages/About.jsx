import * as React from 'react';
import { View, Text, Button, Image  } from 'react-native';
export const About =() => {
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Мессенжер для общения со сквозным шифрованием.</Text>
        <Text>Автор программы: Мальцев В.И.</Text>
      </View>
  )
}