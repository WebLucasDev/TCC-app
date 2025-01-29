import { Tabs } from 'expo-router';
import React from 'react';
import { AntDesign, MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; // Importando ícones de diferentes bibliotecas
import { useColorScheme } from 'react-native'; // Para detectar o tema do dispositivo
import Colors from '@/constants/Colors'; // Se você tem um arquivo de cores definidas

export default function TabsLayout() {
    return (
      <Tabs>
        {/* Aba Ponto */}
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: "Ponto",
            tabBarIcon: ({ color, size, focused }) => (
              <AntDesign
                name="clockcircleo" // Ícone do AntDesign
                size={size}
                color={focused ? "#FF8C00" : "#808080"} // Laranja quando ativo, cinza quando inativo
              />
            ),
          }}
        />
  
        {/* Aba Informações Cadastrais */}
        <Tabs.Screen
          name="informacoesCadastrais"
          options={{
            headerShown: false,
            title: "Cadastro",
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialIcons
                name="person" // Ícone do MaterialIcons
                size={size}
                color={focused ? "#FF4500" : "#808080"} // Vermelho quando ativo, cinza quando inativo
              />
            ),
          }}
        />
  
        {/* Aba Holerite */}
        <Tabs.Screen
          name="holerite"
          options={{
            headerShown: false,
            title: "Holerite",
            tabBarIcon: ({ color, size, focused }) => (
              <FontAwesome5
                name="file-invoice-dollar" // Ícone do FontAwesome5
                size={size}
                color={focused ? "#008000" : "#808080"} // Verde quando ativo, cinza quando inativo
              />
            ),
          }}
        />
      </Tabs>
    );
  }
  