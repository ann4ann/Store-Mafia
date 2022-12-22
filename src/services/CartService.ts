import { ICart } from "../models/ICart";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const cartAPI = createApi({
  reducerPath: "cartAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    fetchCartById: build.query<ICart, number>({
      query: (id: number) => ({
        url: `/cart/${id}`,
      }),
    }),
  }),
});
