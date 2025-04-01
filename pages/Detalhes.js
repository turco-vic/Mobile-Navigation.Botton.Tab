import { View, Text, StyleSheet } from "react-native";

export default function Detalhes() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Developer in development!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
    },
    title: {
        fontSize: 30,
    },
});