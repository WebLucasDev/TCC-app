import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Mapa from "react-native-maps";
import Constants from '@/constants/Constants';
import ContainerSuperior from '@/components/ContainerSuperior';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const coordenada = {
  latitude:-18.57354091221633,
  longitude:-46.497816347742216,
}

export default function ponto() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.main}>

        <ContainerSuperior/>

        <Mapa
          style={styles.mapa}
          initialRegion={{
            latitude:coordenada.latitude,
            longitude:coordenada.longitude,
            latitudeDelta:0.005,
            longitudeDelta:0.005,
        }}/>
        
        <View style={styles.containerPonto}>
          <TouchableOpacity style={styles.botaoBaterPonto}>
            <Text style={styles.botaoBaterPontoTexto}>Bater o Ponto</Text>
          </TouchableOpacity>

          <View style={styles.inputRegistroPonto}>
            <Text style={styles.inputRegistroPontoTexto}>Último ponto registrado:</Text>
          </View>
        </View>

        <View style={styles.containerOpcoes}>
          <TouchableOpacity style={styles.botaoAjustePonto}>
            <FontAwesome5 name="fingerprint" size={24} color={Constants.LARANJA}/>
            <Text style={styles.botaoAjustePontoTexto}>Ajuste de ponto</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoAjustePonto}>
            <MaterialIcons name="edit-document" size={24} color={Constants.LARANJA}/>
            <Text style={styles.botaoAjustePontoTexto}>Falta justificada</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoAjustePonto}>
            <FontAwesome5 name="calendar-day" size={24} color={Constants.LARANJA}/>
            <Text style={styles.botaoAjustePontoTexto}>Histórico</Text>
          </TouchableOpacity>          
        </View>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({

  safeArea:{
    flex:1,
    backgroundColor:Constants.BRANCO
  },

  main:{
    width:'100%',
    height:'100%',
    display:'flex',
    flexDirection:'column',
    flexWrap:'nowrap',
    alignItems:'center'
  },

  mapa:{
    width:'100%',
    height:'50%',
    borderTopWidth:1,
    borderColor:Constants.LARANJA
  },

  containerPonto:{
    width:'80%',
    marginTop:'8%'
  },

  botaoBaterPonto:{
    width:'100%',
    height:48,
    backgroundColor:Constants.LARANJA,
    borderRadius:Constants.ARREDONDAMENTO_BOTAO,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },

  botaoBaterPontoTexto:{
    color:Constants.BRANCO,
    fontSize:24
  },

  inputRegistroPonto:{
    width:'100%',
    height:48,
    marginTop:'4%',
    borderWidth:1,
    borderColor:Constants.LARANJA,
    borderRadius:Constants.ARREDONDAMENTO_BOTAO,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },

  inputRegistroPontoTexto:{
    color:Constants.MARROM,
    fontSize:12
  },

  containerOpcoes:{
    width:'80%',
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-around',
    marginTop:'8%'
  },

  botaoAjustePonto:{
    width:'20%',
    display:'flex',
    flexDirection:'column',
    flexWrap:'nowrap',
    alignItems:'center'
  },

  botaoAjustePontoTexto:{
    textAlign:'center',
    fontSize:12
  }

})