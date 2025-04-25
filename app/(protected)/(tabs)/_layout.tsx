import { Stack, useRouter } from 'expo-router';
import React, { useContext } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { AuthContext } from '@/utils/authContext';
import { ThemedView } from '@/components/ThemedView';

export default function TabLayout() {
  const authState = useContext(AuthContext);
  const router = useRouter();


  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: '',
          headerTintColor: Colors.light.text,
          headerTransparent: true,
          headerLeft: () =>
            <Pressable onPress={() => router.push('/(protected)/(tabs)/history')}>
              <Ionicons name='list' color={Colors.light.text} size={50} />
            </Pressable>,
          headerRight: () =>
            <Pressable onPress={authState.logOut}>
              <Ionicons name='log-out-outline' color={Colors.light.text} size={50} />
            </Pressable>
        }}
      />
      <Stack.Screen
        name='history'
        options={{
          title: '',
          headerTransparent: false,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Colors.light.background },
          headerLeft: () =>
            <Pressable onPress={() => router.back()}>
              <Ionicons name='arrow-back-outline' color={Colors.light.text} size={50} />
            </Pressable>
        }} />
    </Stack>
  );
}
