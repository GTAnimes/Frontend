import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function leaderboardScreen() {
  return (
    <View style={styles.container}>
      <Text> This is Setting !!</Text>
      <View style={styles.box}>
        <Link href="/SignUp"> Register </Link>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: '90%',
    height: "48%",
    backgroundColor: "white", 
    justifyContent: 'center',
    alignItems: 'center',
    margin: "2%",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
