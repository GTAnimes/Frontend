import { Anime } from "@/redux/anime/animeReducer";
import { selectAnime, selectFirstAiringAnime } from "@/redux/reducer";
import { getRandomAnimePictures } from "@/services/animeServices";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

export default function GameScreen() {
  const animeList = useSelector(selectAnime);
  const [animePicture, setAnimePicture] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const randomAnime = Math.floor(Math.random() * animeList.length);

  async function fetchPicture() {
    setIsLoading(true);
    setAnimePicture(await getRandomAnimePictures(animeList[randomAnime]));
    setIsLoading(false);
  }
  useEffect(() => {
    fetchPicture();
  }, []);

  const [query, setQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Anime[]>([]);

  const handleInputChange = (text: string) => {
    setQuery(text);
    const filtered = animeList.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered.slice(0, 5));
  };

  const renderItem = ({ item }: { item: Anime }) => (
    <View style={styles.itemContainer}>
      <Text>{item.title}</Text>
    </View>
  );

  if (animePicture.length === 0) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: animePicture }} style={styles.image} />
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
    backgroundColor: "#002E72",
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
