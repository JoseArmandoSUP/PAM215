import { Text, StyleSheet, View, Button, ScrollView, Image, Alert, TextInput } from 'react-native'
import React, {useState, useEffect, useRef} from 'react';

export default function Repaso() {
  
    const[variable, setFuncion] = useState(0);
    const[nombre, setNombre] = useState('');

    const mostrarSaludo = ()=>{
        if(nombre.trim() === ''){
            alert('Por favor ingresa tu nombre');
        }else{
            alert(`Hola ${nombre}`);
        }
    };

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Repaso 2</Text>
        <Text>Usar use state como una variable de estado: {variable}</Text>
        <Button title='Aumentar' onPress={()=> setFuncion(variable+1)}></Button>
        <Button title= 'Decrementar' onPress={()=> setFuncion(variable-1)}></Button>
        <TextInput placeholder='escibre aqui' value={nombre} onChangeText={setNombre}></TextInput>
        <Button title='saludar' onPress={mostrarSaludo}></Button>
      </View>
    );
  
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    titulo:{
        fontSize: 20,
        fontWeight: 'bold'
    },
})