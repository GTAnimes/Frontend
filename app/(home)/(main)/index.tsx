import PlayButton from "@/components/buttons/PlayButton";
import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.gameSectionTitle}>Guess The Anime</Text>
      <PlayButton
        title="SOLO"
        description="Challenge yourself and top the leaderboard!"
        pText="1P"
        link="/difficulty"
        bgColor="#2D882D"
        pColor="#1D591D"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#002E72",
    paddingHorizontal: 12,
  },
  gameSectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    paddingBottom: 12,
  },
});
