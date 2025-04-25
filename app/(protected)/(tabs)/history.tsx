import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

export default function HistoryScreen() {
    return (
        <ThemedView style={styles.backGround}>
            <ThemedText style={{textAlign: 'center'}} type='subtitle'>History</ThemedText>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    backGround: {
        flex: 1,
        backgroundColor: Colors.light.background,
    }
})