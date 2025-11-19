import {View, Text, Pressable, StyleSheet} from "react-native";

export default function Home({navigation}){
    return(
        <View style={styles.container}>
            
            <Text style={styles.titulo}>Bienvenido a la pantalla principal</Text>
            
            <Pressable style={[styles.button, styles.buttonProfile]} onPress={()=>navigation.navigate('Profile')}>
                <Text style={styles.buttonText}>Ir a perfil</Text>
            </Pressable>

            <Pressable style={[styles.button, styles.buttonSettings]} onPress={()=>navigation.navigate('Settings')}>
                <Text style={styles.buttonText}>Ir a Configuracion</Text>
            </Pressable>

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

    button:{
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginBottom: 20,
        width: '80%',
        alignItems: 'center',
    },

    buttonProfile:{
        backgroundColor: "#0078FF",
    },

    buttonSettings:{
        backgroundColor: "#FF8800",
    },

    buttonText:{
        color: "#fff",
        fontSize: 16,
        fontWeight: '600',
    },
});