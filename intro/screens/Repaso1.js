import { Text, StyleSheet, View, Button, Switch, TextInput, Alert, 
    Platform, ImageBackground, Animated, Easing } from 'react-native'
import React,{useState, useEffect} from 'react';

export default function Repaso1(){
  const[cargando, setCargando] = useState(true);
  const desvanecido = new Animated.Value(1);
  const[nombre, setNombre] = useState('');
  const[correo, setCorreo] = useState('');
  const[terminos, setTerminos] = useState(false);

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
            source={require('../assets/autobotlogo.jpg')}
            resizeMode='contain'
            style={styles.splashImage}
          >
            <Text style={styles.splashText}>Cargando...</Text>
          </ImageBackground>
        </Animated.View>
      );
  }

  const mostrarAlert = () =>{
    if(nombre.trim() === '' || correo.trim() === ''){
      Alert.alert("No todos los campos estan llenos, porfavor ingreselos todos");
      alert("No todos los campos estan llenos, ingreselos todos porfavor");
      return;
    }
    if(!terminos){
      Alert.alert('Debe aceptar los terminos y condiciones');  
      alert('Debe aceptar los terminos y condiciones');
      return;
    }
    
    const validarCorreo = /^[\w.%+-]+@gmail\.com$/;
    if(!validarCorreo.test(correo)){
      Alert.alert('Error Correo electronico no valido, intente de nuevo (ejemplo@gamil.com)');  
      alert('Error, Correo electronico no valido, intente de nuevo (ejemplo@gamil.com)');
      return;
    }else{
      Alert.alert('Datos Ingresados Correctamente\n' + `Nombre: ${nombre}\n Correo Electronico: ${correo}`);
      alert('Datos Ingresados Correctamente\n' + `Nombre: ${nombre}\n Correo Electronico: ${correo}`);
    }
  };

  
  return(
    <ImageBackground 
      source={require('../assets/imagenFondo.jpg')}
      resizeMode='cover'
      style={styles.fondo}
    >
      <View style={styles.container}>
        
        <View style={styles.formularioCintainer}>
          <Text style={styles.titulo}>Registro De Usuario</Text>
        
          <Text style={styles.etiquetas}>Nombre de usuario: </Text>
          <TextInput
            style={styles.inputs}
            placeholder='Escribe tu nombre aqui'
            value={nombre}
            onChangeText={setNombre}
          ></TextInput>
            
          <Text style={styles.etiquetas}>Correo Electronico</Text>
          <TextInput
            style={styles.inputs}
            placeholder='Escribe tu correo electronico aqui'
            value={correo}
            onChangeText={setCorreo}
          ></TextInput>

          <View style={styles.switchCon}>
            <Switch
              value={terminos}
              onValueChange={setTerminos}
              thumbColor={terminos ? 'blue' : 'grey'}
            >
            </Switch>
            <Text style={styles.terminosYcondicones}>Aceptar terminos y condiciones</Text>
          </View>

          <Button title='Registrarse' onPress={mostrarAlert}></Button>

        </View>

      </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  fondo:{
    flex: 1, 
    width: '100',
    height: '100',
    alignItems:'center',
    justifyContent: 'center',
  },
  
  container:{
    flex: 1,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent: 'center', 
  }, 

  formularioCintainer:{
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },

  titulo:{
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 20,
  }, 

  etiquetas:{
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
  },

  inputs:{
    width: '110%',
    borderWidth: 2,
    borderColor: '#106f59ff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'grey',
  },

  switchCon:{
    flexDirection:'row',
    alignItems:'center',
    marginTop: 20,
  },

  terminosYcondicones:{
    marginLeft: 10,
    fontSize: 14,
    
  },

  splashContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  splashImage:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  splashText:{
    position: 'absolute',
    bottom: 100,
    fontSize: 20,
    color: 'grey',
  },

  /*
  terminosYcondicones:{
    marginTop: 'row',
    gap: 10,
    marginTop: 15,
  },
  
  */
})
    
