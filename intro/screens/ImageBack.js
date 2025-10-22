import React, {useEffect, useState} from 'react'
import { Text, StyleSheet, View, ImageBackground, Animated, Easing } from 'react-native'

export default function ImageBack() {
  
  const[cargando, setCargando] = useState(true);
  const desvanecido = new Animated.Value(1);

  useEffect(()=>{
    const timer=setTimeout(()=>{
      Animated.timing(desvanecido,{
        toValue: 0,
        duration: 800,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true
      }).start(()=> setCargando(false));

    }, 2000);
    return()=> clearTimeout(timer);
  },[]);

  if(cargando){
    return(
      <Animated.View style={[styles.splashContainer, {opacity: desvanecido}]}>
        <ImageBackground
          source={require('../assets/dulce.jpeg')}
          resizeMode='contain'
          style={styles.splashImage}
        >
          <Text style={styles.splashText}>Cargando...</Text>
        </ImageBackground>
      </Animated.View>
    );
  }

  return(
    <ImageBackground 
      source={require('../assets/gato.jpeg')}
      resizeMode='cover'
      styles={styles.fondo}
    >
      <View>
        <Text style={styles.texto}>Hola</Text>
      </View>
    </ImageBackground>
  
  );
    
}

const styles = StyleSheet.create({
  fondo:{
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',

    width: '100',
    height: '100',
  },

  texto:{
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },

  splashContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },

  splashImage:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  splashText:{
    position: 'absolute',
    marginBottom: 60,
    fontSize: 20,
    color: 'grey',
  },
})