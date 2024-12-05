import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const recentGames = [
  { date: '2024-06-20', opponent: 'Player1', result: 'Win' },
  { date: '2024-06-21', opponent: 'Player2', result: 'Loss' },
  { date: '2024-06-22', opponent: 'Player3', result: 'Win' },
  // Add more recent games as needed
];

export default function detailsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.avatar} />
        <Text style={styles.username}>John Doe</Text>
      </View>
      <View style={styles.detailsSection}>
        <Text style={styles.detailLabel}>Country:</Text>
        <Text style={styles.detailValue}>USA</Text>
      </View>
      <View style={styles.detailsSection}>
        <Text style={styles.detailLabel}>Joined Date:</Text>
        <Text style={styles.detailValue}>2023-05-15</Text>
      </View>
      <Text style={styles.heading}>Recent Games</Text>
      {recentGames.map((game, index) => (
        <View key={index} style={styles.gameRow}>
          <Text style={styles.gameDate}>{game.date}</Text>
          <Text style={styles.gameOpponent}>{game.opponent}</Text>
          <Text style={styles.gameResult}>{game.result}</Text>
        </View>
      ))}
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 15,
  },
  username: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  detailsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#014DA3',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  detailLabel: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  detailValue: {
    color: 'white',
    fontSize: 18,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#014DA3',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  gameDate: {
    color: 'white',
    fontSize: 16,
  },
  gameOpponent: {
    color: 'white',
    fontSize: 16,
  },
  gameResult: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
