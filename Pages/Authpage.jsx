
import React, {useState, useEffect } from "react";
import {StyleSheet, Text, View,LogBox, TouchableOpacity, TextInput} from "react-native";
import { Button } from 'react-native'
//import {auth} from '../Firebase/firebase'
export const Authpage =({navigation}) => {
 const [loggin, Setloggin] = useState(true)
  const goToPage = () =>[
    navigation.navigate('Addpost')
  ]

    return (
      <View style={styles.container}>
      {loggin?(
        <>
        <View style={styles.win}>
        <Text style={styles.txtlog}>Введите логин</Text>
        <TextInput style={styles.input} placeholder="email"></TextInput>
        <Text style={styles.txtlog}>Введите пароль</Text>
        <TextInput style={styles.input} placeholder="password"></TextInput>
        <View style={styles.cont}>
        <View style={styles.but}>
       <Button title = "Вход" />
        </View>
        <View style={styles.but2}>
       <Button title = "Регистрация" />
        </View>
        </View>
        <View><Text style={styles.about}> О программе</Text></View>
        </View>
        </>
        
        
       
      ):(<View style={styles.container}>
      <Text>Есть коннект</Text>
      </View>)
      }

      </View>
      )

    }

const styles = StyleSheet.create({
  container: {
   flex:1
  },
  but:{ 
    backgroundColor: '#71EC4C' ,
    alignItems: 'center' ,
    width:55,
  },
  but2:{
    backgroundColor: '#71EC4C' ,
    alignItems: 'center' ,
    width:114,
    marginLeft:10
      },
  cont:{
    marginTop:20,
    flexDirection:"row",
    justifyContent:"center"
  },
  win:{
   
    marginTop:'90%'
  },
  input:{
    borderColor:'black',
    borderWidth:2,
    borderRadius:10,
    paddingLeft:10
    
  },
  txtlog:{
    fontSize:20,
    marginBottom:10
  },
  about:{
    marginTop:40,
    textAlign:"center"
  },
  
});