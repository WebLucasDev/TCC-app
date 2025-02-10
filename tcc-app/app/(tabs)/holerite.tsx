import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Constants from '@/constants/Constants'
import ContainerSuperior from '@/components/ContainerSuperior'
import DropDownPicker from 'react-native-dropdown-picker';
import Feather from '@expo/vector-icons/Feather';

export default function holerite() {
  
  /* Mês */
  const [abertoMes, setAbertoMes] = useState(false);
  const [valorSelecionadoMes, setValorSelecionadoMes] = useState(null);
  const [meses, setMeses] = useState([
    {label: 'Janeiro', value: 'Janeiro'},
    {label: 'Fevereiro', value: 'Fevereiro'},
    {label: 'Março', value: 'Março'},
    {label: 'Abril', value: 'Abril'},
    {label: 'Maio', value: 'Maio'},
    {label: 'Junho', value: 'Junho'},
    {label: 'Julho', value: 'Julho'},
    {label: 'Agosto', value: 'Agosto'},
    {label: 'Setembro', value: 'Setembro'},
    {label: 'Outubro', value: 'Outubro'},
    {label: 'Novembro', value: 'Novembro'},
    {label: 'Dezembro', value: 'Dezembro'},
  ]);

  /* Mês */
  const [abertoAno, setAbertoAno] = useState(false);
  const [valorSelecionadoAno, setValorSelecionadoAno] = useState(null);
  const [anos, setAnos] = useState([
    {label: '2025', value: '2025'},
    {label: '2024', value: '2024'},
    {label: '2023', value: '2023'},
    {label: '2022', value: '2022'},
  ]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.main}>

          <ContainerSuperior/>

            <View style={styles.containerInputs}>
              <DropDownPicker
                open={abertoMes}
                value={valorSelecionadoMes}
                items={meses}
                setOpen={setAbertoMes}
                setValue={setValorSelecionadoMes}
                setItems={setMeses}
                placeholder='Mês'
                style={styles.inputsAno}
              />

              <DropDownPicker
                open={abertoAno}
                value={valorSelecionadoAno}
                items={anos}
                setOpen={setAbertoAno}
                setValue={setValorSelecionadoAno}
                setItems={setAnos}
                placeholder='Ano'
                style={styles.inputs}
                zIndex={1000}
                />

              <TouchableOpacity style={styles.botaoPesquisar}>
                <Feather name="search" size={20} color={Constants.BRANCO} />
                <Text style={styles.botaoPesquisarTexto}>Pesquisar</Text>
              </TouchableOpacity>

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
    padding:'4%',
    marginTop:'12%',
    backgroundColor:Constants.MARROM,
    opacity:0.7,
    borderWidth:1,
    borderColor:Constants.CINZA,
    borderRadius:Constants.ARREDONDAMENTO_BOTAO,
    justifyContent:'center',
    alignItems:'center'
  },

  inputsAno:{
    marginBottom:'4%',
    borderColor:Constants.LARANJA,
    backgroundColor:Constants.BRANCO,
    opacity:0.8,
  },

  inputs:{
    borderColor:Constants.LARANJA,
    backgroundColor:Constants.BRANCO,
    opacity:0.8,
  },

  botaoPesquisar:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:'4%',
    marginTop:'8%',
    borderRadius:Constants.ARREDONDAMENTO_BOTAO,
    backgroundColor:Constants.LARANJA,
    width:'50%',
    paddingVertical:'1%'
  },

  botaoPesquisarTexto:{
    color:Constants.BRANCO,
    fontWeight:'500',
  }

})