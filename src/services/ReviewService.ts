import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IReview } from "../models/IReview";

export const reviewAPI = createApi({
  reducerPath: "reviewAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/api/review",
  }),
  tagTypes: ['Review'],
  endpoints: (build) => ({
    fetchReviews: build.query<IReview[], { limit?: number, productId: string }>({
      query: ({ limit, productId }) => ({
        url: "/",
        params: { limit: limit, productId },
      }),
      providesTags: result => ['Review'] 
    }),
    createReview: build.mutation<IReview, IReview>({
      query: (review) => ({
        url: `/`,
        method: 'POST',
        body: { ...review }
      }),
      invalidatesTags: ["Review"]
    }),
  }),
});

export const { useFetchReviewsQuery, useLazyFetchReviewsQuery, useCreateReviewMutation } = reviewAPI