import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <View style={styles.square}/>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7E57C2',
    alignItems: 'center',
    justifyContent: 'center',
    top:20
  },
  square: {
   left:30,
    borderLeftWidth:7,
    height:300,
    width:300,
  }
});
