import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IReview } from "../models/IReview";


export const reviewAPI = createApi({
  reducerPath: "reviewAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ['Review'],
  endpoints: (build) => ({
    fetchReviews: build.query<IReview[], string>({
      query: (productId) => ({
        url: "./reviews",
        params: {
          productId,
        },
      }),
      providesTags: result => ['Review']
    }),
    fetchReviewsLimit: build.query<IReview[], [number, string]>({
      query: ([limit = 2, productId]) => ({
        url: "./reviews",
        params: {
          _limit: limit,
          productId,
        },
      }),
      providesTags: result => ['Review']
    }),
    createReview: build.mutation<IReview, IReview>({
      query: (review) => ({
        url: `./reviews`,
        method: 'POST',
        body: { ...review }
      }),
      invalidatesTags: ["Review"]
    }),
  }),
});

export const { useFetchReviewsQuery, useLazyFetchReviewsLimitQuery, useCreateReviewMutation } = reviewAPI