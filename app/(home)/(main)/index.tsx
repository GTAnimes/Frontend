import PlayButton from "@/components/buttons/PlayButton";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

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
      <PlayButton
        title="Guess By Character"
        description="Challenge yourself and top the leaderboard!"
        onPress={() => {
          //Navigate to Set Difficulty Screen.
          router.push({
            pathname: "../(mode)/difficulty",
            params: {
              type: "Character",
              desc: "In this section, you will be given a character and you need to guess the anime name correctly."
            },
          });
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
