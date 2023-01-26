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
  /*
  
 <NavigationContainer style={styles.container}>
     <Stack.Navigator initialRouteName="Authpage">
          <Stack.Screen name="Addmessagepage" component={Addmessagepage}  /> 
          <Stack.Screen name="Addpost" component={Addpost} />
          <Stack.Screen name="Authpage" component={Authpage} />
          <Stack.Screen name="Chatpage" component={Chatpage} />
          <Stack.Screen name="Editprofile" component={Editprofile} />
          <Stack.Screen name="Findeuserpage" component={Findeuserpage} />
          <Stack.Screen name="Profilepage" component={Profilepage} />
        </Stack.Navigator>
      </NavigationContainer>  
      
      
      
      <NavigationContainer >
       <Stack.Navigator initialRouteName="Authpage">
          <Stack.Screen name="Addpost" component={Addpost} options={{
          title: 'Добавить пост',
        }}/>
          <Stack.Screen name="Authpage" component={Authpage} options={{
          title: 'Авторизация',
        }}/>
        </Stack.Navigator>
      </NavigationContainer>
      */ 