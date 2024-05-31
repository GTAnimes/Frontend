import { RootState } from "./store";

export const selectUser = (state: RootState) => state.user;
export const selectAnime = (state: RootState) => state.anime;
export const selectKnownAnime = (state: RootState) =>
  state.anime.filter((anime) => anime.members > 170000);
export const selectUsableAnime = (state: RootState) => {
  const check = state.anime.filter((anime) => anime.members > 170000);
  let anime = [];
  for (let i = 0; i < check.length; i++) {
    let can = true;
    for (let j = 0; j < check.length; j++) {
      if (i === j) continue;
      if (check[i].title.includes(check[j].title)) {
        can = false;
        break;
      }
    }
    if (can) {
      anime.push(check[i]);
    }
  }
  return anime;
};
