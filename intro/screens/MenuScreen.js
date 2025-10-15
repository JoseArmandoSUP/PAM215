import { Text, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreens';
import BotonesScreen from './BotonesScreens';
import TextInput from './TextInput';
import ImageBackground from './ImageBackground';
import ScrollView from './ScrollView';
import ActivityIndicator from './ActivityIndicator';
import FlatList from './FlatList';
import Modal from './Modal';
import ButtomSheet from './ButtomSheet';
import { Button } from 'react-native-web';

export default function MenuScreen() {
  
    const[screen, setScreen]=useState('menu');

    switch(screen){
        case 'contador':
            return<ContadorScreen/>
        case 'botones':
            return<BotonesScreen/>
        case 'textInput':
            return<TextInput/>
        case 'imageBackground':
            return<ImageBackground/>
        case 'scrollView':
            return<ScrollView/>
        case 'activityIndicator':
            return<ActivityIndicator/>
        case 'flatList':
            return<FlatList/>
        case 'modal':
            return<Modal/>
        case 'buttomSheet':
            return<ButtomSheet/>
        case 'menu':
            default:
                return (
                    <View>
                        <Text>Menu de Practicas</Text>
                        <Button onPress={()=>setScreen('contador')} title='Pract: Contador'></Button>
                        <Button onPress={()=>setScreen('botones')} title='Pract: Buttons'></Button>
                        <Button onPress={()=>setScreen('textInput')} title='Pract: TextInput & Alert'></Button>
                        <Button onPress={()=>setScreen('imageBackground')} title='Pract: ImageBackgroung & SlapshScreen'></Button>
                        <Button onPress={()=>setScreen('scrollView')} title='Pract: ScrollView'></Button>
                        <Button onPress={()=>setScreen('activityIndicator')} title='Pract: ActivityIndicator'></Button>
                        <Button onPress={()=>setScreen('flatList')} title='Pract: FlatList y Section List'></Button>
                        <Button onPress={()=>setScreen('modal')} title='Pract: Modal'></Button>
                        <Button onPress={()=>setScreen('buttomSheet')} title='Pract: Bottom Sheet'></Button>
                    </View>
                )
    }
  
}

const styles = StyleSheet.create({})