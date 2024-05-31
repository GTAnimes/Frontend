import { RootState } from "./store";

export const selectUser = (state: RootState) => state.user;
export const selectAnime = (state: RootState) => state.anime;
<<<<<<< HEAD
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
=======
export const selectKnownAnime = (state: RootState) => state.anime.filter(anime => anime.members > 170000);
export const selectFirstAiringAnime = (state: RootState) => {
    const check = state.anime.filter(anime => anime.members > 170000);
    let anime = []
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
>>>>>>> 66845402e899b266fc9a4df664bd14b64aebc3ec
    }
    if (can) {
      anime.push(check[i]);
    }
  }
  return anime;
};
