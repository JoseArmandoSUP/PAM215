import { Text, StyleSheet, View, Button, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';

export default function TextInputAlert() {
    const[nombre, setNombre] = useState('');
    const[password, setPassword] = useState('');
    const[telefono, setTelefono] = useState('');

    const mostrarAlerta = ()=>{
      if(nombre.trim() === '' || password.trim() === '' || telefono.trim() === ''){
        Alert.alert("Error porfavor ingresa todos los campos (movil)"); // solo se ve en el telefono
        alert("Error porfavor ingresa todos los campos (web)"); // para web
      }else{
        Alert.alert('Datos ingresados\n' + `Nombre: ${nombre}\n Password: ${password}\n Telefono: ${telefono}`); //movil
        alert('Datos ingresados\n' + `Nombre: ${nombre}\n Password: ${password}\n Telefono: ${telefono}`);
      }
    }
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>TextInput & Alert</Text>
        
        <Text style={styles.etiquetas}>Nombre: </Text>
        <TextInput style={styles.inputs} placeholder='Escirbe tu nombre aquí' value={nombre} onChangeText={setNombre}>
          
        </TextInput>
        <Text style={styles.etiquetas}>Contraseña: </Text>
        <TextInput style={styles.inputs} placeholder='Escirbe tu nombre aquí' keyboardType='phone-pad' value={password} onChangeText={setPassword} 
        secureTextEntry={true}>
          
        </TextInput>
        <Text style={styles.etiquetas}>Telefono: </Text>
        <TextInput style={styles.inputs} placeholder='Escirbe tu nombre aquí' value={telefono} onChangeText={setTelefono}>
          
        </TextInput>

        <Button title='Mostrar Alerta' onPress={mostrarAlerta}></Button>

      </View>
    )
  
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent: 'center',  
  },
  titulo:{
    fontFamily: 'Times New Roman',
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
    width: '50%',
    borderWidth: 2,
    borderColor: '#106f59ff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'grey',
  },
})