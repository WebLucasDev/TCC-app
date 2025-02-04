import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Constants from '@/constants/Constants'
import ContainerSuperior from '@/components/ContainerSuperior'

export default function holerite() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.main}>

        <ContainerSuperior/>

        <View style={styles.containerInputs}>

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

  containerInputs:{
    width:'80%',
    height:70,
    marginTop:'12%',
    backgroundColor:Constants.MARROM,
    opacity:0.7,
    borderWidth:1,
    borderColor:Constants.CINZA,
    borderRadius:Constants.ARREDONDAMENTO_BOTAO,
    display:'flex',
    justifyContent:'center',
  },

  

})