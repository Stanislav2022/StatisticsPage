import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { filterDateReducer } from './filterdate/filterdate-slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const followPersistConfig = {
  key: 'follow',
  storage,
};

export const store = configureStore({
  reducer: {
    date: filterDateReducer,
  },
  middleware,
});

export const persistor = persistStore(store);
