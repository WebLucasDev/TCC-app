import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Constants from '@/constants/Constants'
import UsuarioOpecoes from '@/components/UsuarioOpecoes'

const ContainerSuperior = () => {
  return (
    <View style={styles.container}>
        
        <Image
            source={require('../assets/images/MetreLogo2.png')}/>
        
        <Text style={styles.usuarioNome}>Olá, Lucas</Text>
        
        <UsuarioOpecoes/>
        
    </View>
  )
}

export default ContainerSuperior

const styles = StyleSheet.create({

    container:{
        width:'100%',
        height:'12%',
        borderBottomWidth:1,
        borderColor:Constants.LARANJA,
        display:'flex',
        flexDirection:'row',
        flexWrap:'nowrap',
        alignItems:'center',
        justifyContent:'space-around'
        },
        
    usuarioNome:{
        color:Constants.CINZA,
        fontSize:24
    }
})