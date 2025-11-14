import React, {useState, useRef} from "react";
import { View, Text, Button, StyleSheet, Platform } from "react-native";
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Practica14NovSolito(){

    //-------------------------------------BOTTOMSHEET MODAL----------------------------------------
    const modalRef = useRef(null);

    const[abierto, setAbierto] = useState(false);

    const modalSnapPoints = ["60%"];

    const accionModal = ()=>{
        if(abierto){
            modalRef.current?.close();
        }else{
            modalRef.current?.expand();
        }
        setAbierto(!abierto);
    };


    //------------------------------------BOTTOMSHEET PERSISTENT----------------------------------------
    const persistentRef = useRef(null);

    const persistentSnapPoints = ["15%","40%"];

    return(
        <GestureHandlerRootView style={{flex: 1}}>
            <View style={styles.container}>
                
                <Text style={styles.titulo}>Practica BottomSheet</Text>
                
                {/*-------------------------------BOTTOMSHEET MODAL-------------------------------*/}
                <Button 
                    title={abierto ? "Cerrar BottomSheet Modal" : "Abrir BottomSheet Modal"}
                    onPress={accionModal}
                ></Button>

                <BottomSheet ref={modalRef} index={-1} snapPoints={modalSnapPoints}>
                    <BottomSheetView style={styles.modalContainer}>
                        <Text style={styles.modalTitulo}>BottomSheet Modal</Text>
                        <Text style={styles.modaltexto}>
                            Cubre parte de la pantalla y se cierra deslizando haci abajo o presionando el boton
                        </Text>
                    </BottomSheetView>
                </BottomSheet>

                {/*-------------------------------BOTTOMSHEET PERSISTENT*/}
                <BottomSheet 
                    ref={persistentRef} 
                    index={0} 
                    snapPoints={persistentSnapPoints} 
                    enablePanDownToClose={false}
                    handleIndicatorStyle={{backgroundColor: "#aaa"}}
                >
                    <BottomSheetView style={styles.persistentContainer}>
                        <Text style={styles.modalTitulo}>BottomSheet Persistent</Text>
                        <Text style={styles.modaltexto}>
                            EL panel permanece visible y se puede contraer o expandir
                        </Text>
                    </BottomSheetView>
                </BottomSheet>

            </View>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 120,
    },

    titulo: {
        fontSize: 22,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#2c3e50',
    },

    modalTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#2c3e50',
    },

    modaltexto: {
        fontSize: 16,
        textAlign: 'center',
        color: '#333',
    },

    modalContainer: {
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