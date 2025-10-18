import { Text, StyleSheet, View, Button, Switch } from 'react-native'
import React,{useState} from 'react';

export default function BotonesScreens() {
  
    const[esEscendido, cambiarEncendido] = useState(false);
    const[color, cambiarColor] = useState('yellow');

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Control de Luz</Text>
        {/* Operador Ternario: {condicional ? valorTrue : valorFalse} */}
        <Text style={[styles.luz, {color: esEscendido ? color: 'black'}]}>
          {esEscendido ? 'Luz Encendida' : 'Luz Apagada'}
        </Text>

        <Switch
          value = {esEscendido}
          onValueChange={() => cambiarEncendido(!esEscendido)}
          trackColor={{true : 'yellow', false: 'gray'}}
        ></Switch>

        <View style={styles.cajaBotones}>
          <Button
            title='Amarillo'
            onPress={() => esEscendido && cambiarColor('yellow')}
            color='#c0b103ff'
          ></Button>

          <Button
            title='Azul'
            onPress={() => esEscendido && cambiarColor('blue')}
            color='blue'
          ></Button>

          <Button
            title='Rojo'
            onPress={() => esEscendido && cambiarColor('red')}
            color='#810707ff'
          ></Button>
        </View>

      </View>
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353534ff',
    alignItems: 'center', // start < -- center -- > end
    justifyContent: 'center',
  },

  cajaBotones:{
    flexDirection: 'row',
    gap: 10,
    marginTop: 15,
  },

  titulo:{
    fontSize: 40,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
  },

  luz:{
    fontSize: 30,
    marginBottom: 15,
  },
})