import React, { useRef, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

export default function BottomSheetEjemplo() {
  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const snapPoints = ['40%'];

  const toggleSheet = () => {
    if (isOpen) {
      sheetRef.current?.close();
    } else {
      sheetRef.current?.expand();
    }
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BottomSheet</Text>

      <Button title={isOpen ? 'Cerrar' : 'Abrir'} onPress={toggleSheet} />

      <BottomSheet ref={sheetRef} index={-1} snapPoints={snapPoints}>
        <BottomSheetView style={styles.sheetContent}>
          <Text style={styles.sheetText}>Hola</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF2F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  sheetContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sheetText: {
    fontSize: 18,
    color: '#333',
  },
});
