import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { selectAnime } from '@/redux/reducer';
import { getRandomAnimeCharacters } from '@/services/animeServices';
import Timer from '@/components/buttons/Timer';
import ScoreModal from '@/components/buttons/scoreModal';
import { Anime } from '@/redux/anime/animeReducer';

export default function byCharacterScreen() {
  const router = useRouter();
  const { diff } = useLocalSearchParams();
  const animeList = useSelector(selectAnime);
  const randomAnimeIndex = Math.floor(Math.random() * animeList.length);

  const [animeChar, setAnimeChar] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Anime[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const handleInputChange = (text: string) => {
    setQuery(text);
    const filtered = animeList.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered.slice(0, 5));
  };

  const handleTimeEnd = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  async function fetchPicture() {
    setIsLoading(true);
    try {
      const result = await getRandomAnimeCharacters(animeList[randomAnimeIndex]);
      setAnimeChar(result); // Assume result is a string URL
    } catch (error) {
      console.error("Error fetching picture:", error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchPicture();
  }, []);

  const renderItem = ({ item }: { item: Anime }) => (
    <View style={styles.itemContainer}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}> You selected {diff} difficulty</Text>
      <Text style={styles.score}> Current score : {score}</Text>
      {isLoading && <ActivityIndicator />}
      <ScoreModal visible={showModal} score={score} onClose={closeModal} />
      {animeChar && <Image source={{ uri: animeChar }} style={styles.image} />}
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Type anime title..."
        value={query}
        onChangeText={handleInputChange}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.title}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContainer}
      />
      <Timer onTimeEnd={handleTimeEnd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002E72',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '60%',
  },
  input: {
    borderColor: '#FFF',
    color: 'white',
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingLeft: 10,
    marginHorizontal: 12,
    marginTop: 24,
    width: '100%',
    backgroundColor: '#0462EF',
  },
  listContainer: {
    paddingHorizontal: 12,
    marginHorizontal: 12,
    backgroundColor: 'white',
    width: '100%',
  },
  score: {
    color: 'white',
    fontSize: 25,
  },
  separator: {
    height: 1,
    backgroundColor: '#0462EF',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
});
