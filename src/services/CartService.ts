import { ICart, UpdateQuantity, productItem } from "../models/ICart";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const cartAPI = createApi({
  reducerPath: "cartAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/cart",
  }),
  tagTypes: ['Cart'],
  endpoints: (build) => ({

    fetchCartById: build.query<ICart, string>({
      query: (userId) => ({
        url: `/${userId}`
      }),
      providesTags: () => ['Cart']
    }),

    updateQuantity: build.mutation<ICart, UpdateQuantity>({
      query: (props) => ({
        url: `/update`,
        method: 'PUT',
        body: { ...props }
      }),
      invalidatesTags: ["Cart"]
    }),

    createCartItem: build.mutation<ICart, {userId: string, productId: string, price: number}>({
      query: (props) => ({
        url: `/create/item`,
        method: 'PUT',
        body: { ...props }
      }),
      invalidatesTags: ["Cart"]
    }),

    deleteCartItem: build.mutation<ICart[], { userId: string, productId: string }>({
      query: (props) => ({
        url: `/delete`,
        method: 'DELETE',
        body: { ...props }
      }),
      invalidatesTags: ["Cart"]
    }),
    
  }),
});

export const {
  useFetchCartByIdQuery,
  useUpdateQuantityMutation,
  useCreateCartItemMutation,
  useDeleteCartItemMutation
} = cartAPI

