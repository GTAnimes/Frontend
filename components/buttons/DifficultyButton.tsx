import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface DifficultyButtonProps {
  title: string;
  description: string;
  onPress: () => void;
}

const PlayButton: React.FC<DifficultyButtonProps> = ({
  description,
  onPress,
  title,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.rightSection}>
        <Text style={styles.soloText}>{title}</Text>
        <Text style={styles.challengeText}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: "#2D882D", // Green background
    borderRadius: 10,
    overflow: "hidden",
    margin: 8,
  },
  rightSection: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  pointText: {
    color: "#FFFFFF", // White text
    fontSize: 24,
    fontWeight: "bold",
  },
  soloText: {
    color: "#FFFFFF", // White text
    fontSize: 18,
    fontWeight: "bold",
  },
  challengeText: {
    color: "#FFFFFF", // White text
    fontSize: 12,
  },
});

export default PlayButton;
