import { ICart, productItem } from "../models/ICart";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const cartAPI = createApi({
  reducerPath: "cartAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ['Cart'],
  endpoints: (build) => ({
    fetchCartById: build.query<ICart[], number>({
      query: (userId: number) => ({
        url: `/cart`,
        params: {
          userId
        },
      }),
      providesTags: () => ['Cart']
    }),
    updateCartById: build.mutation<ICart[], [number, [ICart, productItem[]]]>({
      query: ([id, [cart, items]]) => ({
        url: `/cart/${id}`,
        method: 'PUT',
        body: { ...cart, items }
      }),
      invalidatesTags: ["Cart"]
    })
  }),
});

export const {
  useFetchCartByIdQuery,
  useUpdateCartByIdMutation
} = cartAPI

