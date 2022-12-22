import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IProduct } from "../models/IProduct";

export const productAPI = createApi({
  reducerPath: "productAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    fetchAllProducts: build.query<IProduct[], number>({
      query: (limit: number = 4) => ({
        url: "/products",
        params: {
          _limit: limit,
        },
      }),
    }),
    fetchProductByCategory: build.query<IProduct[], [number, string]>({
      query: ([limit = 4, category = "kit"]) => ({
        url: "./products",
        params: {
          _limit: limit,
          ["category.category"]: category,
        },
      }),
    }),

    // Для CardDetail, пока не тестировалось:
    fetchProductById: build.query<IProduct, number>({
      query: (id: number) => ({
        url: `/products/${id}`,
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

export const { useFetchAllProductsQuery, useFetchProductByCategoryQuery } =
  productAPI;
