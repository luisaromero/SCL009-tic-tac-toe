import React from 'react';
import { StyleSheet, View ,TouchableOpacity} from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
   
      this.state ={
        gameState: [
          
          [0,0,0],
          [0,0,0],
          [0,0,0]
        ],
        currentPlayer:1,
    }
  }

  componentDidMount(){
    this.initGame();
  }
  initGame = () =>{
    this.setState({gameState:
[
  [0,0,0],
  [0,0,0],
  [0,0,0]
]
})};
squarePress =(row,col) =>{
  let currentPlayer =this.state.currentPlayer;
  let arr = this.state.gameState.slice();
  arr[row][col]=currentPlayer;
  this.setState({gameState:arr});

}
renderIcon =(row,col) => {
  let value =this.state.gameState[row][col];
  switch(value){
    case 1 :return alert("peks");
    case -1 : return alert("pek")
    default :return <View/>
  }
}
  render(){
  return (
    
    <View style={styles.container}>
      <View style={{flexDirection:"row"}}>
      <TouchableOpacity onPress={() => this.squarePress(0,0)} style={[styles.squares , {borderLeftWidth:0 , borderTopWidth:0}]}>
        {this.renderIcon(0,0)}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.squarePress(0,1)} style={[styles.squares ,{borderTopWidth:0}]} >{this.renderIcon(0,1)}</TouchableOpacity>
      <TouchableOpacity onPress={() => this.squarePress(0,2)} style={[styles.squares , {borderTopWidth:0 ,borderRightWidth:0}]}>{this.renderIcon(0,2)}</TouchableOpacity>
      </View>

      <View style={{flexDirection:"row"}}>
      <TouchableOpacity onPress={() => this.squarePress(1,0)} style={[styles.squares ,{borderLeftWidth:0}]}>{this.renderIcon(1,0)}</TouchableOpacity>
      <TouchableOpacity  onPress={() => this.squarePress(1,1)}style={[styles.squares]}>{this.renderIcon(1,1)}</TouchableOpacity>
      <TouchableOpacity onPress={() => this.squarePress(1,2)} style={[styles.squares , {borderRightWidth:0}]}>{this.renderIcon(1,2)}</TouchableOpacity>
      </View>

      <View style={{flexDirection:"row"}}>
      <TouchableOpacity onPress={() => this.squarePress(2,0)} style={[styles.squares ,{borderLeftWidth:0 , borderBottomWidth:0}]}>{this.renderIcon(2,0)}</TouchableOpacity>
      <TouchableOpacity onPress={() => this.squarePress(2,1)} style={[styles.squares ,{borderBottomWidth:0}]}>{this.renderIcon(2,1)}</TouchableOpacity>
      <TouchableOpacity onPress={() => this.squarePress(2,2)} style={[styles.squares ,{ borderRightWidth:0 , borderBottomWidth:0}]}>{this.renderIcon(2,2)}</TouchableOpacity>
      </View>

    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  squares:{
    borderWidth:1,
    height:100,
    width:100
  }
});
