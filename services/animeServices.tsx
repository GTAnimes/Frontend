import { Anime } from "@/redux/anime/animeReducer";
import axios from "axios";

export async function getRandomAnimePictures(AnimeList: Anime[], Anime: Anime) {
    let AnimeSequel = [];
    for (let i = 0; i < AnimeList.length; i++){
        if (AnimeList[i].title.includes(Anime.title)) {
            AnimeSequel.push(AnimeList[i]);
        }
    }
    const index = Math.floor(Math.random() * AnimeSequel.length);
    const apiUrl = `https://api.jikan.moe/v4/anime/${AnimeSequel[index].mal_id}/pictures`;
    try {
      const response = await axios.get(apiUrl);
      return response.data; // Returns the data from the API
    } catch (error) {
      console.error('Error fetching the data:', error);
      throw error; // Re-throw the error for the caller to handle
    }
}
