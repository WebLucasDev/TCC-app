import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from '@/constants/Constants';

const UsuarioOpecoes = () => {

    const [visivel, setVisivel] = useState(false)
    const opcoes = [
        {
            titulo: 'Sair',
            acao: () => alert('calma calabreso')
        }
    ]

    return (
    <TouchableOpacity onPress={() => setVisivel(true)}>
        <FontAwesome name="user" size={24} color={Constants.LARANJA} />
        <Modal transparent visible={visivel}>

            <SafeAreaView style={styles.safeArea} onTouchStart={() => setVisivel(false)}>

                <View style={styles.containerOpcoes}>
                    {opcoes.map ((op, i) =>(
                        <TouchableOpacity style={styles.botaoOpcoes} key={i} onPress={() => op.acao}>
                            <Text>{op.titulo}</Text>
                            <FontAwesome name="sign-out" size={24} color={Constants.LARANJA} />
                        </TouchableOpacity>
                    ))}
                </View>

            </SafeAreaView>

        </Modal>
    </TouchableOpacity>
  )
}

export default UsuarioOpecoes;

const styles = StyleSheet.create({

    safeArea:{
        flex:1,
    },

    containerOpcoes:{
        borderRadius:Constants.ARREDONDAMENTO_BOTAO,
        borderColor:Constants.LARANJA,
        borderWidth:1,
        backgroundColor:Constants.BRANCO,
        paddingHorizontal: '12%',
        paddingVertical:'4%',
        position:'absolute',
        right:'8%',
        top:'14%'
    },

    botaoOpcoes:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        gap:'4%'
    }
})