import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
       <View style={styles.square}>
       <View style={styles.line}/>
       <View style={[styles.line, {
         transform: [{translateX:166}]
       }]}/>
        <View style={[styles.line, {
          width:244,
          height:3,
         transform: [{translateY:166}]
       }]}/>
        <View style={[styles.line, {
          width:244,
          height:3,
         transform: [{translateY:83}]
       }]}/>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    top:20
  },
  square: {
    borderColor:'pink',
  borderWidth:3,
    height:250,
    width:250,
  },
  line:{
    backgroundColor:'black',
    width:3,
    height:244,
    position:'absolute',
    transform:[
      {translateX:83}
    ]
  }
  
});
