import { SET_ANIME_LIST, ADD_ANIME, AnimeActionTypes } from './actionTypes';
import { Anime } from './animeReducer';

export const setAnimeList = (animeList: Anime[]): AnimeActionTypes => ({
  type: SET_ANIME_LIST,
  payload: animeList,
});

export const addAnime = (anime: Anime[]): AnimeActionTypes => ({
  type: ADD_ANIME,
  payload: anime,
});