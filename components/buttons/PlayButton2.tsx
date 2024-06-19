import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface PlayButtonProps {
  pText: string;
  title: string;
  description: string;
  onPress: () => void;
}

const PlayButton: React.FC<PlayButtonProps> = ({
  description,
  onPress,
  pText,
  title,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.leftSection}>
        <Text style={styles.pointText}>{pText}</Text>
      </View>
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
    marginHorizontal: 2,
    marginVertical: 10,
    height: "auto",
  },
  leftSection: {
    backgroundColor: "#1D591D", // Darker green for the left section
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 59,
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