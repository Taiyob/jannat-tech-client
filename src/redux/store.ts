import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./features/auth/registerSlice";
import loginReducer from "./features/auth/loginSlice";
import userCredentialReducer from "./features/auth/userCredentialSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { baseApi } from "./api/baseApi";

const persistUserCredentialConfig = {
  key: "userCredential",
  storage,
};
const persistedUserCrendentialReducer = persistReducer(
  persistUserCredentialConfig,
  userCredentialReducer
);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    register: registerReducer,
    login: loginReducer,
    userCredentialInfo: persistedUserCrendentialReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseApi.middleware
    ),
});

export const persistor = persistStore(store);
// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
