import { StyleSheet, Text, View, Button, ScrollView, ImageBackground, Image, Alert, Animated, Easing } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [cargando, setCargando] = useState(true);
  const desvanecido = new Animated.Value(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(desvanecido, {
        toValue: 0,
        duration: 800,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start(() => setCargando(false));
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (cargando) {
    return (
      <Animated.View style={[styles.splashContainer, { opacity: desvanecido }]}>
        <ImageBackground
          source={require('./assets/images3.jpg')}
          resizeMode="contain"
          style={styles.splashContainer}
        >
          <Text style={styles.splashText}>Cargando...</Text>
        </ImageBackground>
      </Animated.View>
    );
  }

  const mostrarAlerta = (nombre, descripcion) => {
    Alert.alert(`📸 ${nombre}`,descripcion,[{ text: 'Cerrar', style: 'cancel' }]);
    alert(`📸 ${nombre}`,descripcion,[{ text: 'Cerrar', style: 'cancel' }]);
  };

  return (
    <ImageBackground
      source={require('./assets/descarga2.png')}
      resizeMode="cover"
      style={styles.fondo}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.titulo}>🌎 Explora el mundo</Text>

          {/* TARJETAS */}
          <View style={styles.tarjeta}>
            <Text style={styles.nombreTrajetas}>Torre Eiffel, Francia</Text>
            <Image source={require('./assets/godzilla2.jpg')} style={styles.imagen} />
            <Text style={styles.descripcionTarjetas}>
              Un icónico monumento de hierro en París, símbolo de Francia.
            </Text>
            <Button
              title="Ver Detalles"
              onPress={() =>mostrarAlerta('Torre Eiffel, Francia','Un icónico monumento de hierro en París, símbolo de Francia.')}
            />
          </View>

          <View style={styles.tarjeta}>
            <Text style={styles.nombreTrajetas}>Taj Mahal, India</Text>
            <Image source={require('./assets/godzilla1954.jpg')} style={styles.imagen} />
            <Text style={styles.descripcionTarjetas}>
              Un mausoleo de mármol blanco en Agra, una de las maravillas del mundo moderno.
            </Text>
            <Button
              title="Ver Detalles"
              onPress={() =>
                mostrarAlerta(
                  'Taj Mahal, India',
                  'Un mausoleo de mármol blanco en Agra, considerado una de las Siete Maravillas del Mundo Moderno.'
                )
              }
            />
          </View>

          <View style={styles.tarjeta}>
            <Text style={styles.nombreTrajetas}>Pirámides de Giza, Egipto</Text>
            <Image source={require('./assets/MV5BMTA3ODI2Nzg0MDNeQTJeQWpwZ15BbWU4MDU2MTgxMzExV1.jpg')} style={styles.imagen} />
            <Text style={styles.descripcionTarjetas}>
              Antiguas estructuras que representan el poder y la historia de los faraones egipcios.
            </Text>
            <Button
              title="Ver Detalles"
              onPress={() =>
                mostrarAlerta(
                  'Pirámides de Giza, Egipto',
                  'Un complejo de pirámides y la Gran Esfinge en las afueras de El Cairo, que representan el antiguo poder del faraón Keops.'
                )
              }
            />
          </View>

          <View style={styles.tarjeta}>
            <Text style={styles.nombreTrajetas}>Machu Picchu, Perú</Text>
            <Image source={require('./assets/vegetaFrame.jpeg')} style={styles.imagen} />
            <Text style={styles.descripcionTarjetas}>
              Antigua ciudad inca situada en los Andes peruanos.
            </Text>
            <Button
              title="Ver Detalles"
              onPress={() =>
                mostrarAlerta(
                  'Machu Picchu, Perú',
                  'La antigua ciudad inca en los Andes peruanos es una de las maravillas del mundo antiguo y un sitio del Patrimonio de la Humanidad por la UNESCO.'
                )
              }
            />
          </View>

          <View style={styles.tarjeta}>
            <Text style={styles.nombreTrajetas}>Chichén Itzá, México</Text>
            <Image source={require('./assets/marvelsspidermanremastered2109699.jpg')} style={styles.imagen} />
            <Text style={styles.descripcionTarjetas}>
              Impresionante ruina maya en la península de Yucatán.
            </Text>
            <Button
              title="Ver Detalles"
              onPress={() =>
                mostrarAlerta(
                  'Chichén Itzá, México',
                  'Una de las ruinas más impresionantes del mundo maya, ubicada en la península de Yucatán.'
                )
              }
            />
          </View>

          <View style={styles.tarjeta}>
            <Text style={styles.nombreTrajetas}>Gran Muralla China</Text>
            <Image source={require('./assets/Coper9.jpeg')} style={styles.imagen} />
            <Text style={styles.descripcionTarjetas}>
              Una fortificación milenaria que se extiende por miles de kilómetros.
            </Text>
            <Button
              title="Ver Detalles"
              onPress={() =>
                mostrarAlerta(
                  'Gran Muralla China',
                  'Un conjunto de fortificaciones chinas que se extiende a lo largo de miles de kilómetros y es uno de los mayores logros de ingeniería de la humanidad.'
                )
              }
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    width: '100',
    height: '100',
    alignItems:'center',
  },
  scroll: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 20,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  tarjeta: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginVertical: 10,
    width: '85%',
    alignItems: 'center',
    padding: 15,
    elevation: 4,
  },
  imagen: {
    width: 280,
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  nombreTrajetas: {
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
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    position: 'absolute',
    bottom: 100,
    fontSize: 22,
    color: 'gray',
  },
});
