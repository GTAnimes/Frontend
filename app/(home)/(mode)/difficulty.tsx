import { useRouter, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import DifficultyButton from "@/components/buttons/DifficultyButton";

export default function DifficultyScreen() {
  const router = useRouter();
  const {type, desc} = useLocalSearchParams();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.title}> Guess Anime By The {type} </Text>
        <Text style={styles.text}>
          {desc}
        </Text>
      </View>
      <DifficultyButton 
        title="Level Easy"
        description="You will be given a character and you need to guess it"
        onPress={() => {
          router.push({
            pathname: `/guessBy${type}`,
            params: {
              diff: "easy",
            },
          });
        }}
      />
      <DifficultyButton 
        title="Level Medium"
        description="You will be given a character and you need to guess it"
        onPress={() => {
          router.push({
            pathname: `/guessBy${type}`,
            params: {
              diff: "medium",
            },
          });
        }}
      />
      <DifficultyButton 
        title="Level Hard"
        description="You will be given a character and you need to guess it"
        onPress={() => {
          router.push({
            pathname: `/guessBy${type}`,
            params: {
              diff: "hard",
            },
          });
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#002E72",
    padding: 20,
    alignItems: "center",
  },
  textBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#002E72",
    marginBottom: 10,
  },
  text: {
    color: "#002E72",
    textAlign: "center",
  },
  button: {
    marginBottom: 20,
    width: "100%",
  },
});
