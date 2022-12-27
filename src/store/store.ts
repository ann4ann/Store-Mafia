import { productAPI } from "./../services/ProductService";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userAPI } from "../services/UserService";
import { cartAPI } from "../services/CartService";
import { reviewAPI } from "../services/ReviewService";

const rootReducer = combineReducers({
  [productAPI.reducerPath]: productAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [cartAPI.reducerPath]: cartAPI.reducer,
  [reviewAPI.reducerPath]: reviewAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(userAPI.middleware)
        .concat(productAPI.middleware)
        .concat(cartAPI.middleware)
        .concat(reviewAPI.middleware)
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
