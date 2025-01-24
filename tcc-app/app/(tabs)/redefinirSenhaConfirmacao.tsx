import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Constants from '@/constants/Constants'

export default function redefinirSenhaConfirmacao() {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.main}>
                
                <View style={styles.containerConfirmacao}>

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
        alignItems:'center',
        justifyContent:'center',
    },

    containerConfirmacao:{
        width:'60%',
        height:'52%',
        borderWidth:1,
        borderColor:Constants.LARANJA,
        borderRadius:Constants.ARREDONDAMENTO_BOTAO,
        boxShadow: 
    }
})