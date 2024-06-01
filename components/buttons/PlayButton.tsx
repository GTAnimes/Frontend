import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface PlayButtonProps {
  pText: string;
  title: string;
  description: string;
  link: string;
  pColor: string;
  bgColor: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({
  description,
  pText,
  link,
  title,
  bgColor,
  pColor,
}) => {
  return (
    <Link href={link} style={[styles.button, { backgroundColor: bgColor }]}>
      <View style={[styles.container]}>
        <View style={[styles.leftSection, { backgroundColor: pColor }]}>
          <Text style={styles.pointText}>{pText}</Text>
        </View>
        <View style={styles.rightSection}>
          <Text style={styles.soloText}>{title}</Text>
          <Text style={styles.challengeText}>{description}</Text>
        </View>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    height: "auto",
  },
  container: {
    flexDirection: "row",
    overflow: "hidden",
  },
  leftSection: {
    width: 60,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  rightSection: {
    justifyContent: "center",
    paddingLeft: 10,
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
