import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from './users/userReducer';
import animeReducer from './anime/animeReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'anime'], // Persist both user and animeList reducers
};

const rootReducer = combineReducers({
  user: userReducer,
  anime: animeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
