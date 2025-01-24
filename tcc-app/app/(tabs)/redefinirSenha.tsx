import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Colors from '@/constants/Colors'

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
                        placeholderTextColor={Colors.MARROM}
                    />

                    <TouchableOpacity
                        style={styles.botaoRedefinir}
                    >
                        <Text style={styles.botaoRedefinirTexto}>Redefinir</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({

    safeArea:{
        flex:1,
        backgroundColor:Colors.BRANCO,
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },

    main:{
        width:'80%',
        display:'flex',
        flexDirection:'column',
        marginTop:'12%'
    },

    titulo:{
        fontSize:28,
        fontWeight:'300',
        color:Colors.MARROM,
    },

    texto:{
        fontSize:14,
        fontWeight:'300',
        textAlign:'justify',
        color:Colors.LARANJA,
        marginTop:'12%'
    },

    labelEmail:{
        fontSize:14,
        fontWeight:'300',
        color:Colors.MARROM,
        marginTop:'52%'
    },

    emailInput:{
        height:48,
        width:'100%',
        paddingHorizontal:12,
        borderWidth:1,
        borderRadius:8,
        borderColor:Colors.LARANJA,
        marginTop:'2%',
        boxSizing: 'border-box',  
    },

    botaoRedefinir:{
        backgroundColor:Colors.LARANJA,
        height:48,
        width:'100%',
        borderRadius:8,
        boxSizing: 'border-box',
        marginTop:'4%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },

    botaoRedefinirTexto:{
        color:Colors.BRANCO,
        fontSize:20
    }

})