import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function detailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> This is friends !!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#002E72",
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: "white",
  },
});
