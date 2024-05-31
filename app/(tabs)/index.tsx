import { API_URI } from "@/constants/API";
import axios from "axios";
import { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import {
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";

export default function HomeScreen() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event: any) => {
    setUsername(event);
  }

  const handlePassword = (event: any) => {
    setPassword(event);
  }

  const handleSignup = () => {
    return alert(1);
  };

  const handleLogin = () => {
    axios.post(API_URI + "/accounts/login/", {username: username, password: password})
      .then((res: any) => {
        alert(res.data.message);
      })
      .catch(err => {
        alert(err.message)
      });
  };

  if (Platform.OS === "web") {
    return (
      <GestureHandlerRootView style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.title}> Hello ! </Text>
          <Text> Welcome to GTAnime </Text>
        </View>
        <View>
          <View style={styles.loginBox}>
            <TextInput style={styles.loginItem} placeholder="Username" onChangeText={handleUsername} value={username}/>
            <TextInput style={styles.loginItem} placeholder="Password" onChangeText={handlePassword} value={password}/>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.buttonText}> Login </Text>
            </TouchableOpacity>
            <Text> Forget Password?</Text>
            <View style={styles.lineContainer}>
              <View style={styles.line}></View>
            </View>
            <Text>
              {" "}
              Sign up{" "}
              <Text style={styles.signUpButton} onPress={handleSignup}>
                here
              </Text>
              !
            </Text>
          </View>
        </View>
      </GestureHandlerRootView>
    );
  } else if (Platform.OS === "android") {
    return (
      <GestureHandlerRootView style={styles.androidContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.title}> Hello ! </Text>
          <Text> Welcome to GTAnime </Text>
        </View>
        <View>
          <View style={styles.androidloginBox}>
            <TextInput style={styles.androidloginItem} placeholder="Email" />
            <TextInput style={styles.androidloginItem} placeholder="Password" />
            <TouchableOpacity
              style={styles.androidLoginButton}
              onPress={handleLogin}
            >
              <Text style={styles.buttonText}> Login </Text>
            </TouchableOpacity>
            <Text> Forget Password?</Text>
            <Text>
              {" "}
              Sign up{" "}
              <Text style={styles.signUpButton} onPress={handleSignup}>
                here
              </Text>
              !
            </Text>
          </View>
        </View>
      </GestureHandlerRootView>
    );
  }
}

const styles = StyleSheet.create({
  //Web Styling
  signUpButton: {
    color: "blue",
  },
  buttonText: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#DADDE1",
    marginVertical: 20,
    width: "80%",
  },
  lineContainer: {
    width: "100%", // Take full width of the parent
    alignItems: "center", // Align the line in the center horizontally
  },
  loginBox: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderBlockColor: "black",
    height: 360,
    width: 400,
    alignItems: "center",
    backgroundColor: "white",
  },
  loginButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
    height: 56,
    width: "100%",
    marginVertical: 10,
  },
  loginItem: {
    borderWidth: 1,
    borderRadius: 6,
    margin: 6,
    height: 56,
    padding: 10,
    width: "100%",
  },
  title: {
    color: "red",
  },
  welcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  //Android Styling
  androidContainer: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "center",
  },
  androidloginBox: {
    marginHorizontal: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderBlockColor: "black",
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
  },
  androidloginItem: {
    borderWidth: 1,
    borderRadius: 6,
    margin: 6,
    height: 56,
    padding: 10,
    width: 300,
  },
  androidLoginButton: {
    backgroundColor: "blue",
    padding: 5,
    borderRadius: 10,
    width: 300,
    marginVertical: 10,
  },
});
