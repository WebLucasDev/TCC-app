import { Modal, StyleSheet, Text, TouchableOpacity, View, Animated, Easing } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from '@/constants/Constants';

const UsuarioOpecoes = () => {
    const [visivel, setVisivel] = useState(false);
    const escala = useRef(new Animated.Value(0)).current;
    const teste = () => console.log('calma calabreso');

    function redefinirEscala(para: number) {
        if (para === 1) {
            setVisivel(true);
        }

        Animated.timing(escala, {
            toValue: para,
            useNativeDriver: true,
            duration: 200,
            easing: Easing.linear,
        }).start(() => {
            if (para === 0) {
                setVisivel(false);
            }
        });
    }

    return (
        <TouchableOpacity onPress={() => redefinirEscala(1)}>
            <FontAwesome name="user" size={24} color={Constants.LARANJA} />
            <Modal transparent visible={visivel}>
                <SafeAreaView style={styles.safeArea} onTouchStart={() => redefinirEscala(0)}>
                    <Animated.View style={[styles.containerOpcoes, { transform: [{ scale: escala }] }]}>
                        <TouchableOpacity style={styles.botaoOpcoes} onPress={teste}>
                            <Text style={styles.botaoOpcoesTexto}>Sair</Text>
                            <FontAwesome name="sign-out" size={24} color={Constants.LARANJA} />
                        </TouchableOpacity>
                    </Animated.View>
                </SafeAreaView>
            </Modal>
        </TouchableOpacity>
    );
};

export default UsuarioOpecoes;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },

    containerOpcoes: {
        borderRadius: Constants.ARREDONDAMENTO_BOTAO,
        borderColor: Constants.LARANJA,
        borderWidth: 1,
        backgroundColor: Constants.BRANCO,
        paddingHorizontal: '12%',
        paddingVertical: '4%',
        position: 'absolute',
        right: '8%',
        top: '14%',
    },

    botaoOpcoes: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
    },

    botaoOpcoesTexto: {
        fontSize: 16,
        color: Constants.MARROM,
    },
});
