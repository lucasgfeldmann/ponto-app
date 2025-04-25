import { Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedInput } from '@/components/ThemedInput';
import { ThemedButton } from '@/components/ThemedButton';

export default function HomeScreen() {
  return (

    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">PONTO</ThemedText>
      <ThemedView style={{ width: '90%', gap: 8 }}>
        <ThemedText type="default">Email</ThemedText>
        <ThemedInput />
        <ThemedText type="default">Password</ThemedText>
        <ThemedInput />
      </ThemedView>
      <Pressable style={{ width: '90%' }}>
        <ThemedButton style={styles.button}>
          <ThemedText style={styles.buttonText}>LOGIN</ThemedText>
        </ThemedButton>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 100,
  },
  button: {
    backgroundColor: '#E4F2E4',
    width: '100%',
    borderRadius: 8,
    lineHeight: 30,
    borderWidth: 2,
    borderColor: '#010409',
    fontSize: 26,
    height: 50,
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontWeight: "900"
  }
});
