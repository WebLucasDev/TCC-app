import { Text, View, StyleSheet, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";


export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.main}>
        
        <Image 
          source={require('../../assets/images/MetreLogo1.png')}
        />

        <Text style={styles.titulo}>Seja Bem-Vindo(a)</Text>

        <View>
          
          <TextInput
            style={styles.cpf}
          />

          <TextInput
            style={styles.senha}
          />

        </View>

      </View>
    </SafeAreaView>
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

  cpf:{

  },

  senha:{
    
  }

  
})