import { useRouter, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function byCharacterScreen() {
  const router = useRouter();
  const { diff } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text> This is guess By Character !! {diff} </Text>
      <Text onPress={() => router.back()}> Back </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
