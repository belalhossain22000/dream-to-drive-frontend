import { baseApi } from "./baseApi";

const biddingsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all pet
    getAllBiddings: build.query({
      query: () => ({
        url: `/biddings`,
        method: "GET",
      }),
      providesTags: ["Biddings"],
    }),
    // get all pet
    createBiddings: build.mutation({
      query: (payload: any) => {
        return {
          url: `/biddings`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useCreateBiddingsMutation, useGetAllBiddingsQuery } =
  biddingsApi;
