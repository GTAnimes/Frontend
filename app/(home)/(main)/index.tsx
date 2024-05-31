import PlayButton from "@/components/buttons/PlayButton";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.gameSectionTitle}>Guess The Anime</Text>
      <PlayButton
        title="SOLO"
        description="Challenge yourself and top the leaderboard!"
        onPress={() => {
          //Navigate to Set Difficulty Screen.
        }}
        pText="1P"
      />
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
