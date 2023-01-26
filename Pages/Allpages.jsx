//https://oblador.github.io/react-native-vector-icons/
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Addmessagepage} from './Addmessagepage'
import{Addpost} from './Addpost'
import {Authpage} from './Authpage'
import {Chatpage} from './Chatpage'
import {Editprofile} from './Editprofile'
import {Findeuserpage} from './Finduserpage'
import {Profilepage} from './Profilepage'
import {About} from './About'
const Stack = createNativeStackNavigator();

export const Allpages = () => {
  

    return (

<NavigationContainer>
          <Stack.Navigator initialRouteName="Authpage" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Authpage" component={Authpage}  /> 
            <Stack.Screen name="Addpost" component={Addpost}  /> 
            <Stack.Screen name="Chatpage" component={Chatpage}  /> 
            <Stack.Screen name="Editprofile" component={Editprofile}  /> 
            <Stack.Screen name="Findeuserpage" component={Findeuserpage}  /> 
            <Stack.Screen name="Profilepage" component={Profilepage}  /> 
            <Stack.Screen name="About" component={About}  /> 
          </Stack.Navigator>
        </NavigationContainer>


     

    );

   
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  