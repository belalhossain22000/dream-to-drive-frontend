import { baseApi } from "./baseApi";

const reviewsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get review bt products
    getByProductsReview: build.query({
      query: () => ({
        url: `/reviews`,
        method: "GET",
      }),
      providesTags: ["Reviews"],
    }),
    // get all pet
    createReview: build.mutation({
      query: (payload: any) => {
        return {
          url: `/reviews`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["Reviews"],
    }),
  }),
});

export const { useCreateReviewMutation, useGetByProductsReviewQuery } =
  reviewsApi;
