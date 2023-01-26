
import React, {useState, useEffect } from "react";
import {StyleSheet, Text, View,LogBox, TouchableOpacity} from "react-native";
//import {auth} from '../Firebase/firebase'
export const Authpage =({navigation}) => {
 const [loggin, Setloggin] = useState(false)
  const goToPage = () =>[
    navigation.navigate('Addpost')
  ]

    return (
    
      <View style={styles.container}>
      
      
     </View>  
 
    
      
  )
}
const styles = StyleSheet.create({
  container: {
      flex: 1, 
      alignItems: 'center',
       justifyContent: 'center' 
  },
 
   Reg:{
      marginTop:20,
     width:200,
     height:50,
     fontSize:20,
     backgroundColor:`#3d7ee0`,
     borderRadius:15,
     color:`white`,
     textAlign: 'center',
     paddingTop:10
  },
  txt:{
      fontSize:20
  }
 
});