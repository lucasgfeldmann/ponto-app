import { Alert, Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedInput } from '@/components/ThemedInput';
import { ThemedButton } from '@/components/ThemedButton';

export default function HomeScreen() {

  function doSomethin(): void {
    Alert.alert("Some Alert", "Here there is some alert")
  }


  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">00:00:00</ThemedText>
      <ThemedText type='default'>Category</ThemedText>
      <Pressable style={{ width: '90%' }} onPress={() => doSomethin()}>
        <ThemedButton style={styles.button}>
          <ThemedText style={styles.buttonText}>START</ThemedText>
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
