import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Button } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import { useState } from "react";


export default function Index() {

  /* Entrada de dados */
  const [cpf, setCpf] = useState('')
  const [senha, setSenha] = useState('')
  const apertarBotaoEntrar = () => console.log('teste')

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.main}>
          
          <Image 
            source={require('../../assets/images/MetreLogo1.png')}
          />

          <Text style={styles.titulo}>Seja Bem-Vindo(a)</Text>

          <View style={styles.containerInputs}>
            
            <TextInput
              style={styles.cpfInput}
              onChangeText={setCpf}
              value={cpf}
              keyboardType="numeric"
              placeholder="CPF"
              placeholderTextColor={Colors.MARROM}
            />

            <TextInput
              style={styles.senhaInput}
              onChangeText={setSenha}
              value={senha}
              placeholder="Senha"
              placeholderTextColor={Colors.MARROM}
            />

            <TouchableOpacity
              style={styles.botaoEntrar}
              onPress={apertarBotaoEntrar}
            >
              <Text style={styles.botaoEntrarTexto}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.botaoEsqueciSenha}
              onPress={apertarBotaoEntrar}
            >
              <Text style={styles.botaoEsqueciSenhaTexto}>Esqueci minha senha</Text>
            </TouchableOpacity>

          </View>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({

  safeArea:{
    flex:1,
    backgroundColor:Colors.BRANCO
  },

  main:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    marginTop:'12%'
  },

  titulo:{
    fontSize:32,
    color:Colors.MARROM,
    marginTop:'20%',
  },

  containerInputs:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    width:'74%',
    marginTop:'24%'
  },
  
  cpfInput:{
    height:48,
    width:'100%',
    paddingHorizontal:12,
    borderWidth:1,
    borderRadius:8,
    borderColor:Colors.LARANJA,
    marginTop:'8%',
    boxSizing: 'border-box',
  },

  senhaInput:{
    height:48,
    width:'100%',
    paddingHorizontal:12,
    borderWidth:1,
    borderRadius:8,
    borderColor:Colors.LARANJA,
    marginTop:'8%',
    boxSizing: 'border-box',
  },

  botaoEntrar:{
    backgroundColor:Colors.LARANJA,
    height:48,
    width:'100%',
    borderRadius:8,
    boxSizing: 'border-box',
    marginTop:'12%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },

  botaoEntrarTexto:{
    color:Colors.BRANCO,
    fontSize:20
  },

  botaoEsqueciSenha:{
    width:'100%',
    display:'flex',
    alignItems:'flex-start'
  },

  botaoEsqueciSenhaTexto:{
    color:Colors.LARANJA,
    fontSize:12,
    marginTop:'4%'
  }
})