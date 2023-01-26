//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Allpages} from './Pages/Allpages'
import * as React from 'react';
//import uuid from "react-native-uuid"
export default function App() {
  return (
    <View style={styles.container}>
      <Allpages /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
});
/*<View style={styles.container}>
      
      <AllPages />
      <StatusBar style="auto" />
    </View>
    */