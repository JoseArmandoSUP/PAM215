import { Text, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreens';
import BotonesScreen from './BotonesScreens';
import TextInputAle from './TextInputAlert';
import ImageBackgrou from './ImageBack';
import Scrollview from './Scrollview';
import ActivityIndica from './ActivityIndi';
import FlatList from './FlatYsection';
import Modal from './Modal';
import ButtomSheet from './ButtomSheet';
import Repaso1 from './Repaso1';
import { Button } from 'react-native-web';

export default function MenuScreen() {
  
    const[screen, setScreen]=useState('menu');

    switch(screen){
        case 'contador':
            return<ContadorScreen/>
        case 'botones':
            return<BotonesScreen/>
        case 'textInput':
            return<TextInputAle/>
        case 'imageBackground':
            return<ImageBackgrou/>
        case 'scrollView':
            return<Scrollview/>
        case 'activityIndicator':
            return<ActivityIndica/>
        case 'flatList':
            return<FlatList/>
        case 'modal':
            return<Modal/>
        case 'buttomSheet':
            return<ButtomSheet/>
        case 'repaso1':
            return<Repaso1/>
        case 'menu':
            default:
                return (
                    <View style={styles.botones}>
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
                        <Button onPress={()=>setScreen('repaso1')} title='Repaso 1'></Button>
                    </View>
                )
    }
  
}

const styles = StyleSheet.create({
    botones:{
        marginTop:20,
        flexDirection:'column',
        gap: 20,
        alignItems:'center',
        justifyContent:'center',
    },
})