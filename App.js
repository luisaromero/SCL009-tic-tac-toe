import React from 'react';
import { StyleSheet, Text, View ,Image , TouchableOpacity} from 'react-native';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
     gamePositions : [
        // <--Posiciones en el tablero-->
      [0,0,0],
      [0,0,0],
      [0,0,0]
     ],
     currentPlayer : 1
    }
  }
  // <--Montando función al iniciar la app-->
  componentDidMount(){
    this.positions();
  }
  // <--Posiciones en el tablero-->
positions =() => {
  this.setState=({gamePositions:
    [
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ]
  });
}
pressTheSquare=()=>{
  
}
//  Función que toma como parámetros , el n° de columna y n° de fila , siendo 0 la primera fila,
//  la segunda fila 1 y la tercera fila 2
showTheImg =(row,col) =>{
var value = this.state.gamePositions[row][col];
switch(value) {
case 1: return <Image source={require('./img/ordenanza.png')} style={styles.img}/>
case -1: return <Image source={require('./img/hombre-arana.png')} style={styles.img}/>
default: <View/>;
}
}

  render(){
  return (
    <View style={styles.container}>  
      {/* Primera fila de tres cuadrados  */}
      <View style={styles.rowStyle}>
          {/* BorderWidth es el grosor de la linea de borde , por lo que le damos valor 0
      (sin ningun grosor, por lo que desaparece) al borde que queremos que no se vea para formar el "#" */}
      
       <TouchableOpacity onPress={()=>this.pressTheSquare()} style={[styles.squares ,{borderLeftWidth:0 ,borderTopWidth:0 }]}>
         {this.showTheImg(0,0)}
       </TouchableOpacity>
       <TouchableOpacity  onPress={()=>this.pressTheSquare()} style={[styles.squares , {borderTopWidth:0 }]}>
       {this.showTheImg(0,1)}
       </TouchableOpacity>
       <TouchableOpacity  onPress={()=>this.pressTheSquare()} style={[styles.squares, {borderRightWidth:0 ,borderTopWidth:0 }]}>
       {this.showTheImg(0,2)}
       </TouchableOpacity>
    </View>
    {/* Segunda fila de tres cuadrados  */}
    <View style={styles.rowStyle}>
       <TouchableOpacity  onPress={()=>this.pressTheSquare()} style={[styles.squares, {borderLeftWidth:0}]}>
       {this.showTheImg(1,0)}
       </TouchableOpacity>
       <TouchableOpacity  onPress={()=>this.pressTheSquare()} style={styles.squares}>
       {this.showTheImg(1,1)}
       </TouchableOpacity>
       <TouchableOpacity  onPress={()=>this.pressTheSquare()} style={[styles.squares, {borderRightWidth:0 }]}>
       {this.showTheImg(1,2)}
       </TouchableOpacity>
    </View>
    {/* Tercera fila de tres cuadrados  */}
    <View style={styles.rowStyle}>
       <TouchableOpacity  onPress={()=>this.pressTheSquare()} style={[styles.squares, {borderLeftWidth:0,borderBottomWidth:0 }]}>
       {this.showTheImg(2,0)}
       </TouchableOpacity>
       <TouchableOpacity  onPress={()=>this.pressTheSquare()} style={[styles.squares, {borderBottomWidth:0  }]}>
       {this.showTheImg(2,1)}
       </TouchableOpacity>
       <TouchableOpacity  onPress={()=>this.pressTheSquare()} style={[styles.squares, {borderRightWidth:0 ,borderBottomWidth:0}]}>
       {this.showTheImg(2,2)}
       </TouchableOpacity>
    </View>
    </View>
  );
}}
// <--Estilos css-->
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    top:20
  },
  squares: {
  borderColor:'pink',
  borderWidth:2,
    height:75,
    width:75
  },
  rowStyle:{
 flexDirection:"row"
  },
  img:{
    width:55,
    height:55,
  }
});
