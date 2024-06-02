import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text> This is Profile !!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: "90%",
    height: "48%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    margin: "2%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
