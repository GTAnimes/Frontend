import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, Alert } from 'react-native';

const initialFriends = [
  { name: 'Alice Johnson', profilePic: 'https://via.placeholder.com/50', status: 'Online' },
  { name: 'Bob Smith', profilePic: 'https://via.placeholder.com/50', status: 'Offline' },
  { name: 'Charlie Brown', profilePic: 'https://via.placeholder.com/50', status: 'Busy' },
  // Add more friends as needed
];

export default function FriendsListScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [friends, setFriends] = useState(initialFriends);

  const filteredFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddFriend = () => {
    // Here you can add functionality to navigate to an "Add Friend" screen or display an alert
    Alert.alert('Add Friend', 'Add Friend button pressed!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Friends List</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search Friends"
        placeholderTextColor="#ccc"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {filteredFriends.map((friend, index) => (
        <View key={index} style={styles.friendRow}>
          <Image source={{ uri: friend.profilePic }} style={styles.friendAvatar} />
          <View style={styles.friendInfo}>
            <Text style={styles.friendName}>{friend.name}</Text>
            <Text style={styles.friendStatus}>{friend.status}</Text>
          </View>
        </View>
      ))}
      <Button title="Add Friend" onPress={handleAddFriend} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#002E72',
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchInput: {
    width: '100%',
    backgroundColor: '#014DA3',
    color: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  friendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#014DA3',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  friendAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  friendInfo: {
    flexDirection: 'column',
  },
  friendName: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  friendStatus: {
    color: 'white',
    fontSize: 16,
  },
});
