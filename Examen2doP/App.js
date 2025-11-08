import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Alert, Easing, Platform, Button, ScrollView, Animated, Switch } from 'react-native';
import React,{useState, useEffect} from 'react';

//``

//
export default function App() {
  
   
  
  const[cargando, setCargando] = useState(true);
  const desvamecido = new Animated.Value(1);
  
  const[status, setStatus] = useState(false);
  const[color, cambiarColor] = useState('green');

  const[status2, setStatus2] = useState(false);
  const[color2, cambiarColor2] = useState('green');

  const[status3, setStatus3] = useState(false);
  const[color3, cambiarColor3] = useState('green');

  const[status4, setStatus4] = useState(false);
  const[color4, cambiarColor4] = useState('green');

  const[status5, setStatus5] = useState(false);
  const[color5, cambiarColor5] = useState('green');

  const[status6, setStatus6] = useState(false);
  const[color6, cambiarColor6] = useState('green');

  const[status7, setStatus7] = useState(false);
  const[color7, cambiarColor7] = useState('green');

  

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
        <Text>Los sueños nos hacen ser lo que somos</Text>
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

          <View style={styles.categoria1}>
            
            <Text style={styles.tCategoria}>Escuela</Text>
            <Text style={styles.datosCategoria}>Tarea 1: Hacer la terea de Calculo</Text>
            <Text style={styles.datosCategoria}>Prioridad: Media</Text>
            <Text style={[styles.statusEstilo, {color: status ? color: 'black'}]}>
              {status ? 'Completada' : 'Pendiente'}
            </Text>
            <Switch
              value = {status}
              onValueChange={()=>setStatus(!status)}
              trackColor={{true : 'green', false: 'rojo'}}
            ></Switch>

            <Text style={styles.datosCategoria}>Tarea 2: Avanzarle al proyecto de Programacion</Text>
            <Text style={styles.datosCategoria}>Prioridad: Alta</Text>
            <Text style={[styles.statusEstilo, {color: status2 ? color: 'black'}]}>
              {status2 ? 'Completada' : 'Pendiente'}
            </Text>
            <Switch
              value = {status2}
              onValueChange={()=>setStatus2(!status2)}
              trackColor={{true : 'green', false: 'rojo'}}
            ></Switch>

          </View>

          <View style={styles.categoria2}>
            <Text style={styles.tCategoria}>Hogar</Text>
            <Text style={styles.tCategoria}>Escuela</Text>

            <Text style={styles.datosCategoria}>Tarea 1: Arreglar mi cuarto</Text>
            <Text style={styles.datosCategoria}>Prioridad: Baja</Text>
            <Text style={[styles.statusEstilo, {color: status3 ? color: 'black'}]}>
              {status3 ? 'Completada' : 'Pendiente'}
            </Text>
            <Switch
              value = {status3}
              onValueChange={()=>setStatus3(!status3)}
              trackColor={{true : 'green', false: 'rojo'}}
            ></Switch>

            <Text style={styles.datosCategoria}>Tarea 2: Pintar la sala</Text>
            <Text style={styles.datosCategoria}>Prioridad: Media</Text>
            
          </View>

          <View style={styles.categoria3}>
            <Text style={styles.tCategoria}>Personal</Text>
            <Text style={styles.datosCategoria}>Tarea 1: Practica la guitarra</Text>
            <Text style={styles.datosCategoria}>Prioridad: Baja</Text>
            <Text style={styles.datosCategoria}>Tarea 2: Seguir con el curso de dibujo</Text>
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
    color: 'blue',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },

  fecha:{
    fontSize: 30,
    color: 'red',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 20,
    alignItems:'flex-end'
  },

  categoria1:{
    backgroundColor: '#c7c54dff',
    borderRadius: 12,
    marginVertical: 10,
    width: '85%',
    alignItems: 'center',
    padding: 15,
    elevation: 4,
  },

  categoria2:{
    backgroundColor: '#4dc79eff',
    borderRadius: 12,
    marginVertical: 10,
    width: '85%',
    alignItems: 'center',
    padding: 15,
    elevation: 4,
  },

  categoria3:{
    backgroundColor: '#c74d5dff',
    borderRadius: 12,
    marginVertical: 10,
    width: '85%',
    alignItems: 'center',
    padding: 15,
    elevation: 4,
  },

  tCategoria:{
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  
  datosCategoria:{
    fontSize: 10,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
    alignItems:'flex-start',
    justifyContent: 'flex-start',
  },

  statusEstilo:{
    fontSize: 20,
    marginBottom: 15,
  },

});