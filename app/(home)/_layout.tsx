import { Stack } from "expo-router";
import { addAnime, setAnimeList } from "@/redux/anime/actionCreators";
import { selectAnime } from "@/redux/reducer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, View } from "react-native";

export default function HomeLayout() {
  const anime = useSelector(selectAnime);
  const dispatch = useDispatch();
  useEffect(() => {
    // if(anime.length > 0) {
    //   dispatch(setAnimeList([]))
    // }
    if (anime.length < 4000) {
      setTimeout(() => {
        axios
          .get(
            "https://api.jikan.moe/v4/anime?q=&sort=desc&order_by=score&page=" +
              (anime.length / 25 + 1)
          )
          .then((res) => {
            let newAnime = [];
            for (let i = 0; i < res.data.data.length; i++) {
              const animeData = {
                mal_id: res.data.data[i].mal_id,
                title: res.data.data[i].title,
                members: res.data.data[i].members,
              };
              newAnime.push(animeData);
            }
            dispatch(addAnime(newAnime));
          })
          .catch((error) => {
            alert(error);
          });
      }, 100);
    }
  }, [anime]);

  if (anime.length < 4000) {
    return (
      <View>
        <Text>Please Wait. {(anime.length * 100) / 4000} %</Text>
      </View>
    );
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#002E72",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "light",
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="SignUp"
        options={{ headerTitle: "Register", headerShown: false }}
      />
      <Stack.Screen
        name="difficulty"
        options={{
          headerTitle: "Difficulty",
          headerTitleStyle: { fontWeight: "500" },
        }}
      />
      <Stack.Screen
        name="gamescreen"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
    </Stack>
  );
}
