import { configureStore, combineReducers } from '@reduxjs/toolkit';

// IMPORT REDUCERS
import userReducer from './reducers/userRedux';
import productReducer from './reducers/productRedux';
import clientReducer from './reducers/clientRedux';
import refReducer from './reducers/refRedux';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage
};

// JOIN REDUCERS
const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  client: clientReducer,
  ref: refReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export let persistor = persistStore(store);
