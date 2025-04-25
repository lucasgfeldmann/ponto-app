import { AuthContext } from '@/utils/authContext';
import { Redirect, Stack } from 'expo-router';
import { useContext } from 'react';

const isLoggedIn: boolean = false;

export default function ProtectedLayout() {
  const authState = useContext(AuthContext);

  if (!authState.isLoggedIn) {
    return <Redirect href='/login' />
  }
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
