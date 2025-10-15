import { Text, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreens';
import BotonesScreen from './BotonesScreens'
import { Button } from 'react-native-web';

export default function MenuScreen() {
  
    const[screen, setScreen]=useState('menu');

    switch(screen){
        case 'contador':
            return<ContadorScreen/>
        case 'botones':
            return<BotonesScreen/>
        case 'menu':
            default:
                return (
                    <View>
                        <Text>Menu de Practicas</Text>
                        <Button onPress={()=>setScreen('contador')} title='Pract: Contador'></Button>
                        <Button onPress={()=>setScreen('botones')} title='Pract: Buttons'></Button>
                    </View>
                )
    }
  
}

const styles = StyleSheet.create({})