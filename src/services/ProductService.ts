import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IProduct } from "../models/IProduct";

export const productAPI = createApi({
  reducerPath: "productAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/product",
  }),
  endpoints: (build) => ({
    fetchAllProducts: build.query<IProduct[], number>({
      query: (limit: number = 4) => ({
        url: "/",
        // params: {
        //   _limit: limit,
        // },
      }),
    }),
    fetchProductByCategory: build.query<IProduct[], [number, string]>({
      query: ([limit = 4, category = "kit"]) => ({
        url: `/category/${category}`,
        // params: {
        //   _limit: limit,
        // },
      }),
    }),

    // Для CardDetail, пока не тестировалось:
    fetchProductById: build.query<IProduct, string>({
      query: (id) => ({
        url: `/${id}`,
      }),
    }),

    // fetchProductsForUserCard: build.query<>({
    //   query: () => ({
    //     // url: `/products?_embed`,
    //     // url: `/products?_embed`,
    //   }),
    // }),
  }),
});

export const { useFetchAllProductsQuery, useFetchProductByCategoryQuery, useFetchProductByIdQuery, useLazyFetchProductByIdQuery } =
  productAPI;
