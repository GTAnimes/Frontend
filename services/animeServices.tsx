import { Anime } from "@/redux/anime/animeReducer";
import axios from "axios";

// export async function getRandomAnimePictures(Anime: Anime) {
//   try {
//     const response = await axios.get(
//       `https://www.googleapis.com/customsearch/v1`,
//       {
//         params: {
//           key: "AIzaSyDbBibocELpWV0b1LE3vrsBkzmeSOXHqcM",
//           cx: "a4d51bfb155df4aa9",
//           searchType: "image",
//           q: Anime.title + " scene",
//           num: 10, // Get 10 images to increase randomness
//         },
//       }
//     );
//     console.log(Anime.title);
//     const images = response.data.items;
//     const randomIndex = Math.floor(Math.random() * images.length);
//     return images[randomIndex].link;
//   } catch (error) {
//     console.error("Error fetching the data:", error);
//     throw error; // Re-throw the error for the caller to handle
//   }
// }

export async function getRandomAnimePictures(Anime: Anime) {
  const apiUrl = `https://api.jikan.moe/v4/anime/${Anime.mal_id}/pictures`;
  try {
    const response = await axios.get(apiUrl);
    return response.data.data[0].jpg.large_image_url; // Returns the data from the API
  } catch (error) {
    console.error('Error fetching the data:', error);
    throw error; // Re-throw the error for the caller to handle
  }
}