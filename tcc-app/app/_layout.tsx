import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import { Stack } from 'expo-router'
import React from 'react'
import { tokenCache } from '@/cache'

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env'
  );
}

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <Stack>
            <Stack.Screen
              name='index'
              options={{
                headerShown:false,
            }}/>

            <Stack.Screen
              name='redefinirSenha'
              options={{
                headerShown:false,
            }}/>

            <Stack.Screen
              name='redefinirSenhaConfirmacao'
              options={{
                headerShown:false,
            }}/>

            <Stack.Screen
              name='(tabs)'
              options={{
                headerShown:false
            }}/>
            
        </Stack>
      </ClerkLoaded>
    </ClerkProvider>
  )
}