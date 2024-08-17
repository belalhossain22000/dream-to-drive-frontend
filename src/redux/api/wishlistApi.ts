import { baseApi } from "./baseApi";

const wishlistApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all pet
    getWishlist: build.query({
      query: () => ({
        url: `/wishlist`,
        method: "GET",
      }),
      providesTags: ["Wishlist"],
    }),
    // get all pet
    createWishlist: build.mutation({
      query: (payload: any) => {
        return {
          url: `/wishlist`,
          method: "PUT",
          body: payload,
        };
      },
      invalidatesTags: ["Wishlist"],
    }),
  }),
});

export const { useGetWishlistQuery,useCreateWishlistMutation } = wishlistApi;
