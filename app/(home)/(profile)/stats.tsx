import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const categories = ['Overview', 'Games', 'Wins', 'Losses', 'Win Rate'] as const;

type Category = typeof categories[number];

const stats: Record<Category, Record<string, string | number>> = {
  Overview: {
    'Games Played': 120,
    'Wins': 85,
    'Losses': 35,
    'Win Rate': '70%',
  },
  Games: {
    'Total Games': 120,
    'Games Today': 5,
    'Games This Week': 20,
  },
  Wins: {
    'Total Wins': 85,
    'Wins Today': 4,
    'Wins This Week': 15,
  },
  Losses: {
    'Total Losses': 35,
    'Losses Today': 1,
    'Losses This Week': 5,
  },
  'Win Rate': {
    'Win Rate': '70%',
    'Win Rate Today': '80%',
    'Win Rate This Week': '75%',
  },
};

export default function StatsScreen() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Overview');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.avatar} />
        <Text style={styles.username}>John Doe</Text>
      </View>
      <Text style={styles.heading}>Statistics</Text>
      <View style={styles.categoryContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[styles.categoryButton, selectedCategory === category && styles.selectedCategory]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.statSection}>
        <Text style={styles.sectionHeading}>{selectedCategory}</Text>
        {Object.entries(stats[selectedCategory]).map(([key, value]) => (
          <View key={key} style={styles.statRow}>
            <Text style={styles.statLabel}>{key}:</Text>
            <Text style={styles.statValue}>{value}</Text>
          </View>
        ))}
      </View>
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
  heading: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: '#0056B3',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    margin: 5,
  },
  selectedCategory: {
    backgroundColor: '#003A8C',
  },
  categoryText: {
    color: 'white',
    fontSize: 16,
  },
  statSection: {
    width: '100%',
    backgroundColor: '#014DA3',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionHeading: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  statLabel: {
    color: 'white',
    fontSize: 18,
  },
  statValue: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
