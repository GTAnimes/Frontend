import { SET_ANIME_LIST, ADD_ANIME, AnimeActionTypes } from './actionTypes';

export interface Anime {
  mal_id: number;
  title: string;
  members: number;
}

const initialState: Anime[] = [];

const animeReducer = (state = initialState, action: AnimeActionTypes): Anime[] => {
  switch (action.type) {
    case SET_ANIME_LIST:
      return action.payload;
    case ADD_ANIME:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default animeReducer;
