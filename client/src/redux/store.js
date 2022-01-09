import { configureStore, combineReducers } from "@reduxjs/toolkit";
import skillReducer from "./skillsRedux";
import projectReducer from "./projectsRedux";
import userReducer from "./userRedux";
import contentReducer from "./contentRedux";
import educationReducer from "./educationRoute";
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

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  skill: skillReducer,
  project: projectReducer,
  user: userReducer,
  content: contentReducer,
  education: educationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
