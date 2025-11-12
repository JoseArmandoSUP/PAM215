import { Text, StyleSheet, View, Modal, Pressable, TextInput } from 'react-native'
import React, {useState} from 'react';

export default function ModalScreen() {
  
  const[mostrar, setMostrar] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bienvenido</Text>

      <Pressable style={styles.boton} onPress={()=>setMostrar('login')} >
        <Text style={styles.text}>Iniciar Sesion</Text>
      </Pressable>

      <Pressable style={styles.boton} onPress={()=>setMostrar('registro')} >
        <Text style={styles.text}>Registarse</Text>
      </Pressable>

      <Pressable style={styles.boton} onPress={()=>setMostrar('alerta')} >
        <Text style={styles.text}>Alerta</Text>
      </Pressable>

      <Modal
        animationType='slide'
        trasparent={false}
        visible={mostrar === 'login'}
        onRequestClose={()=>setMostrar(null)}
      >

        <View style={styles.container2}>
          
          <Text style={styles.titulo}>Formulario de inicio de sesion</Text>
          
          <TextInput placeholder='Agregue su nombre' style={styles.input}></TextInput>
          <TextInput placeholder='Agregue su contraseña' style={styles.input}></TextInput>

          <Pressable style={styles.boton} onPress={()=>setMostrar(null)}>
            <Text style={styles.text}>iniciar sesion</Text>
          </Pressable>
        
        </View>

      </Modal>

      <Modal
        animationType='slide'
        trasparent={false}
        visible={mostrar === 'registro'}
        onRequestClose={()=>setMostrar(null)}
      >

        <View style={styles.container2}>
          
          <Text style={styles.titulo}>Formulario de registro</Text>
          
          <TextInput placeholder='Agregue su nombre' style={styles.input}></TextInput>
          <TextInput placeholder='Agregue su Email' keyboardType='email-addres' style={styles.input}></TextInput>
          <TextInput placeholder='Agregue su contraseña' style={styles.input}></TextInput>

          <Pressable style={styles.boton} onPress={()=>setMostrar(null)}>
            <Text style={styles.text}>Registrarse</Text>
          </Pressable>
        
        </View>

      </Modal>

      <Modal
        animationType='fade'
        trasparent={false}
        visible={mostrar === 'alerta'}
        onRequestClose={()=>setMostrar(null)}
      >
        
        <View style={styles.container3}>
          
          <View style={styles.containerAlerta}>

            <Text style={styles.textAlerta}>Esto es una alerta</Text>
            
            <View style={styles.containerBoton}>

              <Pressable style={styles.boton1} onPress={()=>setMostrar(null)}>
                <Text style={styles.text}>Ok</Text>
              </Pressable>

              <Pressable style={styles.boton2} onPress={()=>setMostrar(null)}>
                <Text style={styles.text}>Cerrar</Text>
              </Pressable>

            </View>

          </View>

        </View>

      </Modal>

    </View>
  );
  
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },

  container2:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a1bfffff',
  },

  container3:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#00000099',
  },

  boton:{
    backgroundColor: '#002aff',
    padding: 15,
    borderRadius: 20,
    marginBottom: 15,
    width: '70%',
    alignItems: 'center',
  },

  text:{
    color: 'White',
    fontSize: 18,
    fontWeight: '500'
  },

  titulo:{
    fontSize: 25,
    marginBottom: 20,
  },

  input:{
    width: '80%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fffffff'
  },

  containerAlerta:{
    width: 300,
    height: 200,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },

  textAlerta:{
    fontSize: 20,
    color: 'black',

  },

  boton1:{
    backgroundColor: '#002aff',
    padding: 15,
    borderRadius: 20,
    marginRight: 10,
    width: 100,
    alignItems: 'center'
  },

  boton2:{
    backgroundColor: '#ff0000ff',
    padding: 15,
    borderRadius: 20,
    marginRight: 10,
    width: 100,
    alignItems: 'center'
  },

  containerBoton:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    width: '80%'
  },
});