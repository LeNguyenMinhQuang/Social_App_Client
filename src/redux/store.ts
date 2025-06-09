import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddle from "redux-saga";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootSaga from "./saga/root.saga";
import AuthReducer from "./slide/auth/auth.slice";
import PostReducer from "./slide/post/post.slice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["app"],
};

const sagaMiddleware = createSagaMiddle();

const rootReducer = combineReducers({
  auth: AuthReducer,
  post: PostReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware as any),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
