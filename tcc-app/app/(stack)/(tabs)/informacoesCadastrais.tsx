import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Constants from '@/constants/Constants'
import ContainerSuperior from '@/components/ContainerSuperior'

export default function informacoesCadastrais() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.main}>

        <ContainerSuperior/>

        <View style={styles.containerDadosCadastrais}>
          
          <View style={styles.containerDadosCadastraisInput}>
            <Text style={styles.dadosCadastraisLabel}>CPF:</Text>
            <TextInput style={styles.dadosCadastraisInput} placeholder='CPF'/>
          </View>

          <View style={styles.containerDadosCadastraisInput}>
            <Text style={styles.dadosCadastraisLabel}>Nome Completo:</Text>
            <TextInput style={styles.dadosCadastraisInput} placeholder='Nome Completo:'/>
          </View>

          <View style={styles.containerDadosCadastraisInput}>
            <Text style={styles.dadosCadastraisLabel}>Cargo:</Text>
            <TextInput style={styles.dadosCadastraisInput} placeholder='Cargo:'/>
          </View>

          {/* <View style={styles.containerDadosCadastraisInput}>
            <Text style={styles.dadosCadastraisLabel}>Horários de Trabalho:</Text>
            <TextInput placeholder='08:00 - 11:00'/>
            <TextInput placeholder='13:00 - 18:00'/>
          </View> */}
        
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

  containerDadosCadastrais:{
    width:'80%',
    marginTop:'12%',
    borderWidth:1,
    borderColor:Constants.LARANJA
  },

  containerDadosCadastraisInput:{
    width:'100%'
  },

  dadosCadastraisLabel:{
    color:Constants.MARROM,
    fontSize:16,
  },

  dadosCadastraisInput:{
    width:'100%',
    borderWidth:1,
    borderColor:Constants.LARANJA
  }

})