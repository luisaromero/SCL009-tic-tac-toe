import React from 'react';
import { StyleSheet, View ,TouchableOpacity , Image , ImageBackground , Button} from 'react-native';

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

  // componentDidMount(){
  //   this.initGame();
  // }
  initGame = () =>{
    this.setState({gameState:
[
  [0,0,0],
  [0,0,0],
  [0,0,0]
],currentPlayer:1,
})};
squarePress =(row,col) =>{
// No cambiar los iconos , mantener turno
let value =this.state.gameState[row][col];
if (value !== 0)  {
return ;
}
 
  let currentPlayer =this.state.currentPlayer;
  //Hacemos copia del array para no hacerlo de nuevo
  let arr = this.state.gameState.slice();
  // el array tomara el n de columna y fila y lo actualiza
  arr[row][col]=currentPlayer;
  this.setState({gameState:arr});

  //Cambiar de turno 
  let NextPlayer = (currentPlayer == 1) ? -1 : 1 ;
  this.setState({currentPlayer:NextPlayer})
};
renderIcon =(row,col) => {
  let value =this.state.gameState[row][col];
  switch(value){
    case 1 :return <Image style={styles.icons} source={require('./img/bender.png')} />;
    case -1 : return <Image style={styles.icons} source={require('./img/leela.png')} />;
    default :return <View/>
  }
}
  render(){
  return (
    <ImageBackground style={styles.container} source={require('./img/background.jpg')}>
      <Image style={styles.logo} source={require('./img/futuramaLogo.png')} />
      <View style={styles.containerSquares}>
      <View style={styles.rows}>
      <TouchableOpacity onPress={() => this.squarePress(0,0)} style={[styles.squares , {borderLeftWidth:0 , borderTopWidth:0}]}>
        {this.renderIcon(0,0)}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.squarePress(0,1)} style={[styles.squares ,{borderTopWidth:0}]} >{this.renderIcon(0,1)}</TouchableOpacity>
      <TouchableOpacity onPress={() => this.squarePress(0,2)} style={[styles.squares , {borderTopWidth:0 ,borderRightWidth:0}]}>{this.renderIcon(0,2)}</TouchableOpacity>
      </View>

      <View style={styles.rows}>
      <TouchableOpacity onPress={() => this.squarePress(1,0)} style={[styles.squares ,{borderLeftWidth:0}]}>{this.renderIcon(1,0)}</TouchableOpacity>
      <TouchableOpacity  onPress={() => this.squarePress(1,1)}style={[styles.squares]}>{this.renderIcon(1,1)}</TouchableOpacity>
      <TouchableOpacity onPress={() => this.squarePress(1,2)} style={[styles.squares , {borderRightWidth:0}]}>{this.renderIcon(1,2)}</TouchableOpacity>
      </View>

      <View style={styles.rows}>
      <TouchableOpacity onPress={() => this.squarePress(2,0)} style={[styles.squares ,{borderLeftWidth:0 , borderBottomWidth:0}]}>{this.renderIcon(2,0)}</TouchableOpacity>
      <TouchableOpacity onPress={() => this.squarePress(2,1)} style={[styles.squares ,{borderBottomWidth:0}]}>{this.renderIcon(2,1)}</TouchableOpacity>
      <TouchableOpacity onPress={() => this.squarePress(2,2)} style={[styles.squares ,{ borderRightWidth:0 , borderBottomWidth:0}]}>{this.renderIcon(2,2)}</TouchableOpacity>
      </View>
      </View>
      <Button title="Juego Nuevo"/>
    </ImageBackground>
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
  containerSquares:{
   flex:2
  },
  squares:{
    paddingTop:5,
    borderWidth:3,
    height:100,
    width:100,
    borderColor:'#fff',
  },
  rows:{
    flexDirection:'row',
    display:'flex',
    justifyContent:'center'
    
  },
  logo:{
    flex: 1,
    width: '65%',
    height: 100,
    resizeMode: 'contain'
  },
  icons:{
    width:'100%',
    height:'93%',
    resizeMode: 'contain'
  }
});
