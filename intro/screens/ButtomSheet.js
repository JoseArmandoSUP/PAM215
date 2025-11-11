//useRef → sirve para crear una referencia que controla cuándo se abre o cierra el BottomSheet.
//useState → se usa para guardar si el BottomSheet está abierto o cerrado.
import React, { useRef, useState } from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
//BottomSheet, BottomSheetView → vienen de la librería @gorhom/bottom-sheet.
//Son los que permiten crear y mostrar los paneles deslizables.
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function ButtomSheet() {
  // 🔹 Bottom Sheet Modal
  const modalSheetRef = useRef(null);
  //sheetRef → guarda una referencia del BottomSheet, necesaria para poder abrirlo o cerrarlo con código.
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  //isOpen → variable booleana (true o false) que nos dice si el BottomSheet está abierto.

  const modalSnapPoints = ['60%'];
  //snapPoints → define la altura del BottomSheet cuando se abre (por ejemplo, 40% de la pantalla)

  
  const toggleModalSheet = () => {
    if (isModalOpen) {
      modalSheetRef.current?.close();
    } else {
      modalSheetRef.current?.expand();
    }
    setIsModalOpen(!isModalOpen);
  };
  //Usa la referencia sheetRef para abrir (expand()) o cerrar (close()) el BottomSheet.
  //Luego, cambia el valor de isOpen para reflejar su nuevo estado.
  //?. es un operador opcional que evita errores si el objeto todavía no está listo.
  //esto es lo que hace posible controlar el BottomSheet con un botón.


  // 🔹 Bottom Sheet Persistent
  const persistentSheetRef = useRef(null);
  const persistentSnapPoints = ['15%', '50%'];

  return (
    
    <GestureHandlerRootView style={{ flex: 1 }}>

      <View style={styles.container}>
        <Text style={styles.title}>Tipos de BottomSheet</Text>

        {/* BOTÓN PARA MODAL */}
        <Button
          title={isModalOpen ? 'Cerrar Modal BottomSheet' : 'Abrir Modal BottomSheet'}
          onPress={toggleModalSheet}
          color="#1E90FF"
        />

        {/* MODAL BOTTOM SHEET */}
        {/*ref={sheetRef} → conecta el BottomSheet con la referencia que usamos para abrir/cerrar.*/}
        {/*index={-1} → significa que está cerrado por defecto.*/}
        <BottomSheet ref={modalSheetRef} index={-1} snapPoints={modalSnapPoints}>
          
          {/*BottomSheetView → contiene el contenido visible dentro del panel.*/}
          {/*mostrar cómo aparece y desaparece el panel al presionar el botón.*/}
          <BottomSheetView style={styles.modalContent}>
            <Text style={styles.sheetTitle}>📄 BottomSheet Modal</Text>
            <Text style={styles.sheetText}>
              Cubre parte de la pantalla y se cierra deslizando o tocando fuera.
            </Text>
          </BottomSheetView>
        </BottomSheet>

        {/* PERSISTENT BOTTOM SHEET */}
        <BottomSheet
          ref={persistentSheetRef}
          index={0} // visible por defecto
          snapPoints={persistentSnapPoints}
          enablePanDownToClose={false} // no se puede cerrar
          backgroundStyle={{ backgroundColor: '#fff' }}
          handleIndicatorStyle={{ backgroundColor: '#aaa' }}
        >
          <BottomSheetView style={styles.persistentContent}>
            <Text style={styles.sheetTitle}>🎵 BottomSheet Persistent</Text>
            <Text style={styles.sheetText}>
              Este panel permanece siempre visible y se puede expandir o contraer.
            </Text>
          </BottomSheetView>
        </BottomSheet>
      </View>

    </GestureHandlerRootView>
    
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1 → indica que el contenedor ocupa toda la pantalla.
    flex: 1,
    backgroundColor: '#EAF2F8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 120, // para no tapar el contenido con el BottomSheet persistente
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2c3e50',
  },
  sheetText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  persistentContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
