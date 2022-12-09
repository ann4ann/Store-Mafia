import { productAPI } from "./../services/ProductService";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userAPI } from "../services/UserService";

const rootReducer = combineReducers({
  [productAPI.reducerPath]: productAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        // .concat(postAPI.middleware)
        .concat(userAPI.middleware)
        .concat(productAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
