import { Text, StyleSheet, View, Button, ActivityIndicator } from 'react-native'
import React, {useState} from 'react'

export default function ActivityIndi() {
  
  const[loading, setLoading] = useState(false);
  const startLoading = () => {
    setLoading(true);
    setTimeout(()=> setLoading(false), 3000)
  };

  if(loading){
    return(
      <View style={styles.container}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator
          size="large"
          color="#8e0707ff"
          animating={true}
          hidesWhenStopped={true}
          >
            <Text color='black'>Cargando...</Text>
          </ActivityIndicator>
        </View>
      </View>
    ); 
  }
  
  

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Activity Indicator</Text>
      <Button title='Carga de datios' onPress={startLoading}></Button>
    </View>
  )

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  loaderContainer:{
    alignItems: 'center',
  },
  
})