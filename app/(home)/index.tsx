import React, { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { API_URI } from "@/constants/API";

export default function HomeScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URI}/accounts/login/`, {
        username: username,
        password: password,
      });

      if (response.data.message === 'User logged in successfully.') {
        console.log("Success");
        router.push('/(main)');
      } else {
        Alert.alert('Login Failed', response.data.message || 'Invalid username or password');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Response error:', error.response.data);
          console.error('Status:', error.response.status);
          console.error('Headers:', error.response.headers);
          Alert.alert('Login Error', error.response.data.message || 'Invalid username or password');
        } else if (error.request) {
          console.error('Request error:', error.request);
          Alert.alert('Login Error', 'No response from the server. Please try again later.');
        } else {
          console.error('Error:', error.message);
          Alert.alert('Login Error', 'An error occurred while setting up the request. Please try again later.');
        }
      } else {
        console.error('Unexpected error:', error);
        Alert.alert('Login Error', 'An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to GTAnime!!</Text>
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <View style={styles.login}>
          <Button title="Login" onPress={handleLogin} />
        </View>
        <Link href="/(main)" style={styles.link} > Play As A Guest </Link>
        <Link href="/SignUp" style={styles.link}> Register </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  link: {
    fontSize: 18,
    color: '#007bff',
    marginVertical: 10,
  },
  login: {
    marginVertical: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
