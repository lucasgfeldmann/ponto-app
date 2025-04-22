import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedInput } from '@/components/ThemedInput';

export default function HomeScreen() {
  return (

    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">PONTO</ThemedText>
      <ThemedView style={{width:'90%', gap: 8}}>
        <ThemedText type="default">Email</ThemedText>
        <ThemedInput />
        <ThemedText type="default">Password</ThemedText>
        <ThemedInput />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 50,
  }
});
