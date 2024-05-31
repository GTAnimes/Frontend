import { Stack } from "expo-router";
import { addAnime } from "@/redux/anime/actionCreators";
import { selectAnime } from "@/redux/reducer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function HomeLayout() {
  const anime = useSelector(selectAnime);
  const dispatch = useDispatch();
  useEffect(() => {
    if (anime.length < 1000) {
      setTimeout(() => {
        axios
          .get(
            "https://api.jikan.moe/v4/anime?q=&sort=desc&order_by=score&page=" +
              (anime.length / 25 + 1)
          )
          .then((res) => {
            dispatch(addAnime(res.data.data));
          })
          .catch((error) => {
            alert(error);
          });
      }, 1000);
    }
  }, [anime]);
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
      <Stack.Screen name="gamescreen" options={{ headerShown: false }} />
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
    </Stack>
  );
}
