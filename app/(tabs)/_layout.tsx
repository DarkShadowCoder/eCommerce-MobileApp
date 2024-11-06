import { Stack } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import ContextProvider from '@/context/context';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <ContextProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="index"
          options={{
            title: 'Home',
          }}
        />
        <Stack.Screen
          name="cart"
          options={{
            title: 'Cart',
          }}
        />
        <Stack.Screen
          name="product"
          options={{
            title: 'Product',
          }}
        />
      </Stack>
    </ContextProvider>
  );
}
