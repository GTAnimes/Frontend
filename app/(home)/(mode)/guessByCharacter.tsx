import { Anime } from "@/redux/anime/animeReducer";
import { useRouter, useLocalSearchParams } from "expo-router";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
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
    <View style={styles.container}>
      <Text style={styles.header}> You selected {diff} difficulty</Text>
      {isLoading && (<ActivityIndicator/>)}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#002E72",
    alignItems: "center",
  },
  header: {
    width: "100%",
    backgroundColor:"white",
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: { 
    width: "100%",
    height: "60%",
  },
  input: {
    borderColor: "#FFF",
    color: "white",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingLeft: 10,
    marginHorizontal: 12,
    marginTop: 24,
    width: "100%",
    backgroundColor: "#0462EF",
  },
  listContainer: {
    paddingHorizontal: 12,
    marginHorizontal: 12,
    backgroundColor: "white",
    width: "100%",
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
