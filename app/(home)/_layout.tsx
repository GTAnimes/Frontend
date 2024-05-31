import { Stack } from 'expo-router';
import { addAnime } from '@/redux/anime/actionCreators';
import { selectAnime } from '@/redux/reducer';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function HomeLayout() {
  const anime = useSelector(selectAnime);
  const dispatch = useDispatch();
  useEffect(() => {
    if (anime.length < 1000) {
      setTimeout(() => {
        axios.get("https://api.jikan.moe/v4/anime?q=&sort=desc&order_by=score&page=" + (anime.length / 25 + 1))
          .then(res => {
            dispatch(addAnime(res.data.data));
          })
          .catch(error => {
            alert(error)
          });
      }, 500);
    }
  }, [anime])

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: false
      }}>
      <Stack.Screen name="index" options={{headerShown: false}}/>
      <Stack.Screen name="SignUp" options={{headerTitle: "Register"}}/>
      <Stack.Screen name="(main)"/>
    </Stack>
  );
}
