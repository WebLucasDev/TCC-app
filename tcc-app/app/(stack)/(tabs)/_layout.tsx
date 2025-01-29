import { Tabs } from 'expo-router'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Constants from '@/constants/Constants';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function TabsLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarIconStyle:{marginBottom:'2%'},
            
        }}>

        <Tabs.Screen
            name='index'
            options={{
                headerShown:false,
                title:'Ponto',
                tabBarIcon:({ size, focused }) => (
                    <AntDesign
                        name="clockcircle"
                        size={size}
                        color={focused ? Constants.LARANJA : Constants.MARROM}/>
                )
            }}
        />
        
        <Tabs.Screen
            name='informacoesCadastrais'
            options={{
                headerShown:false,
                title:'Cadastro',
                tabBarIcon:({ size, focused }) => (
                    <Ionicons
                        name="document-text-sharp"
                        size={size}
                        color={focused ? Constants.LARANJA : Constants.MARROM}/>
                )
            }}
        />

        <Tabs.Screen
            name='holerite'
            options={{
                headerShown:false,
                title:'Holerite',
                tabBarIcon:({ size, focused }) => (
                    <FontAwesome6
                        name="circle-dollar-to-slot"
                        size={size}
                        color={focused ? Constants.LARANJA : Constants.MARROM}/>
                )
            }}
        />
    </Tabs>
  )
}