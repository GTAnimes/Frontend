import React, { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { API_URI } from "@/constants/API";

interface RegisterResponse {
  success: boolean;
  message?: string;
}

export default function SignUpScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    try {
      const response = await axios.post<RegisterResponse>(`${API_URI}/accounts/signup/`, {
        username: username,
        password: password,
      });

      if (response.data.success) {
        router.push('/(main)');
      } else {
        Alert.alert('Register Failed', response.data.message || 'Invalid username or password');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // The request was made and the server responded with a status code outside the range of 2xx
          console.error('Response error:', error.response.data);
          console.error('Status:', error.response.status);
          console.error('Headers:', error.response.headers);
          Alert.alert('Login Error', error.response.data.message || 'Invalid username or password');
        } else if (error.request) {
          // The request was made but no response was received
          console.error('Request error:', error.request);
          Alert.alert('Login Error', 'No response from the server. Please try again later.');
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error:', error.message);
          Alert.alert('Login Error', 'An error occurred while setting up the request. Please try again later.');
        }
      } else {
        // Handle any other type of error (non-Axios errors)
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
        <Button title="Register" onPress={handleRegister} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  box: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
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
});
