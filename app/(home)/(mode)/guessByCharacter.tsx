import { Anime } from "@/redux/anime/animeReducer";
import { useRouter, useLocalSearchParams } from "expo-router";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { selectAnime } from "@/redux/reducer";
import { getRandomAnimeCharacters } from "@/services/animeServices";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function byCharacterScreen() {
  const router = useRouter();
  const { diff } = useLocalSearchParams();
  const animeList = useSelector(selectAnime);
  const randomAnime = Math.floor(Math.random() * animeList.length);

  const [animeChar, setAnimeChar] = useState<string | null>(null); // Change to string or null
  const [isLoading, setIsLoading] = useState(false);

  const [query, setQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Anime[]>([]);

  const handleInputChange = (text: string) => {
    setQuery(text);
    const filtered = animeList.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered.slice(0, 5));
  };

  async function fetchPicture() {
    setIsLoading(true);
    try {
      const result = await getRandomAnimeCharacters(animeList[randomAnime]);
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
    <SafeAreaView style={styles.container}>
      {animeChar && (
        <Image source={{ uri: animeChar }} style={styles.image} />
      )}
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
        keyExtractor={(item) => item.title}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: { width: "100%", height: 200 },
  input: {
    borderColor: "#FFF",
    color: "white",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingLeft: 10,
    marginHorizontal: 12,
    marginTop: 24,
    backgroundColor: "#0462EF",
  },
  listContainer: {
    paddingHorizontal: 12,
    marginHorizontal: 12,
    backgroundColor: "white",
  },
  separator: {
    height: 1,
    backgroundColor: "#0462EF",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
});
