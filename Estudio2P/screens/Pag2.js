import { StyleSheet, Text, View, Button, ScrollView, ImageBackground, Image, Alert, Animated, Easing } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function Pag2(){

    const[cargando, setCargando]=useState(true);
    const desvanecido = new Animated.Value(1);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            Animated.timing(desvanecido,{
                toValue: 0,
                duration: 800,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true
            }).start(()=>setCargando(false));
        },1000);
        return ()=> clearTimeout(timer);
    },[]);

    if(cargando){
        <Animated.View style={[styles.splashContainer, {opacity: desvanecido}]}>
            <ImageBackground
                source={require('../assets/descarga2.png')}
                resizeMode='contain'
                style={styles.splashImagen}
            >
                <Text style={styles.splashTexto}>cargando</Text>
            </ImageBackground>
        </Animated.View>
    }

    const mostrarAlerta2 = (nombre, descripcion) =>{
        Alert.alert(`Nombre: ${nombre}\n + Descipcion: ${descripcion}`);
        alert(`Nombre: ${nombre}\n + Descipcion: ${descripcion}`);
    };

    return(
        <ImageBackground
            source={require('../assets/godzilla1954.jpg')}
            resizeMode='cover'
            style={styles.imagenFondo}
        >
            <ScrollView style={styles.scroll} contentContainerStyle={{paddingBottom: 100}}>
                
                <View style={styles.container}>

                    <Text style={styles.titulo}>Pagina 2... sos</Text>

                    <View style={styles.tarjetas}>
                        <Text style={styles.tituloTarjetas}>Hola</Text>
                        <Image 
                            source={require('../assets/Coper9.jpeg')}
                            resizeMode='cover'
                            style={styles.imagenesTrajetas}>
                        </Image>
                        <Text style={styles.descripcionTarjetas}>Esta es la descripcion</Text>
                        <Button  onPress={()=>mostrarAlerta2("Hola desde el alert", "Descripcion desde le Alert")} title='Ver Detalles' ></Button>
                    </View>

                    <View style={styles.tarjetas}>
                        <Text style={styles.tituloTarjetas}>Hola 2</Text>
                        <Image 
                            source={require('../assets/vegetaFrame.jpeg')}
                            resizeMode='cover'
                            style={styles.imagenesTrajetas}
                        ></Image>
                        <Text style={styles.descripcionTarjetas}>Esta es la descripcion</Text>
                        <Button  onPress={()=>mostrarAlerta2("Hola 2 desde el alert", "Descripcion 2 desde le Alert")} title='Ver Detalles' ></Button>
                    </View>
                    
                    <View style={styles.tarjetas}>
                        <Text style={styles.tituloTarjetas}>Hola 3</Text>
                        <Image 
                            source={require('../assets/marvelsspidermanremastered2109699.jpg')}
                            resizeMode='cover'
                            style={styles.imagenesTrajetas}
                        ></Image>
                        <Text style={styles.descripcionTarjetas}>Esta es la descripcion</Text>
                        <Button  onPress={()=>mostrarAlerta2("Hola 3 desde el alert", "Descripcion 3 desde le Alert")} title='Ver Detalles' ></Button>
                    </View>

                </View>

            </ScrollView>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    splashContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    splashImagen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    fondo:{
        flex: 1,
    },

    splashTexto:{
        fontSize: 22,
        fontWeight:'bold',
        padding: 10,
        borderRadius: 10,
    },

    scroll:{
        alignItems: 'center'
    },

    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
    },

    tarjetas: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 15,
        marginBottom: 20,
        alignItems: 'center',
        width: '85%',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
    },

    imagenesTrajetas: {
        width: '100%',
        height: 180,
        borderRadius: 10,
        marginBottom: 10,
    },

    tituloTarjetas: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    descripcionTarjetas: {
        fontSize: 14,
        color: '#555',
        marginBottom: 10,
        textAlign: 'center',
    },

});