import { Anime } from "./animeReducer";
export const SET_ANIME_LIST = 'SET_ANIME_LIST';
export const ADD_ANIME = 'ADD_ANIME';

interface SetAnimeListAction {
  type: typeof SET_ANIME_LIST;
  payload: Anime[];
}

interface AddAnimeAction {
  type: typeof ADD_ANIME;
  payload: Anime;
}

export type AnimeActionTypes = SetAnimeListAction | AddAnimeAction;

