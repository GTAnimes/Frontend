import PlayButton from "@/components/buttons/PlayButton";
import { View, Text, StyleSheet } from "react-native";

export default function DifficultyScreen() {
  return (
    <View style={styles.container}>
      <PlayButton
        description="Trend Anime, Top 400 MAL"
        link="/gamescreen"
        pText="EZ"
        title="Easy"
        bgColor="#2D882D"
        pColor="#1D591D"
      />
      <View style={{ marginVertical: 6 }} />
      <PlayButton
        description="Top 1000 MAL"
        link=""
        pText="MD"
        title="Medium"
        bgColor="#4A2222"
        pColor="#753A3A"
      />
      <View style={{ marginVertical: 6 }} />
      <PlayButton
        description="Top 2000 MAL"
        link=""
        pText="HD"
        title="Hard"
        bgColor="#2A211B"
        pColor="#2A211B"
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
});
