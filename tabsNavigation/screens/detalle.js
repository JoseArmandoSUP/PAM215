import {View, Text, Pressable, StyleSheet} from "react-native";

export default function Detalle({navigation}){
    return(
        <View style={styles.container}>
            
            <Text style={styles.titulo}>Detalles de Usuario</Text>
            
            <Text style={styles.subtitulo}>Desde Navigation Stack</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    titulo:{
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
    },

    subtitulo:{
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
        color: "#0078FF",
    },

});