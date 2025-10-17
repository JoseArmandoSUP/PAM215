import React, {useCallback, useRef, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View, Button } from 'react-native'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

export default function ButtomSheet () {
  
  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const snapPoints = ["40%"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ButtomSheet Demo</Text>

      <Button
        title={isOpen ? "Cerrar" : "Abrir BottomSheet"}
        onPress={() => {
          if(isOpen){
            sheetRef.current?.close();
          }else{
            sheetRef.current?.expand();
          }
          setIsOpen(!isOpen);
        }} 
      />

      <BottomSheet ref={sheetRef} index={-1} snapPoints={snapPoints}>
        <BottomSheetView style={styles.sheetContent}>
          <Text>Hola</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sheetContent: {
    flex: 1,
    alignItems: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
});