import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRouter } from "expo-router";
import { Link } from 'expo-router';
import ProfileButton from "@/components/buttons/ProfileButton";
import { MaterialCommunityIcons, Ionicons, FontAwesome5, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ProfileButton
        iconName="account-details"
        iconComponent={MaterialCommunityIcons}
        iconSize={36}
        title="Account details"
        onPress={() =>router.push({
          pathname: "../(profile)/details",
        })}
      />
      <ProfileButton
        iconName="stats-chart"
        iconComponent={Ionicons}
        iconSize={32}
        title="Stats"
        onPress={() =>router.push({
          pathname: "../(profile)/stats",
        })}
      />
      <ProfileButton
        iconName="user-friends"
        iconComponent={FontAwesome5}
        iconSize={24}
        title="Friends"
        onPress={() =>router.push({
          pathname: "../(profile)/friends",
        })}
      />
      <ProfileButton
        iconName="report-problem"
        iconComponent={MaterialIcons}
        iconSize={32}
        title="Report Problem"
        onPress={() => alert("pressed")}
      />
      <ProfileButton
        iconName="logout"
        iconComponent={SimpleLineIcons}
        iconSize={28}
        title="Logout"
        onPress={() => alert("pressed")}
      />
      <Link href="../../(home)" style={styles.text}>Logout</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#002E72",
    paddingHorizontal: 12,
  },
  text: {
    color: "white",
  },
});
