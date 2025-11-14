import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import BottomSheetEjemplo from './screens/BottomSheetEjemplo';
import Practica14Nov from './screens/Practica14Nov';
import Practica14NovSolito from './screens/Practica14NovSolito';
import { Button } from 'react-native-web';

export default function App() {
  
  const[screen, setScreen] = useState('menu');

  switch(screen){
    case 'ejemplo1':
      return <BottomSheetEjemplo />;
    case 'ejemplo2':
      return<Practica14Nov></Practica14Nov>
    case 'ejemplo3':
      return<Practica14NovSolito></Practica14NovSolito>
    case 'menu':
      default:
        return(
          <View>
            <Button title='Ejemplo 1' onPress={()=>setScreen('ejemplo1')}></Button>

            <Button title='Practica 14 Noviembre' onPress={()=>setScreen('ejemplo2')}></Button>

            <Button title='Practica 14 Noviembre 2.0' onPress={()=>setScreen('ejemplo3')}></Button>
          </View>
        );
  }
  
  
}
