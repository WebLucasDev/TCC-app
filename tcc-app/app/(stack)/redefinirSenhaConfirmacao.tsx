import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Constants from '@/constants/Constants'
import { Link } from 'expo-router'

export default function redefinirSenhaConfirmacao() {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.main}>
                
                <View style={styles.containerConfirmacao}>                    
                    
                    <Image
                        style={styles.confirmacaoIcone}
                        source={require('../../assets/images/Check-Mark.png')}/>
                    
                    <View style={styles.containerTextoConfirmacao}>
                        
                        <Text style={styles.textoConfirmacao}>As instruções para recuperar a sua conta foram encaminhadas ao email usado no seu cadastro !</Text>
                        
                        <TouchableOpacity style={styles.botaoVoltar}>
                            <Text style={styles.botaoVoltarTexto}>Voltar</Text>
                        </TouchableOpacity>
                    
                    {/* Remover depois */}
                    <Link
                    href={"/_sitemap"}>
                    sitemap</Link>                    
                    </View>

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
        width:'76%',
        height:'44%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        borderWidth:1,
        borderColor:Constants.LARANJA,
        borderRadius:Constants.ARREDONDAMENTO_BOTAO,
    },

    confirmacaoIcone:{
        marginTop:'8%'
    },

    containerTextoConfirmacao:{
        width:'72%',
        marginTop:'12%'
    },

    textoConfirmacao:{
        textAlign:'center',
        fontSize:16,
        color:Constants.MARROM
    },

    botaoVoltar:{
        backgroundColor:Constants.LARANJA,
        height:48,
        width:'100%',
        borderRadius:Constants.ARREDONDAMENTO_BOTAO,
        boxSizing: 'border-box',
        marginTop:'12%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },

    botaoVoltarTexto:{
        color:Constants.BRANCO,
        fontSize:20
    }

})