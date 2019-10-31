import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
     gamePositions : [],
     currentPlayer : 1
    }
  }
  componentDidMount(){
    this.positions();
  }
positions =() => {
  this.setState=({gameState:
    [
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ]
  });
}

  render(){
  return (
    <View style={styles.container}>
      
       <View style={styles.square}>
       <Image source={require('./img/ordenanza.png')} style={styles.img}/>
       <View style={styles.line}>
       <Image source={require('./img/hombre-arana.png')} style={styles.img}/></View>
       <View style={[styles.line, {
         transform: [{translateX:166}] }]}/>
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
}}

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
  },
  img:{
    width:55,
    height:55,
    top:13,
    transform:[
      {translateX:17}
    ],
    
  }
  
});
