import { Link } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="account-details" size={36} color="black" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}> Account details </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <View style={styles.iconContainer}>
          <Ionicons name="stats-chart" size={32} color="black" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}> Stats </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <View style={styles.iconContainer}>
          <FontAwesome5 name="user-friends" size={24} color="black" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}> Friends </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="report-problem" size={32} color="black" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}> Report Problem </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <View style={styles.iconContainer}>
          <SimpleLineIcons name="logout" size={28} color="black" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}> Logout </Text>
        </View>
      </TouchableOpacity>

      <Link href="../../(home)" style={styles.text}> Logout </Link>
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
  text: {
    color: "white",
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#2D882D', // Green background
    borderRadius: 10,
    overflow: 'hidden',
    margin: 8,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 44,
    backgroundColor: 'white',
  },
  textContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  titleText: {
    color: '#FFFFFF', // White text
    fontSize: 18,
    fontWeight: 'bold',
  },
});
