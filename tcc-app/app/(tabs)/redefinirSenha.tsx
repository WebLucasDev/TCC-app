import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router';
import Constants from '@/constants/Constants';

export default function redefinirSenha() {

    const [email, setEmail] = useState('');

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.main}>
                    
                    <Text style={styles.titulo}>Redefinir senha</Text>

                    <Text style={styles.texto}>Informe o endereço de e-mail correspondente a sua conta. Iremos lhe encaminhar as instruções para alterar sua senha.</Text>

                    <Text style={styles.labelEmail}>e-mail *</Text>
                    <TextInput
                        style={styles.emailInput}
                        onChangeText={setEmail}
                        value={email}
                        keyboardType="email-address"
                        placeholder="endereço de email"
                        placeholderTextColor={Constants.MARROM}/>

                    <TouchableOpacity
                        style={styles.botaoRedefinir}>
                        <Text style={styles.botaoRedefinirTexto}>Redefinir</Text>
                    </TouchableOpacity>

                    <Link href={'/(tabs)/redefinirSenhaConfirmacao'}>Ir para a próxima tela</Link>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({

    safeArea:{
        flex:1,
        backgroundColor:Constants.BRANCO,
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },

    main:{
        width:'80%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        marginTop:'12%'
    },

    titulo:{
        fontSize:28,
        fontWeight:'300',
        color:Constants.MARROM,
    },

    texto:{
        fontSize:14,
        fontWeight:'300',
        textAlign:'justify',
        color:Constants.LARANJA,
        marginTop:'12%'
    },

    labelEmail:{
        fontSize:14,
        fontWeight:'300',
        color:Constants.MARROM,
        marginTop:'52%'
    },

    emailInput:{
        height:48,
        width:'100%',
        paddingHorizontal:12,
        borderWidth:1,
        borderRadius:Constants.ARREDONDAMENTO_BOTAO,
        borderColor:Constants.LARANJA,
        marginTop:'2%',
        boxSizing: 'border-box',  
    },

    botaoRedefinir:{
        backgroundColor:Constants.LARANJA,
        height:48,
        width:'100%',
        borderRadius:Constants.ARREDONDAMENTO_BOTAO,
        boxSizing: 'border-box',
        marginTop:'4%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },

    botaoRedefinirTexto:{
        color:Constants.BRANCO,
        fontSize:20
    }

})