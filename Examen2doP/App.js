import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Alert, Easing, Platform, Button, ScrollView, TextInput, Animated } from 'react-native';
import React,{useState, useEffect} from 'react';

//``

//
export default function App() {
  
  const[cargando, setCargando] = useState(true);
  const desvamecido = new Animated.Value(1);
  const[status, setStatus] = useState("pendiente");

  {/*variables de estado para estatus de las taresa*/}

  useEffect(()=>{
    const timer = setTimeout(()=>{
      Animated.timing(desvamecido,{
        toValue:0,
        duration: 800,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true
      }).start(()=>setCargando(false));
    },1000);
    return ()=>clearTimeout(timer);
  },[]);

  if(cargando){
    return(
      <Animated.View style={[styles.splashContenedor, {opacity: desvamecido}]}>
      <ImageBackground
        source={require('./assets/imagenSplash.png')}
        resizeMode='contain'
        style={styles.splashImagen}
      >
        <Text>Frase motivacional PENDIENTE</Text>
      </ImageBackground>
      </Animated.View>
    );
  }
  
  
  return (
    <ImageBackground
      source={require('./assets/ImagenDeFondo.png')}
      resizeMode='cover'
      style={styles.fondo}
    >
      
      <ScrollView contentContainerStyle={{padding: 100}}>

        <View style={styles.container}>
          
          <Text style={styles.titulo}>Mis Deberes</Text>
          <Text style={styles.fecha}>07/11/2025</Text>

          <View style={styles.categoria}>
            <Text style={styles.datosCategoria}>Escuela</Text>
            <Text style={styles.datosCategoria}>Descripiocn</Text>
            <Text style={styles.datosCategoria}>Prioridad: </Text>
            {/*estatus*/}
            {/*switch estatus*/}
          </View>

          <View style={styles.categoria}>
            <Text style={styles.datosCategoria}>Hogar</Text>
            <Text style={styles.datosCategoria}>Descripiocn</Text>
            <Text style={styles.datosCategoria}>Prioridad: </Text>
            {/*estatus*/}
            {/*switch estatus*/}
          </View>

          <View style={styles.categoria}>
            <Text style={styles.datosCategoria}>Personal</Text>
            <Text style={styles.datosCategoria}>Descripiocn</Text>
            <Text style={styles.datosCategoria}>Prioridad: </Text>
            {/*estatus*/}
            {/*switch estatus*/}
          </View>

        </View>

      </ScrollView>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splashContenedor:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  splashImagen:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  fondo:{
    flex: 1, 
    width: '100',
    height: '100',
    alignItems:'center',
    justifyContent: 'center',
  },
  
  
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo:{
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },

  fecha:{
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 20,
    alignItems:'flex-end'
  },

  categoria:{
    backgroundColor: 'white',
    borderRadius: 12,
    marginVertical: 10,
    width: '85%',
    alignItems: 'center',
    padding: 15,
    elevation: 4,
  },
  
  datosCategoria:{
    fontSize: 10,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
