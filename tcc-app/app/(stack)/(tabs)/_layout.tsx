import { Tabs } from 'expo-router'
import React from 'react'

export default function TabsLayout() {
  return (
    <Tabs>
        <Tabs.Screen
            name='index'
            options={{
                headerShown:false,
            }}
        />
        
        <Tabs.Screen
            name='informacoesCadastrais'
            options={{
                headerShown:false,
            }}
        />

        <Tabs.Screen
            name='holerite'
            options={{
                headerShown:false,
            }}
        />
    </Tabs>
  )
}